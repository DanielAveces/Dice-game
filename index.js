var randomNumber1 = Math.ceil(Math.random()*6);

var diceImage = "dice" + randomNumber1 + ".png";

var diceImageWeb = "images/" + diceImage;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", diceImageWeb);

var randomNumber2 = Math.ceil(Math.random() * 6);

var diceImage2 = "images/dice" + randomNumber2 + ".png";

image2.setAttribute("src", diceImage2);


function winner(){
  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 wins 🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw";
  }
}

winner();
