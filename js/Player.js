class Player{
  constructor(){

  }  
  // ref - connection to database
  // on - read the data
  // set - write data
  // update 
  getcount(){
      var playercount = database.ref('playerCount');
      playercount.on("value", function(data){
           playerCount = data.val()
      });
     
  }

  updateCount(n){
      var ref =database.ref('/');
      ref.set({
          playerCount:n
      })
  }

}