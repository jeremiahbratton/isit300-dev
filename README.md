# ISIT 300 Dev Baseline

**Style A.** Fork this repository. The stack already runs. Later folders under `public/` and `src/chat.ts` / `src/auth.ts` are Style C shells. Do not submit those TODOs unchanged.

Stack:

- Node Alpine
- TypeScript Hono
- SQLite file in `data/app.db`
- Caddy local HTTPS
- Dev Container configuration

## Run

```sh
docker compose up --build
```

Open:

- App direct: http://localhost:3000
- Caddy HTTPS: https://localhost
- Health: http://localhost:3000/health

## Dev Container

Open this folder in VS Code or Cursor and choose **Reopen in Container**.

## Typecheck

```sh
npm run typecheck
```

## Your work

- [ ] TODO(student): Confirm `/health` and `/api/notes`, then describe them in this README.
- [ ] TODO(student): Restart the stack and show that SQLite data is still there.
- [ ] TODO(student): Copy your resume into `public/`.
- [ ] Week 9+: `public/forms/`
- [ ] Week 10+: `public/dashboard/`
- [ ] Week 11+: `compose.ollama.yml`, `public/chat/`, `src/chat.ts`
- [ ] Week 13+: `public/login.html`, `public/register.html`, `public/dashboard.html`, `src/auth.ts`

Feature shells do not contain finished fetch, chat, or auth logic.
