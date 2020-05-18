import fetch from 'node-fetch';
const url = "/api/author/";
// async function requestAuthors() {
//   var req = https.request(options, function (res) {
//     console.log("statusCode: ", res.statusCode);
//     console.log("headers: ", res.headers);
  
//     res.on("data", function (d) {
//       process.stdout.write(d);
//       return d;
//     });
//   });
//   req.end();
  
//   req.on("error", function (e) {
//     console.error(e);
//     return e;
//   });
// }

// async function getAuthors() {
//   console.log("request call");
//   await requestAuthors();
//   console.log("end");
// }


// getAuthors();


export function getAuthors() {  
  return fetch(url)
     .then((res) => {return res.json()});
}



// var url ='https://localhost:5001/api/author';
// // var headers = {
// //   "Content-Type": "application/json",
// //   "Access-Control-Allow-Origin": "*",
// //   "method": "GET"
// // }
// // // var data = {
// // //   "name": "Wade Wilson",
// // //   "occupation": "Murderer",
// // //   "age": "30 (forever)"
// // // }
// fetch(url).then((res) => {return res.json()})
// .then((json) => {console.log(json);});
 

