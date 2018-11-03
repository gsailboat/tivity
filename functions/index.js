const functions = require('firebase-functions');
const admin = require('firebase-admin');
const env = require('./init.json');
const moment = require('moment');

admin.initializeApp(env);

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//     const original = req.query.text;

//     console.log('admin: ', admin);
//     return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
//         return res.redirect(303, snapshot.ref.toString());
//     }).catch((error) => {
//         console.error(error);
//     })
// });

// // Listens for new messages added to /messages/:pushId/original and creates an
// // uppercase version of the message to /messages/:pushId/uppercase
// exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
//     .onCreate((snapshot, context) => {
//       // Grab the current value of what was written to the Realtime Database.
//       const original = snapshot.val();
//       console.log('Uppercasing', context.params.pushId, original);
//       const uppercase = original.toUpperCase();
//       // You must return a Promise when performing asynchronous tasks inside a Functions such as
//       // writing to the Firebase Realtime Database.
//       // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//       return snapshot.ref.parent.child('uppercase').set(uppercase);
//     });

exports.addPoints = functions.database
.ref('/completedtasks/{taskId}')
.onCreate((snapshot, context) => {
    const points = context.params.points;

    var reference = snapshot.ref.root.child("point");
    return reference.child("total").set(points);
});

// exports.dayPoints = functions.database
// .ref('/completedtasks/{taskId}')
// .onCreate((snapshot, context) => {
//     const day = Math.trunc(moment().diff(context.params.completetionTime, 'days'));
//     const current = snapshot.ref.root.child("point");
//     if (day === 0) {
//         return 
//     }
// })
