//variables need to be defined to be used within the code

var intMax, intMin, intRandom, intGuess, intCount, intPoints;


//this section requests the lowest number in the guessing range and rejects the number if it does not meet the criteria requested
//the program will continue to ask for a number until it is above zero and an actual number
intMin = parseInt(prompt("Choose the lowest number, no lower than 0, in your guessing range"));
while(isNaN(intMin)||intMin <0){
    intMin = parseFloat(prompt("Please enter a valid number")); 
    }

//this section requests the highest number for the guessing range and rejects the input if it does not meet the criteria requested
//if the number is not two more than zero or not a real number the program will not work
intMax = parseInt(prompt("Choose the highest number in your guessing range (must be at least 2 more than zero"));
while(isNaN(intMax)||intMax <=2) {
intMax = parseFloat(prompt("Please enter a valid number"));

}

//this is the equation that generates the random number
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);

//this counts the number of attempts it takes the user to guess the random number
var intCount = 1;



//this is where the loop begins
//the loop starts with having the users pick an initial guess. the guess must be between intMin and intMax and must be a real number
//the loop will continue until the user predicts the number and will give them hints of "too high" or "too low" to assist in guessing
intGuess = parseInt(prompt("What is your guess on the random number? Must be between " + intMin + " and " + intMax));
while (intGuess === isNaN || intGuess < intMin || intGuess > intMax) {
    intGuess = parseInt(prompt("Please choose a number between " + intMin + " and " + intMax));
}



while(intGuess != intRandom) {
    if(intGuess < intRandom) {
        intGuess = parseInt(prompt("The guess " + intGuess + " is too low. Try again."));
        while(isNaN(intGuess)||intGuess < intMin || intGuess > intMax) {
            intGuess = parseInt(prompt("Please choose a number between " + intMin + " and " + intMax));
    }
} else
{
    intGuess = parseInt(prompt("The guess " + intGuess + " is too high. Try again."));
    while(isNaN(intGuess)|| intGuess < intMin || intGuess > intMax) {
        intGuess = parseInt(prompt("Please choose a number between " + intMin + " and " + intMax));
    }
    }
 intCount++;
}
 
 //this equation provides the total number of points the guesser earned
 intPoints = 10 - intCount;

// the final output provides an alert with the number of attempts and how many points they got.
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts! You also earned " + intPoints + " points!");

