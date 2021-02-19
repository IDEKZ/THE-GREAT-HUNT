class Game {
  constructor(){

  }
    getState(){
      
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form=new Form();
        form.display();
      }
      player1=createSprite(250,375,100,100);
      player1.addImage(gunImage);
      player1.scale=0.25;
      player2=createSprite(450,375,100,100);
      player2.addImage(gunImage);
      player2.scale=0.25;
      player3=createSprite(650,375,100,100);
      player3.addImage(gunImage);
      player3.scale=0.25;
      player4=createSprite(850,375,100,100);
      player4.addImage(gunImage);
      player4.scale=0.25;
      players=[player1,player2,player3,player4]
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();
      this.getState();
      if(allPlayers !== undefined){
        background("black");
        //image(BgImage);
        var index=0;
        //var x=100;
        //var y;
        for(var plr in allPlayers){
          index=index+1
          if(index===player.index){
           camera.position.x=displayWidth/2;
           camera.position.y=players[index-1].y; 
          }
        }
      }
      drawSprites();
    }
    
    end(){
      console.log("Ended");
    }
  }
  