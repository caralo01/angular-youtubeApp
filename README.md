# YoutubeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Para que te vaya el ng build --prod 
	en environments cambiar production: false --> true
	en node_modules/bootsrap/package.json en el objeto browserslist, borrar lo siguiente:
		"browserslist": [
			"last 1 major version", <----- delete this line
			">= 1%", <----- delete this line
			"Chrome >= 45",
			"Firefox >= 38",
			"Edge >= 12",
			"Explorer >= 10",
			"iOS >= 9",
			"Safari >= 9",
			"Android >= 4.4",
			"Opera >= 30"
		],
