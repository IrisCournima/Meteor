 console.log("This is the server ");
 // console.log(PlayersList.find().fetch());
 Meteor.publish('thePlayers', function(){
  var currentUserId = this.userId;
    return PlayersList.find({createdBy: currentUserId})//retourne les infos uniquement si le createdby correspond au currenId
  });

 Meteor.methods({
     // 'sendLogMessage': function(){
      // console.log("hello world");
     // },
     'insertPlayerData': function(playerNameVar,playerScoreVar){
      var currentUserId = Meteor.userId();
      PlayersList.insert({
        name: playerNameVar,
        score: playerScoreVar,
        createdBy: currentUserId
      });
    },
    'removePlayerData': function(selectedPlayer){
      var currentUserId= Meteor.userId;
      PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
    },
    'modifyPlayerScore':function(selectedPlayer, scoreValue){
      var currentUserId= Meteor.userId;
       PlayersList.update({_id: selectedPlayer, createdBy: currentUserId}, {$inc : {score : scoreValue} } );
    }
  });