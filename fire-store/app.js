const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const common = require('./common');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const db =  admin.firestore();

function insertData() {
    console.log("data has been inserted");
    var user = common.getDummyUser();
    console.log(user);
    return db.collection('user').
            doc(user.id).
            set(user).then(() =>{
                console.log('new user information has been inserted in the database.')
            })
}

function getData() {
    // db.collection('user').doc('eadb7abd-f7b1-412c-87b9-69969d6afcaa').get().then((doc)=>{
    //     console.log(doc.data());
    // });

    let museums = db.collection('user').where('age', '>=', 40);
    
    museums.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        console.log(doc.id, ' => ', doc.data());
    });
});


}
getData();
// console.log()
// insertData();