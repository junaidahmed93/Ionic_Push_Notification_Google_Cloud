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
  Create an ionic blank app. Install platform-web-client then phonegap-plugin provided with GCM Project Number. 



`ionic add ionic-platform-web-client` 


`ionic plugin add phonegap-plugin-push --variable SENDER_ID="GCM_PROJECT_NUMBER"` 

Once you have finished installation Upload projec to Ionic.io using command 

`ionic io init` 

Disbale limited pushes 

`ionic config set dev_push false` (This command will trun project from dev to production) 
Finally add following code snippet into your code (app.js) 

```.run(function($ionicPlatform){
  $ionicPlatform.ready(function() {
    var push = new Ionic.Push({
      "debug": true,
      "onNotification": function (notification) {
              
              console.log(notification);
              $ionicPopup.alert({
                title: notification.title,
                template: notification.text
              });
             
            },
      "onRegister": function (data) {
              console.log(data.token);
            }
    });
    push.register(function(token) {
      console.log("Device token:",token.token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });
  });
})
```
***


# Security Profile(Android)
This is the most important part of push notification. Setting up a security profile requires 

1. GO to ionic.io , Select your project then go to Setting page, Under the Certificate Section Click **New Security Token** Provide a valid name. 

2. Edit security certificate , Go to Android tab, Provide GCM (Server Key) and Keystore file with password and alias. 

#### What is keystore File? How to create it? --
keystore is a security certificate or public key certificate , used for instance in SSL encryption. 

To create a keystore file you must have **JDK** Installed on machine. 

1. Go to ProgramFiles/Java/Bin/jre7/ (path may differ as you installed somewhere else). 

2. Open Command Prompt in this directory. (run as administrator). 

3. write the command 

`keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000` 

Here, alias_name could be as per your choice. This will ask some basic information and 2 passwords **KeyStore Password** and **KeyPassword**.
