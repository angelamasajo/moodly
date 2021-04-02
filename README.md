# Moodly App

Link to app: https://plantventory-app.vercel.app/

## About the App

Take care of your plants with ease. Plantventory allows users tobrowse through available plants within the database, where they can find plant type, toxicity, and care details to help them find proper care for plants.

By adding plants to the their own user list, users can easily sift through it to keep 
important plant details in one place.

## Pages

### Landing Page 
![landing_page](/app-screenshots/plantventory-home.png)
This is the introduction located on the main page, explaining what Moodly does and what it hopes to accomplish. 


### All Plants Page
![allplants_page](/app-screenshots/plantventory-allplants.png)
This page manages the full list of Moodly entries that the user has added. The entries can be sorted by mood to help users navigate similar emotions.


### Add Plant Page
![addplant_page](/app-screenshots/plantventory-addplant.png)
Users can add new Moodly entries on this page, including title, mood, and description/journal entry.


## Technology Used
- HTML, CSS
- React
- Node
- Express
- PostgreSQL


## API Documentation

### Endpoints

#### /api/plants
- GET: access to all the plants
- POST: allow users post plants to database

#### /api/users/1/plants
- GET: access demo user plants
- POST: post plants from all plants to user plants

#### /api/users/1/plants/:plant_id
- DELETE: allow users to delete plants from user list
