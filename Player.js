class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    updateName(){
        var playerIndex = "players/player"+this.index;//player+1=player1
        database.ref(playerIndex).set({
            name:this.name  ,
            distance:this.distance 
        })
    }
   //static functions are the functions who dont need object to be called its common for everyone in class

   static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }
}

//abc-1, def-3,rgt-2,xzy-4
//player1-abc
//player2-rgt
//palyer3-def

//players 
    //player1
        //name
        //distance    

    //player2
    //player3
    //player4

    //allplayers=[player1,player2,player3,player4]
    //allpalyer={player1:{name:abc,distance:50},
    //          player2:{name:abc,distance:50},
    //          player3:{name:abc,distance:50}}