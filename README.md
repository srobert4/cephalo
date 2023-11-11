# Cephalo

## Development setup

[Install Node.js](https://nodejs.org/en/download)

Install yarn

```
npm install --global yarn
```

Install dependencies

```
npm install
```

For local development

```
npm run dev
```

Formatting

```
yarn format
```

## Deploy to GitHub pages

```
npm run build
npm run deploy
```

### Deploy to GitHub @ Berkeley

Easiest, if hacky way to do this.

* Copy `dist` over to a new repo, which you push to GitHub@Berkley and deploy to pages from.
* Edit paths in `index.html` from `/cephalo/` to `/<your-gh@berkeley-username>/<gh@berkeley-repo-name>/`.

### Acknowledgements

- Table view: https://github.com/apple/ml-translate-vis
- Quill integration: https://github.com/kevmodrome/svelte-quill/tree/master
- GitHub Pages setup: https://hrishikeshpathak.com/blog/svelte-gh-pages/
