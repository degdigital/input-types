const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = admin.initializeApp(functions.config().firebase);

exports.state = functions.https.onRequest((req, res) => {
	if (req.method === 'POST') {
		const stateToSave = JSON.parse(req.body);
		const db = admin.database();
		const newKey = db.ref().child('savedStates').push().key;
		db.ref(`savedStates/${newKey}`).set(stateToSave)
			.then(() => res.status(200).send(JSON.stringify({
				status: 'success',
				id: newKey
			})));
	} else {
		const {key} = req.query;
		const savedStateRef = firebase.database().ref(`savedStates/${key}`);
		savedStateRef.once('value').then(snapshot => {
			res.status(200).json(snapshot.val());
		});
	}
});
