const push = require('web-push');
let vapidKeys = {
    publicKey: 'BIoC57dkx0VRk2eO_nbZu_KCmVTrqZfyV5s-VyKwzAJF5KN5mIuLwg4SRzQEL56mOge9_NQbwKLxJx6z2Zcn3Pc',
    privateKey: 'x9MgT06rHbU26hmC2LVrLyMYMxXsjCapUTD0EKup3p8'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dc3LHOTikQA:APA91bG7ALS9qp_u3rNaUwBZx9IVRxbABhX8b7HZOLkyXlTIIdB49Cw60Mw4Q4DHGHBpffeOxPb4ZQ_HYw12wzTH0a1AwUMiPyFDHu3k-LcPiP6C3Ea83qNrxvU5zeY-BND6aZZbDwiM",
    expirationTime: null,
    keys: {
        p256dh: "BFQvEw96bqy8wD928zmf2WlmvK5gCK7WSfRiwC0oQLHnqa54P032FkeRrMzshvMEs0bo4sTdnHxULiJqxQaPAZY",
        auth: "_Uzu_ab7Vv-3LRAXZ3bIMQ"
    }
}

push.sendNotification(sub, 'Test message');


console.log(vapidKeys);
