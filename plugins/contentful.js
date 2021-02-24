const contentful = require('contentful')

export function createClient () {
  return contentful.createClient({
    space: process.env.contentfulSpace,
    environment: process.env.contentfulEnv,
    accessToken: process.env.contentfulToken
  })
}
