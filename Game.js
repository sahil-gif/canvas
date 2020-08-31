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
      form = new Form()
      form.display();
    }

    car1 = createSprite(25,100);
    car2 = createSprite(75,300);
    car3 = createSprite(25,500);
    car4 = createSprite(75,700);

    highlighter=createSprite(200,200, 100, 100);

    car1.setCollider("circle", 0, 0, 15);
    car2.setCollider("circle", 0, 0, 15);
    car3.setCollider("circle", 0, 0, 15);
    car4.setCollider("circle", 0, 0, 33);

    floor1 = createSprite(100,200,2000000000,2);
    floor2 = createSprite(300,400,2000000000,2);
    floor3 = createSprite(100,600,2000000000,2);
    floor4 = createSprite(300,800,2000000000,2);

    floors = [floor1,floor2,floor3,floor4];

    hurdle1 = createSprite(1000,150);
    hurdle2 = createSprite(1000,750);
    hurdle3 = createSprite(1000,550);
    hurdle4 = createSprite(1000,350);
    hurdle5 = createSprite(1000,150);
    hurdle6 = createSprite(2000,750);
    hurdle7 = createSprite(2000,150);
    hurdle8 = createSprite(2000,750);
    hurdle9 = createSprite(2000,550);
    hurdle10 = createSprite(3000,350);
    hurdle11= createSprite(3000,150);
    hurdle12= createSprite(3000,750);
    hurdle13= createSprite(3000,150);
    hurdle14= createSprite(3000,750);
    hurdle15= createSprite(4000,550);
    hurdle16= createSprite(4000,350);
    hurdle17= createSprite(4000,150);
    hurdle18= createSprite(4000,750);
    

    hurdle1.addImage("h1",hurdleimg);
    hurdle2.addImage("h2",hurdleimg);
    hurdle3.addImage("h3",hurdleimg);
    hurdle4.addImage("h4",hurdleimg);
    hurdle5.addImage("h5",hurdleimg);
    hurdle6.addImage("h6",hurdleimg);
    hurdle7.addImage("h7",hurdleimg);
    hurdle8.addImage("h8",hurdleimg);
    hurdle9.addImage("h9",hurdleimg);
    hurdle10.addImage("h10",hurdleimg);
    hurdle11.addImage("h11",hurdleimg);
    hurdle12.addImage("h12",hurdleimg);
    hurdle13.addImage("h13",hurdleimg);
    hurdle14.addImage("h14",hurdleimg);
    hurdle15.addImage("h15",hurdleimg);
    hurdle16.addImage("h16",hurdleimg);
    hurdle17.addImage("h17",hurdleimg);
    hurdle18.addImage("h18",hurdleimg);

    car1.scale=5;
    car2.scale=5;
    car3.scale=5;
    car4.scale=3;

    car1.addAnimation("car1",car1img);
    car2.addAnimation("car2",car2img);
    car3.addAnimation("car3",car3img);
    car4.addImage("car4",car4img);

    hurdle1.scale=0.3;
    hurdle2.scale=0.3;
    hurdle3.scale=0.3;
    hurdle4.scale=0.3;
    hurdle5.scale=0.3;
    hurdle6.scale=0.3;
    hurdle7.scale=0.3;
    hurdle8.scale=0.3;
    hurdle9.scale=0.3;
    hurdle10.scale=0.3;
    hurdle11.scale=0.3;
    hurdle12.scale=0.3;
    hurdle13.scale=0.3;
    hurdle14.scale=0.3;
    hurdle15.scale=0.3;
    hurdle16.scale=0.3;
    hurdle17.scale=0.3;
    hurdle18.scale=0.3;

    hurdles1=[hurdle1,hurdle2,hurdle3,hurdle4,hurdle5,hurdle6];
    hurdles2=[hurdle7, hurdle8, hurdle9, hurdle10, hurdle11, hurdle12];
    hurdles3=[hurdle13, hurdle14, hurdle15, hurdle16, hurdle17, hurdle18];
    

    cars = [car1, car2, car3, car4];

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      image(trackimg, 0, 0, displayWidth*3, displayHeight);
      
      //index of the arrays
      var index = 0;

      //x and y position of the cars
      var x = 250;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in y direction
        x = x + 250;
        //use data form the database to display the cars in x direction
        x = displayWidth + allPlayers[plr].distance;
        cars[index-1].x = x;
        

        if (index === player.index){

          fill("lime");
          rect(cars[index-1].x, cars[index-1].y, 55, 100);

          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].x
          camera.position.y = displayHeight/2;
          

          if(keyIsDown(32) && player.index !== null){
            cars[index-1].y = cars[index-1].y-25

            player.height += 5;
            player.height -= 5;
            player.update();
            
          }

          cars[index-1].velocityY = cars[index-1].velocityY + 0.8
          player.height -= 5;
          player.update();

          cars[index-1].collide(floors[index-1]);
        }

       
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }


    drawSprites();
  }
}
