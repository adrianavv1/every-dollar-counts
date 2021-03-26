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

## images of App

![IMG](public\assets\app-img\Y9Gh8Bm9GH.png)
## Business Context 

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria 

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

## Contributing

Contributions are always welcomed. Submit a pull request for me to review at anytime.

## Contact 

Have a question? you can contact me here [Github](https://github.com/adrianavv1)


