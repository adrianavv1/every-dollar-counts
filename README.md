# every-dollar-counts

## Web optimization using IndexedDB & Webpack

This application allows you to track your expenses online and offline. 
You are able to add expenses and deposit into your budget. When entering the transaction when your app is  offline, the transaction will show that it has been added when you're back online.

The application app is linked here:
[every-dollar-counts](https://every-dollar-counts.herokuapp.com/)

## Technologies

Technologies used in this app are:
* **IndexedDB:** Offline transaction storage
* **webpack:** Module bundling and minification
* **wepback-pwa-manifest:** Webpack plug-in for generating manfiest.json for PWAs (npm package)
* **babel-loader:** Javascript transcompiler to convert ES6 JS into backwards compatible JS (npm package)
* **compression:** Compression for middleware responses (npm package)
* **MongoDB:** Persistent database storage
* **Mongoose:** ODM modeling
* **Express:** Middleware routing
* **NodeJS:** Javascript runtime environment
* **Heroku:** Hosting

## User Story

```
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection.
SO THAT my account balance is accurate when I am traveling.
```

Offline Functionality:

* Enter deposits offline

* Enter expenses offline

When brought back online:

* Offline entries should be added to tracker.

