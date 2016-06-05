var app = angular.module('main', []);

app.controller('first', function ($scope, $http) {
   
    $scope.push = {};
    $scope.done = function (push) {
        console.log(push);
        // var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYzAyZDAyMy1hYmJmLTRiOGEtYmEyOC1jYTg4MWUyZGUyZTAifQ.cS6w1iAr1LwArq8EDvjxLDWeuhDZjyXSDM-gaqrUUzA';
        var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMTJhZWMyMS03NTNkLTQ2MjctYTQ2OC1kOGUwM2ExZDhiMmUifQ.bwAYD40RctTY5tbscIo9eEmwPka2wqZbYnhzCj3eTgk';
        var tokens = ['cq3sKl9_tRM:APA91bHn6uR_Q655i_JMKITPUdWVV0RkAW5I2tZqHRgnkO1ecR4IWHHNfbRK-eBYqmDLD8EqKf02TQg_WWC7MQ7H5dTPLgEl5oPOe1QPmWBYQCuXDGTBis2l7oT-1mfcHCKTniW4ZufX'];
        var profile = 'security';
        var req = {
            method: 'POST',
            url: 'https://api.ionic.io/push/notifications',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            data: {
                "tokens": tokens,
                "profile": profile,
                "notification": {
                    "title": "HI",
                    "message": "Hello world!",
                    "android": {
                        "title": push.title,
                        "message": push.message
                    },
                    "ios": {
                        "title": "IOS",
                        "message": "Hello iOS!"
                    }
                }
            }
        };

        // Make the API call
        $http(req).success(function (resp) {
            // Handle success
            console.log("Ionic Push: Push success", resp);
        }).error(function (error) {
            // Handle error 
            console.log("Ionic Push: Push error", error);
        });
    }
})