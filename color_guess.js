  var target;
   var guess_input_text;
   var guess_input;
   var finished = false;
   var guesses = 0;
   var color;
   var randomColor;
   function start_game() {
    colors =["blue", "cyan", "gold", "grey", "green", "magenta", "orange", "red",
    "white\n", "yellow\n" ];
    randomColor = colors[Math.floor(Math.random()*colors.length)];
    target = randomColor.toLowerCase();
    while(!finished) {
        guess_input_text = prompt("Welcome to my project: \n\n " + "I am thinking of one of these colors: \n\n" + colors + "Can you guess the color I am thinking of?");
        guess_input = guess_input_text.toLowerCase();
        guesses +=1;
        finished = CheckGuess();}
    }


function CheckGuess() {
   if(color.index(guess_input) == -1) {
        alert("Sorry, however I dont recognize that color.\n\n" + "Please try again!");
        return false;

    }
    if(guess_input > target) {
        alert( " Your guess is to high try again, alphabetically ");
        return false;
    }
    if(guess_input < target) {
        alert("Your guess is to low try again, alphabetically ");
        return false;
    }

    if(guess_input == target){

    alert(" You got it! The number was" + target + "." + "Your number of guess was" + guesses + ".");
    return true;


}
}

