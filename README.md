# Simplybook-landing-page

## Installation
1. Once you have cloned the repo, run npm install. This will install the node modules needed to run the applicaiton.

## How to run the app locally
npm run dev

## How to deploy on heroku

I have a postInstall script in package.json that will build the app with webpack.
Webpack and other npm modules to build the app are in devDependencies.

In order to build on Heroku, you have to do the following:
heroku config:set NPM_CONFIG_PRODUCTION=false
which will allow heroku to install modules in devDependencies.

## Live
https://simplybook-landing-v1.herokuapp.com/
