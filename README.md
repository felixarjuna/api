# API

A repository template to build an API with type safety implemented using Bun, Hono and Drizzle.

## Getting started

Please specify `DATABASE_URL` in the `.env.local` file, update the schema accordingly, generate the migrations files and perform database migration with `bun db:generate` followed by `bun db:migrate`.

```powershell
# install dependencies
bun install

# database migration
bun db:migrate

# start application
bun run dev
```

```powershell
open http://localhost:3000
```
