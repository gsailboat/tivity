const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;
    return admin.datatbase.ref('/messages').push({original: original}).then((snapshot) => {
        return res.redirect(303, snapshot.ref.toString());
    }).catch((error) => {
        console.error(error);
    })
});
