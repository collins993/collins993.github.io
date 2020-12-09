

var myName = "Collins";
let ourName ="Best in the World";  // you can declare variables with the var, let, and const.
const pi = 3.14 //this a a variable that can never change
/*this are the diffrent types of  variable*/

 
var sum = 20 * 10;
console.log(sum);

var a = 54;
a += 12;
console.log(a);

var firstname = "Collins "        //this are called strings variables
var lastname = "Nze";
firstname += "is the best in the world." //string concatination
console.log(firstname);

var myStr = "FirstLine\n\tSecondLine\n\t\tThirdLine"

var firstletterofname = "";
var lastname = "Nze";
firstletterofname = lastname[lastname.length - 2];
console.log(firstletterofname);

//arrays

var myArray = ["lockins", 420];

var ourArray = [["shoelace", 72], ["schoolbag", 45]];
var myData = ourArray[0][1];
console.log(myData);

//Functions 

function myFunction() {
	console.log("heyoo world");

};
 myFunction();


 function ourFunction(a, b) {
 	console.log(a - b);

 }
 ourFunction(250, 123);

 function myLocalscope() {
 	var myVar = 8;
 	console.log(myVar);
 }
 myLocalscope();


function minusseven(num){
	return num - 7;
}
console.log(minusseven(37));

//if and else statement can be replcaed with the switch statement which has cases

function caseInSwitch(val) {
	var answer = "";
	   switch(val) {
		  case 1:
		    answer = "alpha";
		    break;
		  case 2:
		    answer = "beta";
		    break;
		  case 3:
		    answer = "gamma";
		    break;
		  case 4:
		    answer = "delta";
		    break;    
	}

	return answer;
}

console.log(caseInSwitch(3));

function switchOfStuff(val) {
	var answer = "";
	switch(val){
		case "a":
		   answer = "apple";
		   break;
		case "b":
		   answer = "bananna";
		   break;
		case "c":
		   answer = "carrot";
		   break;                //emiting the break statement will allow for multiple intput to give the same output 
		default:               
		   answer = "stuffs!!!!!"        
	}

      return answer;
}
console.log(switchOfStuff("fir"));

function sequentialSize(val){
	var answer ="";
	  switch(val){
	  	 case 1:
	  	 case 2:
	  	 case 3:
	  	   answer = "small";
	  	   break;
	  	 case 4:
	  	 case 5:
	  	 case 6:
	  	   answer = "medium";
	  	   break;
	  	 case 7:
	  	 case 8:
	  	 case 9:
	  	   answer = "large";
	  	   break;
	  	   default:
	  	   answer = "oversize"	   	   
	  }
	    return answer;

} 
  console.log(sequentialSize(9));


var count = 0;

function cc(card){
	switch(card){
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		  count++;
		  break;

		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A': 
		   count--;
		   break;

	}
	var holdbet = "hold";
	if (count > 0){
		holdbet = "bet";
	}
	return count + " " + holdbet;

}

console.log(cc('A'));
////////


var myObj = {
	food: "rice",
	pet: "falcon",
	color: "demonblack"
};

var petValue = myObj.pet;
var foodVlue = myObj["food"];
console.log(foodVlue);

myObj.car = "GMC Truck";
console.log(myObj);

//////////



var myStuffs = {
	gift: "pony",
	pet: "dog",
	color: "purplegreen"
};
function checkObj(checkProp){ //this to check if an object has a property
	if (myStuffs.hasOwnProperty(checkProp)) {
		return myStuffs[checkProp];
	}else {
		return "Not Found" 
	}

}
console.log(checkObj("house"));

/////

var myStorage = {
	"car":{
		"inside":{
			"glove box":"maps",
             "passenger seat":"crumbs"
         },
         "outside":{
         	"trunk": "jack"
         }
     }
};

var passengerSeat = myStorage.car.inside["passenger seat"];

console.log(passengerSeat);

//


var myArray = [];       // this is a while loop 

var i = 0;
while(i < 7){
	myArray.push(i);
	i++;
}
console.log(myArray);

var ourArray = [];
for (var i = 0; i < 5; i++) {  // thiis ia a for loop
	ourArray.push(i);
}
console.log(ourArray);

//examples
var ourArray2 = [9,10,11,12];
var ourTotal = 0;

for(i = 0; i < ourArray2.length; i++){
	ourTotal += ourArray2[i];
}
console.log(ourTotal);


// teneray operator
function checkSign(num){
    return num > 0 ? "positive": num < 0 ? "negative": "sowieee!!!"
}

console.log(checkSign('bag'));

function checkScope(){
    "use strict";
    let i = "function scope";
    if(true){
       let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();

function printManytimes(str){
    "use strict";
    var sentence = str + " is cool!";
    sentence = str + " is amazing!";
    for(var i = 0; i < str.length; i+=2){
        console.log(sentence);
    }
    
      
}
printManytimes("freeCodeCamp");













