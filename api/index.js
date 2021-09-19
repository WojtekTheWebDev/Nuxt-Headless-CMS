import express from 'express'
import { getConfig, getPageBySlug, getPageByName } from '../modules/contentful'

const app = express()

app.use(express.json())

app.get('/config', async (req, res) => {
  try {
    const locale = req.query.locale
    const config = await getConfig(locale)
    res.status(200).json(config)
  } catch (error) {
    console.log('config error', error)
    res.status(500).json(error)
  }
})

app.get('/page/:slugOrName', async (req, res) => {
  try {
    const { getByName, locale, parentSlug } = req.query

    const page = getByName
      ? await getPageByName(req.params.slugOrName, locale)
      : await getPageBySlug(req.params.slugOrName, parentSlug, locale)
    page.sections.forEach((section) => {
      console.dir(section.props.content.props.pages)
    })
    res.status(200).json(page)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

export default {
  path: '/api',
  handler: app
}
