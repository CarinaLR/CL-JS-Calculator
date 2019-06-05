//The text of the button that is click will be displayed on the screen
function input(button)
{
document.calc.display.value += button.value;
}
//Make the screen blank
function clearDisplay()
{
document.calc.display.value = "";
}
//Evaluates the tring on the screen as a mathematic equation then display the answer back on the screen
function enter()
{
document.calc.display.value = eval(document.calc.display.value);
}
//Find the average
function average(){
//Varianle to keep the sum of the sum starting at 0
  var sum = 0;
//Assigning to the list, values passed in the calculator/ separate by comas
  listOfNums = document.calc.display.value.split(",");
//For Loop: Designed to iterate through every "elemnt", in the list in order to add them and create an actual sum.
    for(var i =0; i < listOfNums.length; i++)
    {
    //The sum variable is being updated each time loop start's over
    sum += parseInt(listOfNums[i]);
    }
//Declare a variable called average that is assigned the value of the "sum" over the length of the list which represents the amount of numbers being used
  var average = sum/listOfNums.length;
//Display that value on the calculator on your webpage using the HTML 
  document.calc.display.value = average; 
}