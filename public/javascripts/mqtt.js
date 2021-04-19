console.log("mqtt");
var mqtt = require("mqtt");

var client = mqtt.connect({ host: "51.79.157.39", port: 1883 });
var payload = "eiei";
var topicZ;

client.on("connect", function () {
  client.subscribe("test");
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString());
  payload = message.toString();
  topicZ = topic;

  // $.ajax({
  //   url: "/lead/" + topicZ + "/add-json",
  //   contentType: "application/json; charset=utf-8",
  //   dataType: "json",
  //   data: JSON.stringify({ topicZ }),
  //   type: "POST",
  //   success: (res) => {
  //     // Replace follow button with unfollow.
  //     console.log("Result: ", res);
  //     // $("#" + leadId).remove();
  //   },
  //   error: (error) => {
  //     console.log("Error:", error);
  //   },
  // });

  //   client.end();
});

// function deleteLead(leadId) {
//   $.ajax({
//     url: "/lead/" + leadId + "/delete-json",
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     data: JSON.stringify({ leadId }),
//     type: "POST",
//     success: (res) => {
//       // Replace follow button with unfollow.
//       console.log("Result: ", res);

//       $("#" + leadId).remove();
//     },
//     error: (error) => {
//       console.log("Error:", error);
//     },
//   });
// }
