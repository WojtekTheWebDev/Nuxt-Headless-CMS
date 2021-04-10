# Nuxt Headless CMS

**Nuxt Headless CMS** is a template for personal websites and blogs. 
The project was made with [Nuxt.js](https://nuxtjs.org/) and [Contentful](https://www.contentful.com/) as a headless CMS and [Vuetify](https://vuetifyjs.com/) as a UI framework.

- Build your pages and manage dynamically in the Contentful
- Configure routes, logo and page icon in the Contentful
- Manage meta title and meta description for SEO improvement
- Implement multiple locales with [nuxt/i18n](https://i18n.nuxtjs.org/)

Project documentation is in progress, it will appear here someday.

## Getting started

Preparation of the project requires few 

### Contentful setup

For this step it is necessary to have an acount on [Contentful](https://www.contentful.com/) (free for personal usage) and Contentful CLI [installed](https://www.contentful.com/developers/docs/tutorials/cli/installation/) and [authenticated](https://www.contentful.com/developers/docs/tutorials/cli/authentication/).

1. In the project there is prepaired export file with all content models. To import it use Contentful CLI [space import](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) 
```bash
contentful space import --space-id YOUR_SPACE_ID --content-file ./contentful-export.json --content-model-only --skip-locales
```
2. Verify if last line of import message was ```The import was successful.```
3. Log in to your contentful space and check your content models. Right now, there are 13 content models.
4. Prepare locales in Contentful app. Open ```Settings > Locales```, add locales with ```Add locale``` button and set some locale falbacks on locale edit page.
5. Create page content for home page
6. Create config content for main page config. **Important note: There should be only 1 config content**
7. Done!

Description of all content models and it's fields with examples will be availble in the documentation, when I finally finish it.

### Project setup

1. Clone this project or download from github and unzip it
2. Install all dependencies with ```yarn install``` or ```npm install```
3. Connect project with Contentful by creating environment variables or add information directly in ```nuxt.config.js``` file.
```js
(...)
env: {
    contentfulSpace: process.env.CONTENTFUL_SPACE || YOUR_CONTENTFUL_SPACE_ID,
    contentfulEnv: process.env.CONTENTFUL_ENV || 'master',
    contentfulToken: process.env.CONTENTFUL_TOKEN || YOUR_CONTENTFUL_ACCESS_TOKEN,
    pageContentModel: process.env.CONTENTFUL_PAGE_CONTENT_MODEL || 'page',
    configContentModel: process.env.CONTENTFUL_CONFIG_CONTENT_MODEL || 'config',
    contentfulIncludeLevel: process.env.CONTENTFUL_INCLUDE_LEVEL || 10,
    contactDetailsContentModel: process.env.CONTACT_DETAILS_CONTENT_MODEL || 'contactDetails'
  },
(...)
```
4. Run development mode with ```yarn dev``` or ```npm run dev``` or production mode with ```yarn start``` or ```npm run start```
5. Done!

## Live demo

Documentation and live demo will appear here as soon as I finish it.

## Customization

This project has an option to change theme style and add new content blocks and manage them in the Contentful app 

### Styling

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

### New content blocks

To create new content block:
1. Create new content model in Contentful app
2. Modify Section's content blocks field validation - Add new content block to list of accepted entry types
3. Add it to sections content
4. Create new component in ```components/cms/``` directory with props based on new content model's fields
5. Open ```helpers/CMS.js``` file
6. Import new component
```js
import NewComponent from '@/components/cms/NewComponent'
```
7. Add new component's case to ```parseCMSBlock``` function
```js
(...)
case 'contentModelName':
  return {
    component: NewComponent,
    name: contentBlock.fields?.name,
    props: {
      field1: contentBlock.fields?.field1,
      field2: contentBlock.fields?.field2,
      (...)
    }
  }
(...)
```
8. Done!

## License

**Nuxt Headless CMS** is released under the MIT License.