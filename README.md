# taniatours

A website for a Russian speaking tour guide in Belgium.

## features<br/>

**Description of MVP **<br/>
Users can:<br/>
It's possible to book selected tours on allowed days. If a day already has a tour booked, it shows up as unavailable. Price-per-person depends on the selected tour, date (holidays vs normal time vs ...), amount of people joining the tour etc. Customers can leave reviews on a tour they booked.

Admin can:<br/>
Create, edit and delete tours. <br/>
See an "agenda" of booked tours. <br/>
Reply to reviews.
<br/>

## Features

Feature: user-facing website:<br/>
Tech: nuxt.js <br/>
Reasoning: better for SEO and performance.
Alt-tech: vue.js <br/>

Feature: Content Management System<br/>
Tech: strapi<br/>
Reasoning: An admin page that will make it easy for non-techies to edit the site content<br/>

Feature: Booking Management System<br/>
Tech: node.js<br/>
Reasoning: Just using strapi for everything would be too simple, and this way I also separate the website into "micro"-services.
If the booking breaks you can still look at the website and just sms or call the tourguide.
This is a node api that has an api for the website (nuxt) to query so process registration and an administration page for admins to view bookings and users to view their reservations.<br/>

<!-- Feature: CMS & Data systems<br/>
Tech: strapi + Firebase + SQL + filesystem<br/>
Reasoning: Using node.js in advfw clases, need to learn it anyway so might as well use strapi which is based on node.js<br/>
Alternative: PHP instead of Node.js<br/> -->

## milestones ('week of' date, not 'by' date)

1. ✅ 08/11/2021 -- convert current static php website into nuxt.js with components etc
2. ✅ 15/11/2021 -- i18s, docker and/or k8
3. ☑️ 22/11/2021 -- user-login, cart & checkout system
4. ☑️ 29/11/2021 -- testing
5. ☑️ 06/12/2021 -- cleanup, extra features

## requirements

### frontend

-   javascript framework: nuxt.js and/or vue.js
-   multi-lang: english, dutch & russian https://i18n.nuxtjs.org
-   testing: 1 unit test. 1 integration test. https://test-utils.nuxtjs.org & https://soshace.com/writing-end-to-end-tests-for-nuxt-apps-using-jsdom-and-ava/
-   styling: scss, ghosts, skeletons & loading states, input validation & error messaging (towards the user)
-   pwa: launch full screen with a correct pwa setup https://pwa.nuxtjs.org
-   error-logging: tbd https://sentry.io, research (selfhosted) alternatives (something to put in a docker container)
-   development setup: make sure to install dev-related npm packages using the -D flag, so they dont end up in the public build
-   staging/deployment: fully in docker. as an extra, automatically test and deploy from a github release to live site
-   build optimisation with vite, webpack etc. minify, combine and so on. (fcp, fmp, ..)

### backend

-   nodejs express api hosted via docker @ k8
-   database(s) to store... data
<!-- -   tours (admin edit, users see)

    -   blog (admin edit, users see)

    -   reservations (users create, admin sees all, users see theirs)
    -   reviews per tour (users create, all see) -->

-   ❓ authentication https://auth.nuxtjs.org (or firebase) NEED PKCE (2 roles minimum) (admin created docent@howest.be P@ssw0rd)
-   ❓ protected against CORS, CSF, CSS
-   api self-documents using swagger or graphiQL (also errors)
-   📚 automatically create and seed database if not exists at app startup
-   ✅ microservice architecture with docker/k8 (1 service uses gRPC or GraphQL)
-   avoid crashes by using try-catch, errors kept with a logger. errors delivered in json format to frontend
-   staging/deployment:
    -   fully docker?
    -   auto deploy using github actions to dockerhub, harbor etc. k8 methidology (canary, blue-green, rolling, ..)

## miscallenious/setup

node.js server to run nuxt.js

node.js server for backend apis:
--> live tracking of visitors?
--> live updating of calendar?
microservice per feature.

firebase for login

once logged in, use firebase ID to get data from db.

## app flow

auth (micro)service (firebase?): guest > user > admin

only responsigle for actual authentication. only. so:

1. request admin page (goes to vue)
2. vue calls auth service (check credentials/cookie)
3. serve admin page or ask to login

same for all other features that require users.

then, using same auth api (so same user can be used)

-   service for blogs (by admin) <br>
    comments on posts (by users)
-   service for tours (by admin) (create, edit, delete) <br>
    reviews on tours (by users)

vue (well, nuxt) calls the relevant api which calls the auth api?

node runs with nuxt and renfers website
strapi or ghost for CMS?

## DOCKER

It should be possible to start the entire by using a **docker-compose up** command.

-   container1: mariadb
-   container2: strapi (depends on mariadb)
    -> site-content (eg: homepage text)
    -> blogs
    -> tours
-   container3: nuxt.js (depends on strapi)
-   container4: node.js (depends on nuxt.js) //comments api

#### extra/nice to have

-   testing in dev pipline (speed/perf/functional)
-   **transitions between screens** (animated?)
-   web workers for heavy loads (if I have any)
-   **shared workers for sync over multiple tabs (keep cart up to date)**
-   CI/CD with Github Actions to Test / Deploy the project
-   email notifications when booking a tour for user and admin
-   in general, email support for sending account creating emails, notifications etc..
-   payment processor integration
-   calendar API for admin agenda to sync to phone + generate ics calendar file for user.
-   🚫 reviews have images
-   ✅ front-end based image optimization //strapi takes care of that
-   api version control
-   response caching & rate limiting
-   unit test my various apis
-   use AI in the cloud to catch bot reviews?
