
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
