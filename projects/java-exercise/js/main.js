var myName ='Maddie';
console.log('My name is', myName);

var favNumber = 7;
console.log('My favorite number is', favNumber);

var favNumberString = '7';
console.log('My favorite number is', favNumberString);

var boolean = false;
console.log(boolean);

var arrayName = ['M','A','D','D','I','E'];
console.log(arrayName);

var arrayData = ['Maddie', 7, true];
console.log(arrayData);

var fullName = 'Maddie' + 'Lee'
console.log(fullName);

var equalHundred = 46 + 54
console.log(equalHundred);

console.log(arrayName[0]);
console.log(arrayName.length);

console.log('supercalifragilisticexpialidocious'.length);


console.log(fullName[0].length);
console.log(fullName[1].length);

if ('All students are here') {
	console.log('All the students are in class.')
} else {
	console.log('Not everyone is here.')
};


for (var i = 0; i < arrayName.length; i++) {
	console.log(arrayName[i]);
};


/* 7 */
var date = new Date;
var hour = date.getHours();
var minutes = date.getMinutes();

if ( hour >= 7 && hour <= 9) {
  console.log("It's between 7pm and 9:40pm!");
} else if ( hour = 9 && minutes <= 40 ) {
  console.log("It's between 7pm and 9:40pm!");
} else {
	console.log("It's NOT between 7pm and 9:40pm.")
}


/*8*/
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[new Date().getDay()]);

if ( today = Monday ) {
	console.log ("Monday is the first day of the week.")
} else if ( today = Tuesday ) {
	console.log ("Tuesday is the second day of the week.")
} else if ( today = Wednesday) {
	console.log ("Wednesday is the third day of the week.")
}



/*9*/
var favFood = ['chicken','apple','cake'];
console.log(favFood);

var favAnimal = ['dog','cat','turtle'];
console.log(favAnimal);

var favPlace = ['NYC','Seoul','JejuIsland'];
console.log(favPlace);

var favPokemon = ['Pikachu','Snorlax','Bulbasaur'];
console.log(favPokemon);