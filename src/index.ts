import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import Database from 'better-sqlite3'
import { Hono } from 'hono'

type Note = {
  id: number
  body: string
  created_at: string
}

const app = new Hono()
const db = new Database('data/app.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    body TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`)

app.get('/health', (c) => c.json({ ok: true }))

app.get('/api/notes', (c) => {
  const rows = db.prepare('SELECT id, body, created_at FROM notes ORDER BY id DESC').all() as Note[]
  return c.json({ notes: rows })
})

app.post('/api/notes', async (c) => {
  const body = await c.req.json<{ body?: string }>()
  if (!body.body || body.body.trim().length === 0) {
    return c.json({ error: 'Note body is required' }, 400)
  }
  const result = db.prepare('INSERT INTO notes (body) VALUES (?)').run(body.body.trim())
  return c.json({ id: result.lastInsertRowid }, 201)
})

app.use('/*', serveStatic({ root: './public' }))

serve({ fetch: app.fetch, port: 3000 })
console.log('ISIT 300 baseline running on http://localhost:3000')
