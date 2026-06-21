# Grit & Motion Beta v1.5.2 Android Icon Fix

This repo has been updated for the GitHub Pages app at:

`https://mypioneeringlife.github.io/Grit-and-motion/`

## What changed
- Updated `manifest.json` with the correct GitHub Pages scope and start URL
- Split icon declarations into separate `any` and `maskable` entries
- Added cache-busting icon URLs so Android/Chrome is less likely to reuse the old generic icon
- Updated `service-worker.js` to clear old app caches
- Added `favicon.svg` as a browser fallback icon

## Important phone step
After this update publishes, remove the old home-screen shortcut/app from the phone first. Then reopen the GitHub Pages site in Chrome and install/add it again. Android often keeps the old shortcut icon cached until the previous one is removed.
