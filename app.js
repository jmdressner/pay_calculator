let hours = prompt("How many hours did you work this week");
let payRate = prompt("What is your pay rate per hour");

hours = Number(hours);
payRate = Number(payRate);

if (hours=>40) {
	console.log((hours*payRate)+((hours-40)*(payRate*0.5)));
}
else {
	console.log(hours*payRate);
}

