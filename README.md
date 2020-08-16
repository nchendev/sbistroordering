# Introduction
SBordering is a web-based online ordering system for restaurant with an in-house authentication backend

Visit the live site [HERE](sbordering.herokuapp.com)

Example Order Creation/Processing:

## :ledger: Index

- [About](#beginner-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Pre-Requisites and Technologies](#notebook-pre-requisites)
- [Gallery](#camera-gallery)
- [License](#lock-license)

##  :beginner: About
An extension of the basic html/css website szechuanbistro.com, SBordering is a custom platform made specifically for Szechuan Bistro. As it was my first project with React, the project has been refactored many times as I discovered better/more standard ways to approach the project. One of the biggest challenges with this project was setting up the backend from scratch, implementing a custom authentication API with encrypted passwords, tokenized session information, and constantly keeping in mind possible security vulnerabilities.

## :zap: Usage
To test the application in your own developmental environment

###  :electric_plug: Installation
- Fork/Clone the repository
- Make sure npm is installed
- install all npm packages with
```
$ npm ci
```
- provide environmental variables in a .env file in the root directory
- Open project with a text editor/IDE. I use VSCode

###  :package: Commands
- start the server
```
$ npm run start
```
- starts the client (frontend only)
```
$ npm run client
```
- creates a static build of the client for the server
```
$ npm run build
```

### :notebook: Pre-Requisites and Technologies
Pre-requisites the system needs and technologies used to develop this project.
- Node.js
- Express
- React
- MongoDB
- Twilio 
- Google Location API
- Heroku

##  :lock: License
