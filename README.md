# Astro Quickstart Template    

![netlify + astro logo](coming soon)

This is a bare-bones Astro project that has everything you need to quickly deploy it to [Netlify](https://netlify.com). 

## ⚡️ Quick Setup + Deploy Option

Click this button and it will help you create a new repo, create a new Netlify project, and deploy!

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/astro-quickstart)

## 💫 Regular Setup

 ### 1. Cloning + Install Packages

  - Clone this repo with one of these options:

    - Click the 'Use this template' button at the top of the page
    - Or via the command line `git clone https://github.com/netlify-templates/astro-quickstart`

  - Then install the necessary packages and run the project locally to make sure everything works.

  ```bash
  npm install
  npm run dev serve
  ```

  Alternatively, you can run this locally with [the Netlify CLI](https://docs.netlify.com/cli/get-started/)'s `netlify dev` command for more options like receiving a live preview to share (`netlify dev --live`) and the ability to test [Netlify Functions](https://www.netlify.com/products/functions) and [redirects](https://docs.netlify.com/routing/redirects/). 

  ### 2. Deploying

  - There are a few ways to deploy this template:
    - Use the `netlify deploy` command
    - Head to the [Netlify UI](https://app.netlify.com/) to deploy via GitHub or [drag and drop](https://app.netlify.com/drop) the project folder
    - Use the Netlify CLI's create from template command `netlify sites:create-template astro-quickstart` which will create a repo, Netlify project, and deploy it

## Astro 💙 Netlify Resources

Here are some resources to help you on your Astro + Netlify coding fun!

- [Astro on Netlify Integration Page](https://docs.netlify.com/integrations/frameworks/astro)
- [Build wicked fast sites with Astro: An Introduction](https://www.netlify.com/blog/2021/07/08/build-wicked-fast-sites-with-astro-an-introduction/#main)

- [A Template for Building Shopify Stores with Astro and the Storefront API](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions)

Hope this template helps :) Happy coding 👩🏻‍💻!

---

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).
