// 4 crystals with random values attached
// player gets random score to start
// when a crystal is clicked random point amount is added to players score
// player wins when total score mathes the random score from start up
// player loses if score goes above the random number at start
// game should restart on when playter wins or loses
// on restart assign new random number at starts up, new values to crystals
// reset score and score counter to zero NO REFRESH FOR RESTART!
// show number of wins and losses


    $( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19)
    // Select a random number to be shown at the start of the game
    // Number should be between 19 - 120

    $("#randomNum").text(random);
    // randomNum id in the html 

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    // Set up random number for each crystal
    // Random number between 1 - 12

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

    //  Variables for totals
    $("#numWins").text(wins);
    $("#numLosses").text(losses);

  //Resets the game 

  function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $("#randomNum").text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $("#finalTotal").text(userTotal);
        } 

  //Adds the wins to the userTotal
  function play(){
        alert("You won!");
        wins++; 
        $("#numWins").text(wins);
        reset();
  }
  //Adds the losses to the userTotal
  function lose(){
        alert ("You lose!");
        losses++;
        $("#numLosses").text(losses);
        reset();
  }
  //Sets up click on crystals and win/lose conditions
    $("#one").on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal " + userTotal);
      $("#finalTotal").text(userTotal); 
            
          if (userTotal == random){
            play();
          }
          else if (userTotal > random){
            lose();
          }   
    })  
    $("#two").on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal " + userTotal);
      $("#finalTotal").text(userTotal); 
          if (userTotal == random){
            play();
          }
          else if (userTotal > random){
            lose();
          } 
    })  
    $("#three").on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal " + userTotal);
      $("#finalTotal").text(userTotal);

            if (userTotal == random){
            play();
          }
          else if (userTotal > random){
            lose();
          } 
    })  
    $("#four").on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal " + userTotal);
      $("#finalTotal").text(userTotal); 
        
            if (userTotal == random){
            play();
          }
          else if (userTotal > random){
            lose();
          }
    });   
  }); 