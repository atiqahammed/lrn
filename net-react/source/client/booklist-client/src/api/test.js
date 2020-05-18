var https = require("https");

var options = {
  rejectUnauthorized: false,
  hostname: "localhost",
  port: 5001,
  path: "/api/author",
  method: "GET",
};

var req = https.request(options, function (res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on("data", function (d) {
    process.stdout.write(d);
  });
});
req.end();

req.on("error", function (e) {
  console.error(e);
});
