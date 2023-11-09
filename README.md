# AngularBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Initial setup

Run `npm install`

## Firebase setup

Go to the [website](https://firebase.google.com).

Here you should log into your google account and ["Go to console"](https://console.firebase.gooogle.com).

Add project -> Let's start with a name for your project -> Enable Google Analytics for this project (off) -> create project

Authentication: Configure the login method -> email address and password -> Add user -> Configure email and come up with a password 

### environments

Where can I get the api Key?
Project Overview -> click at the Web App icon -> add Firebase to the web application -> scripts open where you can find apiKey, and you need to copy it and add it to environments/environment.ts and add apikey to the environment.prod.ts file

Where can I get fbDBUrl?
Go to the Real time Database tab -> copy reference url

Realtime Database -> Rules

Edit ".read": true and ".write": "auth != null"

## Adding a PWA to an application

In the console, we write `ng add @angular/pwa`.
After installation, manifest.webmanifest, ngsw-config appears.json and to the app folder in app.module.ts is imported by ServiceWorkerModule from @angular/service-worker

In ngsw-config.we can additionally cache some data with json. That is, to add not only files, but also to add an array of "urls", where we will add fonts. And in the same file we add another DataGroups field which is an array where each object must contain a certain set of parameters.

### How to make a production build?

Before installing, delete the file from your project, it is an example.
In the console, we write `ng build --configuration production`.
After installation, the dist folder will appear. To test this application, you need to write `npm install -g http-server` in the console.
After that, continuing to work in the console, go to the dist folder (`cd dist/`) -> go to the project folder (in my case `cd angular-blog/`) and from here start our local server by typing the command `http-server -p 4200`. And now we can look at the application.

## Application Deployment

First of all, you need to go to firebase -> hosting -> get started and start setting up Firebase Hosting.

In the console, we write `npm install -g firebase-tools`. We write `firebase login`, after `firebase init` (in the root folder) and answer the questions. After that, we write `firebase deploy` and the application will become available across two domains.