# taniatours
A website for a Russian speaking tour guide in Belgium. 

## features
**MVP**
Users can:
It's possible to book selected tours on allowed days. If a day already has a tour booked, it shows up as unavailable. Price-per-person depends on the selected tour, date (holidays vs normal time vs ...), amount of people joining the tour etc. Customers can leave reviews on a tour they booked. 

Admin can:
Create, edit and delete tours. 
See an "agenda" of booked tours. 
Reply to reviews. 

**Nice to have**
- CI/CD with Github Actions to Test / Deploy the project
- email notifications when booking a tour for user and admin
- payment processor integration
- calendar API for admin agenda to sync to phone + generate ics calendar file for user. 
- reviews have images
- front-end based image optimization

## frontend
Feature: user-facing website: 

Tech: nuxt.js

Reasoning: better for SEO and performance.

Feature: CMS Administration

Tech: vue.js

Reasoning: A CMS admin page will (most likely) have to be more reactive than a user page

## backend
Feature: CMS Systems

Tech: Node.js + Firebase + SQL 

Reasoning: Using node.js in advfw clases, need to learn it anyway. 

Alternative: PHP instead of Node.js
