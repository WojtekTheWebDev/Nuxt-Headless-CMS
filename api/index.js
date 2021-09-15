import express from 'express'
import { getConfig, getPage } from '../modules/contentful'

const app = express()

app.use(express.json())

app.get('/config', async (req, res) => {
  try {
    const config = await getConfig()
    res.status(200).json(config)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.get('/page/:slug', async (req, res) => {
  try {
    const page = await getPage(req.params.slug)
    res.status(200).json(page)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default {
  path: '/api',
  handler: app
}
