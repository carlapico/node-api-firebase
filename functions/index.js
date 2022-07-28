const functions = require("firebase-functions"); // sticking with es5 for now because of time 
const express = require ("express")
const cors = require ("cors") // cross orgin resource sharing 

const app = express ()
app.use (cors())

// set up routes 
app.get ('/test', (req,res)=> {
    res.send("Wow, it actually worked!")
})

app.get ('/another-one', (req,res) => {
    res.send("This one works, too!")
}) 

app.post('/add-one',  (req,res) => {
    res.send ('add this one as well')
})

app.delete('/delete-one', (req,res) => {
    Array.splice(3,1)
})

exports.api= functions.https.onRequest(app) // same thing as ((req, res)=> app (req,res))



              /*whenever there is a request */
// exports.helloThere = functions.https.onRequest  ((req,res) => {
//     res.send("Hello there Firebase Cloud user!")
// })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
