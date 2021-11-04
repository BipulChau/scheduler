# Interview Scheduler
Scheduler is a single-page interview-scheduling application made with React. It is built as part of my bootcamp course at Lighthouse Labs to teach me the basics of a React project.

## Tech Stack
React with Webpack and Babel for front-end
Axios and WebSocket to communicate with server 
Storybook, Jest, and Cypress for testing

## Dependencies
Relies on a local PG database and API, which is available here at: https://github.com/BipulChau/scheduler-api

Testing with Cypress requires a global Cypress install (npm install -g cypress).

## Setup

Install dependencies with `npm install`.


## Running Webpack Development Server

```sh
npm start
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Jest Test Framework

```sh
npm test
```

## Running test server for Cypress

```sh
npm run test:server
```

## Running Cypress Test Framework

A local PG test database with access credentials stored in an .env.test file in the root of scheduler-api is required to run the test.

Seed the test database with the create.sql and test.sql files in the scheduler-api/src/db/schema folder.
Run scheduler-api in test mode as `npm run test:server`
Run the tests with `npm run cypress` from the scheduler directory.

## Features
Responsive UI in a Single Page
["View, book and cancel interview appointment"] ("https://github.com/BipulChau/scheduler/blob/master/docs/View,%20create,%20cancel%20appointment%20along%20with%20spots%20remaining.png?raw=true")

["Delete an appointment"] ("https://github.com/BipulChau/scheduler/blob/master/docs/Delete%20Appointment.png?raw=true")




