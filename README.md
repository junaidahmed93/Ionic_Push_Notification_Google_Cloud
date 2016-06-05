Welcome to the Ionic_Push_Notification_Google_Cloud wiki!

Ionic push notification implementation requires 4 step 

1. Key Generation from GCM / APNS
2. Ioinc app setup
3. Security Profile
4. Post Request Handling 

# Key Generation from GCM / APNS
 At initial level only Google Cloud Messaging covered in this repo. (APNS will be soon updated). Generate a Server Key by creating a new project and choose Web/Javascript.
***

# Ionic app setup
  Create an ionic blank app. Install platform-web-client then phonegap-plugin provided with GCM Project Number. --



`ionic add ionic-platform-web-client` --


`ionic plugin add phonegap-plugin-push --variable SENDER_ID="GCM_PROJECT_NUMBER"` --

Once you have finished installation Upload projec to Ionic.io using command --

`ionic io init` --

Disbale limited pushes --

`ionic config set dev_push false` (This command will trun project from dev to production) --
Finally add following code snippet into your code (app.js) --

```.run(function($ionicPlatform){
  $ionicPlatform.ready(function() {
    var push = new Ionic.Push({
      "debug": true
    });
    push.register(function(token) {
      console.log("Device token:",token.token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });
  });
})```
