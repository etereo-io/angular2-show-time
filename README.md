angular2 showtime
------------

![build status](https://gitlab.com/etereo/angular-2-generator/badges/master/build.svg)

# Project Management

# Environments


# Installation

```
npm install
webdriver-manager update
```


# Build project

Build the app for development.

```
npm run build
npm run build:dev
```

Build the app for production,

```
npm run build:prod
```

# Set environment config

Build/run project with specific environment config.

Supported values: `int` `prod`

```
grunt build --env int
grunt serve --env prod
```


# Run project

* Serve the app for development
	
	```
  npm run start
  npm run server
  npm run server:dev
	```


* Serve the app for producction mode (you have to build the app for production before serve)

	```
	npm run server:prod
	```

# Run tests

* Unit test the app in a single run.

	```
	npm run test
	```

* Unit test the app in a watching mode.
	
  ```
	npm run test:unit:debug
	```

* End-2-End

	```
	npm run webdriver
	```

	```
	npm run test:e2e
	```
