var myHeaders = {"Content-Type": "application/json"};

var raw = JSON.stringify({"id":1,"FirstName":"Atiq","LastName":"Ahammed","Gender":"Male"});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://localhost:5001/api/author", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));