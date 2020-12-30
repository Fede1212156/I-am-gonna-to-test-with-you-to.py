var request = require("request")
var noblox = require("noblox.js")
var groupId = 7128111;
var webhookId = process.env.WebhookId
var Goal = 21000;
var TotalCount = 50000;

async function postToDiscord(myEmbed){
    return request.post({
          uri: webhookId,
          embeds: [myEmbed],
          json: true
    })
}

noblox.getGroup(groupId).then(function(groupInfo){
  TotalCount = groupInfo.memberCount
  if(groupInfo.memberCount < TotalCount){
    var myEmbed = {
      title: "Dunkin Queen Member Count", 
      color: "0xFF9933", 
      Fields: [{
        "name": "Current",
        "value": `${groupInfo.memberCount} `, 
        "inline": false
      },{
        "name": "Goal", 
        "value": `${Goal - groupInfo.memberCount}`,
        "inline": false
     
      }
       ] 
     }
     postToDiscord(JSON.stringify(myEmbed))
  } 
})
console.log("Ready to run!")