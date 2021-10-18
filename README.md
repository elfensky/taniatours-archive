# taniatours
A website for a Russian speaking tour guide in Belgium. 

## features<br/>
**MVP**<br/>
Users can:<br/>
It's possible to book selected tours on allowed days. If a day already has a tour booked, it shows up as unavailable. Price-per-person depends on the selected tour, date (holidays vs normal time vs ...), amount of people joining the tour etc. Customers can leave reviews on a tour they booked. 

Admin can:<br/>
Create, edit and delete tours. <br/>
See an "agenda" of booked tours. <br/>
Reply to reviews. 
<br/>

**Nice to have**
- CI/CD with Github Actions to Test / Deploy the project
- email notifications when booking a tour for user and admin
- payment processor integration
- calendar API for admin agenda to sync to phone + generate ics calendar file for user. 
- reviews have images
- front-end based image optimization

## frontend
Feature: user-facing website:<br/>
Tech: nuxt.js<br/>
Reasoning: better for SEO and performance.

Feature: CMS Administration<br/>
Tech: vue.js<br/>
Reasoning: A CMS admin page will (most likely) have to be more reactive than a user page<br/>

## backend
Feature: CMS & Data systems<br/>
Tech: strapi + Firebase + SQL + filesystem<br/>
Reasoning: Using node.js in advfw clases, need to learn it anyway so might as well use strapi which is based on node.js<br/>
Alternative: PHP instead of Node.js<br/>
