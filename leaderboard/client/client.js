
   console.log("Hello client");
   


   Meteor.subscribe('thePlayers');
   Template.leaderboard.helpers({
    'player': function(){
      var currentUserId = Meteor.userId();
      return  PlayersList.find({},  {sort: {score : -1, name: 1}});//tri par score le plus élevé et om alphabetique
    },

    'selectedClass': function(){
      var playerId =  this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if (playerId ==selectedPlayer) {

        return "selected";
      }
    },

    'showSelectedPlayer': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer);
    }
  });


   Template.leaderboard.events({
    'click .player' : function(){
      var playerId = this._id;
        Session.set('selectedPlayer', playerId);//Session.set('nomDeSession', 'valeur de la session que l'on store das la sesion);
        //var selectedPlayer = Session.get('selectedPlayer');
        //console.log(selectedPlayer);
      },
      'click .increment' : function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore',selectedPlayer,5);
      },
      'click .decrement' : function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore',selectedPlayer,-5);
      }

    });

   Template.addPlayerForm.events({
     'submit form': function(event){
      event.preventDefault();
      var playerNameVar = event.target.playerName.value;
      var playerScoreVar = event.target.playerScore.value;
        // var currentUserId = Meteor.userId();// récupère l'ID de la personne connectée pour lui afficher une liste de joueurs personnalisée
        // PlayersList.insert({
          // name: playerNameVar,
           // score: playerScoreVar,
           // createdBy: currentUserId
         // });
          //Meteor.call('sendLogMessage');
          Meteor.call('insertPlayerData',playerNameVar,playerScoreVar);
   //on remplace tout ça par l'appel de la fonction à la fin de la fonction

 },
 'click .remove' : function(){
   var selectedPlayer = Session.get('selectedPlayer');
   //PlayersList.remove(selectedPlayer);
   Meteor.call('removePlayerData', selectedPlayer);
 }
});
