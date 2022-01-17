import express from 'express'
import Integration from '../types/cms/Integration'
import { ENTRY_NOT_FOUND, PAGE_NOT_FOUND_MESSAGE } from './consts'

const app = express()

app.use(express.json())

const {
  getConfig,
  getPageBySlug,
  getPageByName
}: Integration = require(`./integrations/${process.env.INTEGRATION}`)

app.get('/config', async (req, res) => {
  try {
    const locale = req.query.locale
    const config = await getConfig(locale as string)
    res.status(200).json(config)
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === ENTRY_NOT_FOUND
    ) {
      res.status(404).json(PAGE_NOT_FOUND_MESSAGE)
    } else {
      res.status(500).json(error)
    }
  }
})

app.get('/page/:slugOrName', async (req, res) => {
  try {
    const { getByName, locale, parentSlug } = req.query

    const page = getByName
      ? await getPageByName(req.params.slugOrName, locale as string | undefined)
      : await getPageBySlug(req.params.slugOrName, parentSlug as string | undefined, locale as string | undefined)

    res.status(200).json(page)
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === ENTRY_NOT_FOUND
    ) {
      res.status(404).json(PAGE_NOT_FOUND_MESSAGE)
    } else {
      res.status(500).json(error)
    }
  }
})

export default {
  path: '/api',
  handler: app
}
