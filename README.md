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

- .env
- .env.development
- .env.test

## zod tyesafety
we also need to create zod schemas for incoming request type checking

- lib/zod/schemas

## for the region based currency 
we need to detect the user's ip (Use a GeoIP API (like ipapi, ipinfo.io, or geolocation-db) to detect the user's country.)

- Once the currency is detected, store it in localStorage and use it across the app.
- Get real-time exchange rates from an API like exchangerate-api.com or anyother of your choice
- Convert Prices Based on User’s Currency

process: 
1. Frontend sends user’s currency (detected from IP).

2. Backend fetches exchange rates and converts the price.

3. Backend returns the converted price in the API response.

4. Frontend directly displays the converted price.

## changes made to api

- i added to product CRUD

1.   7 th api which will fetch th elimited amt of product thorugh pagination for fontend to display
2.  also added to product CRUD to return this too with products metadata
    "discountPrice": 39.99,
    "percentDiscount" : 21,
3. changed under discounts and coupouns 
   "5%" to 5
   we dont need "50%" for any discount values only ( int or null )