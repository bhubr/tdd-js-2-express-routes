# TDD in JavaScript - Testing Express routes

Test an Express application's routes with Mocha, Chai and Chai HTTP

## What we'll build

We'll build the backend for a bookmark-tracking app, made of 3 routes:
* `/api/bookmarks` (`POST`) Create a bookmark
* `/api/bookmarks` (`GET`) Get a list of bookmarks
* `/api/bookmarks/:id` (`GET`) Get a single bookmark

## Data model

A bookmark is made of the following fields:
  * `id`
  * `url` (mandatory)
  * `label` (optional)

## App structure

This is what the application's folder will look like to begin with (additional files will likely be added when we work with an actual database):

    routes/
      bookmarks.js
    test/
      routes/
        bookmarks.test.js
    app.js