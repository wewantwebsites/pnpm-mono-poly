# PNPM MonoRepo Workspace

This was meant to learn how pnpm workspaces are setup and work so that I can better support more advanced monorepo setups like: 
- Turborepo
- Nx
- Bit

## Install

`pnpm install` at the root of the repo should install all deps for all packages and apps

If you want to be more pointed: 
`pnpm --filter [app/package] install`

## Dev Mode
`pnpm --filter [app/package] dev`

hopefully you have recognized the pattern; `--filter` allows us to point a command just at that package or app
`pnpm --filter [app/package] [cmd]`

## Add a package to an app as a dep
to add to a specific app
`pnpm add [package] --filter [app] --workspace`

to add to the root and be widely available
`pnpm add [package] -w` where the `-w` flag tells pnpm this is a workspace-root dep

## Using Nx (nrwl) 
using `nx` is similar to using `pnpm workspace` commands

```bash
npx nx build remix-app
npx nx run-many -t build
```

