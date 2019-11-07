const functions = require('firebase-functions');
const admin = require('firebase-admin');
const env = require('./init.json');
//const moment = require('moment');

admin.initializeApp(env);

export const addPoints = functions.database
.ref('/completedtasks/{taskId}/points')
.onCreate((snap, context) => {
    const task = context.params.taskId;
    const curr_points = snap.val();
    console.log("Here is" + task);
    const ref = snap.ref.parent.parent.parent.child('point').child('total');
    const points = snap.ref.root.child('point').child('total') ?
        snap.ref.root.child('point').child('total') : 0;
    const total = curr_points + points;
    return snap.ref(ref).set({total: total});
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
