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

## Firebase setup

### environments

Go to the [website](https://firebase.google.com).
Here you should log into your google account and ["Go to console"](https://console.firebase.gooogle.com).
Add project -> Let's start with a name for your project -> Enable Google Analytics for this project (off) -> create project

Authentication: Configure the login method -> email address and password -> Add user -> Configure email and come up with a password 

Where can I get the api Key?
Project Overview -> click at the Web App icon -> add Firebase to the web application -> scripts open where you can find apiKey, and you need to copy it and add it to environments/environment.ts and add apikey to the environment.prod.ts file

Where can I get fbDBUrl?
Go to the Real time Database tab -> copy reference url