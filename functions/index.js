const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = admin.initializeApp(functions.config().firebase);

exports.state = functions.https.onRequest((req, res) => {

	switch (req.method) {
		case 'POST':
			res.status(200);
			break;
		case 'GET':
		default:
			const {key} = req.query;
			const savedStateRef = firebase.database().ref(`savedStates/${key}`);
			savedStateRef.once('value').then(snapshot => {
				res.status(200).json(snapshot.val());
			});
	}

});
