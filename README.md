# Redux Boot Web App example
A [Redux Boot](https://github.com/choko-org/redux-boot) example to demonstrate how to create a web application.

## Examples:

#### Web server
Module using Express.

#### Static web
Module using static Express middleware to put your files in `/public` directory.

#### REST server
Using [json-server](https://github.com/typicode/json-server).

Available End points:

- Posts
```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```
- Comments
```
GET    /comments
GET    /comments/1
POST   /comments
PUT    /comments/1
PATCH  /comments/1
DELETE /comments/1
```

- Profile
```
GET    /profile
POST   /profile
PUT    /profile
PATCH  /profile
DELETE /profile
```

## Install
```bash
npm install
```

## Build and Run
```bash
npm start
```
then access [http://localhost:3000](http://localhost:3000).
