# E-Commerce Backend
## Author: Thomas Stranick

## Description
The E-Commerce Backend application demonstrates what the backend of an e-commerce app might look like. Utilizing Insomnia or another api tool, the user can request GET, POST, PUT, and DELETE routes to edit the database created through SQL. This database houses information regarding certian products and what categorys they fit into and what tags or attributes they have.

## Visuals

<img src="./assets/Screenshot 2024-04-26 151900.png" >

## Deployment

Provided as a link here - [E-Commerce Backend](https://github.com/ThStranick15/e-commerce-back-end)

## Usage
To initalize the database, the user needs to use psql and initialize the database and seed it with the files provided. Once set up, the server can be started and Insomnia can be used. GET routes for the products, categories, and tags are all available as well as individual. The user can also add any of these with the appropriate attributes attatched in the json body within the request. These can also be modified and deleted, provided the correct id and or body information.

## Credits

- Node.js
- NPM (Express, sequelize, dotenv)
- Xpert Learner, JD (instructor)

## License

Please refer to the LICENSE in the repo.
