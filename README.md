# ContractHero Coding Challenge

Solution to the ContractHero Coding Challenge.

## Used technologies:

### Client

- React
- Styled Components

### Server

- Express
- PDF.js

## Setup guide:

Services are available under the following URLs:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

I've set up docker-compose to make use of containerization and to deploy both the front- and backend locally:

`docker-compose up -d`

Otherwise it is also possible to just run it with the shipped development servers:

`npm start -w server`\
`npm start -w client`

The clients Dockerfile allows to specify the backend url during the build process as build-arg "SERVER_URL".

Once everything is up and running (this is necessary!) you can run e2e tests by executing `npm test`.
There is also a unit test for the created service. You can run it by executing `npm test -w server`

## Things to improve on:

1. I could've used the react plugin for cypress to mount the application instead of accessing it through the external webpack dev server from react-scripts.
2. The design could be improved on, after implementing everything it might've been a better idea to show show the entire parsed PDF in a single textarea instead of using multiple textareas.
3. Could've made use of a linter, though this seemed to be overkill for the project
4. The user should get feedback when something went wrong on the serverside. Currently only the output component gets cleaned up.
5. Documentation isn't good, this could be improved on by actually describing methods,classes,...
6. Structuring of components is pretty loose, this could be cleaned up, though the necessity to do so only comes in with more components than I currently manage.
7. Could've used nodemon as file watcher to ease development. Not using it made me restart the backend all the time and I would've saved some time.
8. Styled Components and its "random" class names make it a pain to test in Cypress. Solutions would be to have some kind of custom HTML attribute that helps me identify the components more easily. (ideas: https://github.com/cypress-io/cypress/issues/1212)
9. Express error handling could be improved, just passing it to the default error handler is dirty.
10. Could've added more tests for the PDF service in the backend
