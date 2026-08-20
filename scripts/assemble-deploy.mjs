#!/usr/bin/env node
/**
 * Builds every app (prerendered/static) with the correct base-href for GitHub
 * Pages and assembles them into a single dist-deploy/ tree:
 *
 *   dist-deploy/            <- landing app (site root)
 *   dist-deploy/obgyn/      <- obgyn course app
 *   dist-deploy/.nojekyll
 *   dist-deploy/404.html    <- copy of landing's index.html (fallback for bad links)
 *
 * Base path is derived from GITHUB_REPOSITORY (set automatically in GitHub
 * Actions) so nothing here is hardcoded to a specific repo name:
 *   - "<owner>/<owner>.github.io"  -> served at "/"
 *   - "<owner>/<anything-else>"    -> served at "/<anything-else>/"
 * Falls back to "/" for local runs (no GITHUB_REPOSITORY set).
 */
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const repo = process.env.GITHUB_REPOSITORY; // "owner/name"

let base = '/';
if (repo) {
  const [owner, name] = repo.split('/');
  base = name?.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '/' : `/${name}/`;
}
const obgynBase = base.endsWith('/') ? `${base}obgyn/` : `${base}/obgyn/`;
const obgynV2Base = base.endsWith('/') ? `${base}obgyn-v2/` : `${base}/obgyn-v2/`;
const newbornCareBase = base.endsWith('/') ? `${base}newborn-care/` : `${base}/newborn-care/`;

console.log(`[assemble-deploy] base="${base}" obgynBase="${obgynBase}" obgynV2Base="${obgynV2Base}" newbornCareBase="${newbornCareBase}"`);

function run(cmd) {
  console.log(`[assemble-deploy] $ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: root });
}

run(`npx nx build landing --configuration=production --base-href ${base}`);
run(`npx nx build obgyn --configuration=production --base-href ${obgynBase}`);
run(`npx nx build obgyn-v2 --configuration=production --base-href ${obgynV2Base}`);
run(`npx nx build newborn-care --configuration=production --base-href ${newbornCareBase}`);

const deployDir = join(root, 'dist-deploy');
rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });

const landingBrowser = join(root, 'dist/apps/landing/browser');
const obgynBrowser = join(root, 'dist/apps/obgyn/browser');
const obgynV2Browser = join(root, 'dist/apps/obgyn-v2/browser');
const newbornCareBrowser = join(root, 'dist/apps/newborn-care/browser');

if (!existsSync(landingBrowser)) throw new Error(`Missing build output: ${landingBrowser}`);
if (!existsSync(obgynBrowser)) throw new Error(`Missing build output: ${obgynBrowser}`);
if (!existsSync(obgynV2Browser)) throw new Error(`Missing build output: ${obgynV2Browser}`);
if (!existsSync(newbornCareBrowser)) throw new Error(`Missing build output: ${newbornCareBrowser}`);

cpSync(landingBrowser, deployDir, { recursive: true });
cpSync(obgynBrowser, join(deployDir, 'obgyn'), { recursive: true });
cpSync(obgynV2Browser, join(deployDir, 'obgyn-v2'), { recursive: true });
cpSync(newbornCareBrowser, join(deployDir, 'newborn-care'), { recursive: true });

writeFileSync(join(deployDir, '.nojekyll'), '');
copyFileSync(join(landingBrowser, 'index.html'), join(deployDir, '404.html'));

console.log(`[assemble-deploy] done -> ${deployDir}`);
