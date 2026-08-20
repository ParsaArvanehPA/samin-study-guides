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
 *
 * To add a new course app, just add its project name to COURSE_APPS below.
 */
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const COURSE_APPS = ['obgyn', 'obgyn-v2', 'newborn-care', 'nrp'];

const root = new URL('..', import.meta.url).pathname;
const repo = process.env.GITHUB_REPOSITORY; // "owner/name"

let base = '/';
if (repo) {
  const [owner, name] = repo.split('/');
  base = name?.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '/' : `/${name}/`;
}
const courseBase = (name) => (base.endsWith('/') ? `${base}${name}/` : `${base}/${name}/`);

console.log(`[assemble-deploy] base="${base}"`);
for (const app of COURSE_APPS) {
  console.log(`[assemble-deploy] ${app}Base="${courseBase(app)}"`);
}

function run(cmd) {
  console.log(`[assemble-deploy] $ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: root });
}

run(`npx nx build landing --configuration=production --base-href ${base}`);
for (const app of COURSE_APPS) {
  run(`npx nx build ${app} --configuration=production --base-href ${courseBase(app)}`);
}

const deployDir = join(root, 'dist-deploy');
rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });

const landingBrowser = join(root, 'dist/apps/landing/browser');
if (!existsSync(landingBrowser)) throw new Error(`Missing build output: ${landingBrowser}`);
cpSync(landingBrowser, deployDir, { recursive: true });

for (const app of COURSE_APPS) {
  const browser = join(root, `dist/apps/${app}/browser`);
  if (!existsSync(browser)) throw new Error(`Missing build output: ${browser}`);
  cpSync(browser, join(deployDir, app), { recursive: true });
}

writeFileSync(join(deployDir, '.nojekyll'), '');
copyFileSync(join(landingBrowser, 'index.html'), join(deployDir, '404.html'));

console.log(`[assemble-deploy] done -> ${deployDir}`);
