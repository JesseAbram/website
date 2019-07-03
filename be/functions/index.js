const functions = require('firebase-functions');
const admin = require('firebase-admin')
const cors = require('cors') ({origin: true})
const website = require('./db/media')
const serviceAccount = require('./pk.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://website-6e6c3.firebaseio.com'
  });


  // Get a reference to the database service

exports.getVideoLinks = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        try {
            const Links = await website.getMedia(admin.database())
            console.log(Links)
            const views = Links.Media.Views
            await website.updateViews(admin.database(), views)
            return res.status(200).json(Links)

        } catch (err){
            return res.status(500).json(err)
        }
    })
})