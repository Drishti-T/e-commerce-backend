# Nodejs + Hono + Cloudflare

This setup provides the minimal setup to help you get started

## After forking and then cloning the repo make sure to do the following steps
- npm install

## Here we are working with hono instead of express 
- npm install Hono

## Also we will be using few more extra libraries
- npm install cookie-parser
- npm install cors
- npm install jsonwebtoken
- path (no need to install)
- npm install dotenv
- npm install --save-dev @babel/core @babel/node @babel/preset-env babel-plugin-module-resolver

## how will you run the project
- make sure to check the package.json file
- i have included scripts inside the package.json
- npm run dev (Project runs in dev mode i.e. the env file loaded will be of dev mode)
- npm run test-env (Project runs in test mode i.e. the env file loaded will be of test mode)
- npm run start (Project runs in production mode i.e. the env file loaded will be of production mode)

## env files
make sure to create 3 env files

.env
.env.development
.env.test

## zod tyesafety
we also need to create zod schemas for incoming request type checking

lib/zod/schemas