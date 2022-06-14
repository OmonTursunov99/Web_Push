const push = require('web-push');
let vapidKeys = {
    publicKey: 'BIoC57dkx0VRk2eO_nbZu_KCmVTrqZfyV5s-VyKwzAJF5KN5mIuLwg4SRzQEL56mOge9_NQbwKLxJx6z2Zcn3Pc',
    privateKey: 'x9MgT06rHbU26hmC2LVrLyMYMxXsjCapUTD0EKup3p8'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}
push.sendNotification(sub, 'Test message')


console.log(vapidKeys);
