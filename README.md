# package-template

A basic template for a npm package built with typescript.

> by: [G.A.JAGUAR](https://github.com/gajaguar)

## Build Setup

### Docker

#### Fast setup (only linux os)

```bash
# build docker container and install dependencies.
sh install.sh
```
#### Manual

```bash
# create a docker image
docker-compose build
```

```bash
# install dependencies
docker-compose run --rm server pnpm i
```

```bash
# build for production
docker-compose run --rm server yarn build
```

### Local

```bash
# install dependencies
# pnpm (recommended to save disk space)
pnpm i
# or with yarn
yarn
# or native
npm install
```

```bash
# build for production
pnpm build
```
