# Grit & Motion Beta v1.5.1 PWA Install Ready

This build fixes the install/app setup for GitHub Pages.

## What changed
- Added `manifest.json`
- Added `<link rel="manifest" href="manifest.json">` to `index.html`
- Confirmed app icons are referenced for install
- Kept `service-worker.js` for installed-app/offline behavior
- Added a small install prompt helper for browsers that support it

## Upload these files to the root of your GitHub repo
- `index.html`
- `manifest.json`
- `service-worker.js`
- `app-icon-192.png`
- `app-icon-512.png`
- `grit-motion-logo.png`
- `grit-motion-logo-splash.png`
- `grit-motion-mark.png`
- `README.md`
- `android-native/`
