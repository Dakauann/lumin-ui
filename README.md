# ⚙ How to install?

### NPM:

```console
npm i lumin-ui
```

### In your tailwindconfig.js:

```javascript
module.exports = {
  // your tailwind config
  plugins: [require("lumin-ui").default],
};
```

## ⚠ lumin-ui uses tailwindcss as its core styling tool, to install it firstly you'll need to install tailwindcss:

```console
npm install -D tailwindcss
npx tailwindcss init
```

Theres a complete guide of how to install and use tailwindcss with any frameworks: <a href="https://tailwindcss.com/docs/installation/framework-guides">Click here<a/>
