var admin = require("firebase-admin");

var serviceAccount = require("./the-tv-series-app-firebase-adminsdk.json");

admin.initializeApp(***REMOVED***
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://the-tv-series-app.firebaseio.com"
***REMOVED***);

module.exports = admin;  
