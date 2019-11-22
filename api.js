var apiai = require('apiai');
var app = apiai('8d95f83caf094964868f8464a2a1985b'); // Client access token from Dialogflow

// Function which returns speech from api.ai
var getRes = function(query) {
  var request = app.textRequest(query, {
    sessionId: 'BVVX12'
  });
  const responseFromAPI = new Promise(function(resolve, reject) {
    request.on('error', function(error) {
      reject(error);
    });
    request.on('response', function(response) {
      resolve(response.result.fulfillment.speech);
    });
  });
  request.end();
  return responseFromAPI;
};

// test the command :
getRes('hello world')
  .then(function(res) {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = { getRes };
