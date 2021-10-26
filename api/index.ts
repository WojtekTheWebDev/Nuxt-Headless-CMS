import express from 'express'
import { getConfig, getPageBySlug, getPageByName } from './integrations/contentful'

const app = express()

app.use(express.json())

app.get('/config', async (req, res) => {
  try {
    const locale = req.query.locale
    const config = await getConfig(locale as string)
    res.status(200).json(config)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.get('/page/:slugOrName', async (req, res) => {
  try {
    const { getByName, locale, parentSlug } = req.query

    const page = getByName
      ? await getPageByName(req.params.slugOrName, locale as string)
      : await getPageBySlug(req.params.slugOrName, parentSlug as string || null, locale as string)

    res.status(200).json(page)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default {
  path: '/api',
  handler: app
}
