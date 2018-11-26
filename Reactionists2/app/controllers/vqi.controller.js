const responses = require("../models/responses/index");

const post = (req, res) => {
  console.log("REQ/RES", req, res);
  res.json(
    // new responses.ItemResponse({ id: 3, firstName: "visa", lastName: "test" })
    new responses.ItemResponse({
      responseHeader: {
        requestMessageId: "6da60e1b8b024532a2e0eacb1af58581",
        messageDateTime: "2018-11-26 00:19:42.327",
        numRecordsReturned: "2",
        responseMessageId: "89VQI7446420181126001950270"
      },
      responseData: {
        kind: "predict",
        merchantList: [
          {
            city: "Los Angeles",
            feedbackCorrelationID: "41f242c5-86c5-4923-823f-40d33258690e",
            waitTime: "400",
            zip: "90012",
            name: "Starbucks",
            state: "CA",
            country: "US"
          },
          {
            city: "Los Angeles",
            feedbackCorrelationID: "41f242c5-86c5-4923-823f-40d33258690e",
            waitTime: "300",
            zip: "90017",
            name: "Starbucks",
            state: "CA",
            country: "US"
          },
          {
            city: "Los Angeles",
            feedbackCorrelationID: "41f242c5-86c5-4923-823f-40d33258690e",
            waitTime: "300",
            zip: "90007",
            name: "7-Eleven",
            state: "CA",
            country: "US"
          },
          {
            city: "Los Angeles",
            feedbackCorrelationID: "41f242c5-86c5-4923-823f-40d33258690e",
            waitTime: "30",
            zip: "90007",
            name: "Arco Gas Station",
            state: "CA",
            country: "US"
          },
          {
            city: "Los Angeles",
            feedbackCorrelationID: "b0fc1cbf-afb0-4408-bebc-6ecf49d07854",
            waitTime: "500",
            zip: "90032",
            name: "Arco Gas Station",
            state: "CA",
            country: "US"
          },
          {
            city: "Los Angeles",
            feedbackCorrelationID: "b0fc1cbf-afb0-4408-bebc-6ecf49d07854",
            waitTime: "500",
            zip: "90017",
            name: "7-Eleven",
            state: "CA",
            country: "US"
          }
        ]
      }
    })

    /*

    {
"responseHeader": {
"requestMessageId": "6da60e1b8b024532a2e0eacb1af58581",
"messageDateTime": "2018-11-26 00:19:42.327",
"numRecordsReturned": "2",
"responseMessageId": "89VQI7446420181126001950270"
},
"responseData": {
"kind": "predict",
"merchantList": [
    {
"city": "Los Angeles",
"feedbackCorrelationID": "41f242c5-86c5-4923-823f-40d33258690e",
"waitTime": "400",
"zip": "90012",
"name": "Starbucks"
"state": "CA",
"country": "US"
},
  {
"city": "Los Angeles",
"feedbackCorrelationID": "41f242c5-86c5-4923-823f-40d33258690e",
"waitTime": "300",
"zip": "90017",
"name": "Starbucks"
"state": "CA",
"country": "US"
},
{
"city": "Los Angeles",
"feedbackCorrelationID": "41f242c5-86c5-4923-823f-40d33258690e",
"waitTime": "300",
"zip": "90007",
"name": "7-Eleven",
"state": "CA",
"country": "US"
},
{
"city": "Los Angeles",
"feedbackCorrelationID": "41f242c5-86c5-4923-823f-40d33258690e",
"waitTime": "30",
"zip": "90007",
"name": "Arco Gas Station",
"state": "CA",
"country": "US"
},
{
"city": "Los Angeles",
"feedbackCorrelationID": "b0fc1cbf-afb0-4408-bebc-6ecf49d07854",
"waitTime": "500",
"zip": "90032",
"name": "Arco Gas Station",
"state": "CA",
"country": "US"
},
{
"city": "Los Angeles",
"feedbackCorrelationID": "b0fc1cbf-afb0-4408-bebc-6ecf49d07854",
"waitTime": "500",
"zip": "90017",
"name": "7-Eleven",
"state": "CA",
"country": "US"
}
]
}
    */
  );
};

module.exports = {
  post
};
