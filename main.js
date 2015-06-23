
var namesOfVictims = [];
var numbersOfVictims = [];
var addressesOfVictims = [];
var namesOfVolunteers = [];
var numbersOfVolunteers = [];
var addressesOfVolunteers = [];

var numVictims = prompt("How many disaster victims are there?");
console.log(numVictims);

for (var i = 0; i < numVictims; i++) { 
	console.log(i);
	namesOfVictims.push(prompt("Please enter the name of the disaster victim."));
	numbersOfVictims.push(prompt("Please enter the phone number of the disaster victim."));
	addressesOfVictims.push(prompt("Please enter in the street address of the disaster victim."));
}

var numVolunteers = prompt("How many volunteers are there?");


for (var i = 0; i < numVolunteers; i++) {
	console.log(i)
	namesOfVolunteers.push(prompt("Please enter the name of the volunteer."));
	numbersOfVolunteers.push(prompt("Please enter the phone number of the volunteer."));
	addressesOfVolunteers.push(prompt("Please enter in the street address of the volunteer."));
}

alert("There are a total of " + numVictims + " victims in need and there are " + numVolunteers + " volunteers available." + " Here is a list of the victims names: " + namesOfVictims + " and a list of the available volunteers: " + namesOfVolunteers + ".");



