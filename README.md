# Nuxtfolio
Create your personal website or portfolio with **nuxtfolio**.

## About
**nuxtfolio** is a template for small projects like personal websites or portfolios. Frontend for headless CMS. 

It was made with [nuxt2](https://nuxtjs.org/), [vuetify](https://vuetifyjs.com/) as a UI framework and it communicates with  the headless CMS to render content. It's integrated with one of the most popular headless CMS - [contentful](https://www.contentful.com/).

## Motivation
When I was looking for my first developer position I created my first personal website to stand out of the crowd and have something that I can show during the interviews. 

When I learned something new, gratuate or change the job I had to update the website. Rebuilding and publishing the project was a boring process so I thought that it would be nice to have something like a CMS added to my website. 

Finally I decided to help others like me with this project. Give other a template for nuxt with implemented communication and prepared components to create the website faster.

## Few great modules used in project
- Multilanguages - [nuxt/i18n](https://i18n.nuxtjs.org/)
- Google analitics - [@nuxtjs/google-analytics](https://google-analytics.nuxtjs.org/)
- TypeScript - [@nuxt/typescript-build @nuxt/types](https://typescript.nuxtjs.org/)
- Composition API - [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/)
- Material theme UI - [vuetify](https://vuetifyjs.com/)

## Getting started
Before running the app for the first time, content models and content has to be configurated in the headless CMS (contentful).

### Contentful setup
To be able to import prepared contentful configuration, it's necessary to have an account on [Contentful](https://www.contentful.com/) (free for personal usage) and to have Contentful CLI installed on your machine. [Guide how to install contentful CLI is available here](https://www.contentful.com/developers/docs/tutorials/cli/installation/). After installing the contentful CLI it's necessary to authenticate it - [guide here](www.contentful.com/developers/docs/tutorials/cli/authentication/).

When the contentful CLI is installed and authenticated, run [contentful import/export tool](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) in the command line like this:
```bash
contentful space import --space-id YOUR_SPACE_ID --content-file ./contentful-export.json --content-model-only --skip-locales
```
`contentful-export.json` file contains exported configuration of contentful space.

If the import was successful, content models should be availabe in the management panel.

Steps to create basic content for the app:
1. Open **Content** tab
2. Add new entry of type **Config**
3. Add page name
4. Upload logo page icon, publish them and assign in created config
5. Create **Contact details** entry and assign it in created config
6. Create **Page** entry for home page. Fill the necessary fields and publish the entry
7. Publish created config entry

Content is now prepared. Next, navigate to **Settings > API keys** and add API key. Fill the necessary fields and check the checkbox in Environments settings (if unchecked, the API cannot communicate with the contentful space).
The information about the Space ID and Content Delivery API - access token will be necessary to setup the app.

### App setup
First, create `.env` file in root directory, copy the content of `.env.example` and pase it to `.env` file. Set the value of CONTENTFUL_SPACE to Space ID and the value of CONTENTFUL_TOKEN to Content Delivery API - access token. Both of them can be found in Contentful in **Settings > API keys**.

Now both contentful and app should be configured correctly. Run `npm run install` to install dependencies and `npm run dev` to start the app in development mode.

Good luck with further development!

## Next steps
Some information how to customize the app, add routing and use multiple locales

### Customization

To change theme style open ```nuxt.config.js``` file and modify vuetify theme
```js
(...)
// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      // Global font style
      font: {
        family: 'Quicksand'
      }
    },
    treeShake: true,
    theme: {
      dark: false,
      options: { customProperties: true },
      // Below you can customize theme colors
      themes: {
        light: {
          primary: '#f0db4f',
          secondary: '#323330',
          info: '#2196F3',
          anchor: '#f0db4f',

          // Backgrounds
          lightBackground: '#ffffff',
          darkBackground: '#141414',
          headerBackground: '#141414',
          footerBackground: '#141414'
        }
      }
    }
  },
(...)
```

### Routing
In contentful new pages can be added just by creating additional entries. By slug page property page can be accessed by the brower (example: slug is set to `about-me` so the url would be `localhost:3000/about-me`).

In each page there is a reference to the parten page - with that you can create 1 level of nesting. To access the page in the brower just pass slug of the parrent page and slug of the current page (example: parent page slug is `projects` and current page slug is `my-awesome-project` so the url would be `localhost:3000/projects/my-awesome-project`).

To add those pages to navigation bar and footer, just add those entries in the config's **routing** field.

### Multiple languages of the app
To add other languages of the app, first add locale in the contentful management panel. Navigate to **Settings > Locales** and select new locale.

In app, open `nuxt.config.js` file and modify `i18n` property.
```js
i18n: {
  locales: [{
      code: 'en', // The code from contentful
      iso: 'gb' // ISO locale code to generate the flag - more information about flag generation here: https://www.npmjs.com/package/vue-country-flag
    }, /*
    Other locales
    */
  ],
```
Remember to add translations for messages in new language - inside of `i18n.vueI18n.messages` property.

## License

**Nuxtfolio** is released under the MIT License.
