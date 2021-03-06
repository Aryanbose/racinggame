class Form {
  constructor() {
    this.input = createInput("Name");
    this.button= createButton('Play');
    this.greeting = createElement('h3');
  }

  hide()
{
  this.input.hide();
  this.button.hide();
  this.greeting.hide()
}  
display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    //ARROW FUNCTION
    // instead of function(){}
    // we use     ()=>{}
    // the meaning if "this" will not change

    this.button.mousePressed( () => {
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      playerCount = playerCount +1;
      player.updateCount(playerCount)
      
     // playerCount+=1;
      //player.update(name)
      //player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
