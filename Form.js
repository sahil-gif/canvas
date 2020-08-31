class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.pause = createButton('pause');
    this.resume = createButton('resume');
    this.resetMe = createButton('Reset');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("the HURDLES Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.resetMe.position(displayWidth-100, 100);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.pause.hide();
    this.resume.hide();

    this.resetMe.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.pause.show();
      this.pause.position(displayWidth-100, 120);
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

      this.pause.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        this.pause.hide();
  
        this.resume.show();
        this.resume.position(displayWidth-100, 140);
      });

      this.resume.mousePressed(()=>{
        player.updateCount(4);
        game.update(1);
        this.resume.hide();

        this.pause.show();
      });

    });

  }
}
