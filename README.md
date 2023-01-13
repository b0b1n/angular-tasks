# Tasks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Development server

* To run the app all you need to do is to use the command : `ng serve` to launch the server.
* Navigate to `http://localhost:4200/`.
* The application will automatically reload if you change any of the source files.

## About the App :

I'll be creating a Todo app, where the user can use the CRUD (Create, Read, Update, Delete) operations for some tasks, or whatever he wants.

#### I created several components : 
* Navbar with: `ng g c components/navbar`
* Tasks with: `ng g c components/tasks`

## What I used to create the app :

### Json-Server : 
** Link to repo : `https://github.com/typicode/json-server`
* To interact with the Json objects using REST API, to install  it, I used the command : `npm install -g json-server` 
* Run the json-server, by association the db.json file to the API. use the command: `json-server --watch db.json --port any-port-number-you-want`
!! : Pay attention your location in the directory before launching the server to not get errors mapping where the db.json file exists.

### (Optional) Postman :
** Link for download: `https://www.postman.com/downloads/`
To test the API before using it. 

### (Optional) Bootstrap CDN :
** Link for use: `https://www.bootstrapcdn.com/`
To have a responsive website, and an easy-to use application for the user.

### (Optional) Font-awesome CDN :
** Link for use: `https://cdnjs.com/libraries/font-awesome`
To have good font styling in the app.