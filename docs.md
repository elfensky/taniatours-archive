# Installation

### DockerCompose

Clone the repository and run docker compose.
This will start mariadb & backend-node, the latter of which is responsible for storing Reservations.
backend-node will seed the mariadb with the database and a few entries

The plan was to run everything in docker, but life (strapi to be specific) got in the way. It worked fine for months, then docker had an outage, I cleared all my images and it never properly build again.

### To start strapi:

> cd backend-strapi
> npm i //YOU NEED TO USE NODE14LTS
> npm run build
> npm run start

it will run on localhost:3001

### To start Nuxt:

> cd frontend-nuxt
> npm i //YOU NEED TO USE NODE16LTS
> npm run build
> npm run start

Dit start de frontend op de locale poort 3000
I can't run it in docker because I can't get strapi in docker, and Apollo can't use "host.docker.internal", it needs a real url.

### Config

In the root of the project you need an .env file with:
MYSQL_ROOT_PASSWORD={some-password}
MYSQL_PASSWORD={some-other-password}

Inside backend-node you need a ormconfig.docker.env file with:
TYPEORM\*CONNECTION = mysql
TYPEORM_HOST = mariadb
TYPEORM_PORT = 3306
TYPEORM_USERNAME = root
TYPEORM_PASSWORD = {some-password}
TYPEORM_DATABASE = taniatours
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = false
TYPEORM_ENTITIES = dist/entity/\*\*/\_.js
TYPEORM_ENTITIES_DIR = dist/entity
