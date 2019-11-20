var $ = function (id) 
{
    return document.getElementById(id);
};

//main program that generates the Fibonacci numbers

var generate = function () 
{
    //all variables must be defined in order to properly function
    var intCount, i, j, k, stringOutput;  
    i=0;  //i sets the first number in the series equal to 0
	j=1;  //j sets the second number in the series equal to 1
	stringOutput = i + " " + j; //initializes the series
    
    intCount = parseInt($("total_fib").value); //used to retrieve user input from the DOM
    
    if (isNaN(intCount)||intCount<1||intCount>100) //validates the user input to ensure it is in the proper range
    {
        $("total_fib").value = "";
        alert ("Number must be between 1 and 100"); //this is the error message that occurs if the number is not between 1 and 100
        $("output").value = "Please enter a valid number"; //this message also reminds users that their input must be a number
    }
    else
    {
        //the following section creates the output of Fibonacci numbers based on the number the user gave
        while (intCount >2)
        {
            //these are the necessary steps when the user gives a number greater than 2
            k= i + j; 
            i=j;
            j=k;
            intCount--;
            stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput; //shows output based on user input
    }
	

}; 


window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = ""; //used to help create the output the user sees depending on their input
    $("generate").onclick = generate;//runs the generate function when clicked
};