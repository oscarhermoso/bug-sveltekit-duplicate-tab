# bug-sveltekit-duplicate-tab 🌶️

This repo was created to reproduce this issue: https://github.com/sveltejs/kit/issues/9780

## Set up

```bash
npm ci
npm run dev
```

## Steps to reproduce

1. Click the link to go to the `/example` route
2. Duplicate the tab (`Ctrl+Shift+K` on Chromium browsers)

### Expected result:

HTML page is rendered

### Actual result:

JSON payload is rendered

Recording:

![bug-sveltekit-duplicate-tab](https://user-images.githubusercontent.com/23239955/234785167-caf9623b-9ea1-4ee8-ab3e-d76e27ecbd71.gif)
