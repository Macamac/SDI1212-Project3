/*
Miguel Camacho
SDI 1212
Project 3
Let's Spar
*/
alert("A Simple Spar!");

var
Htr = "Senko",
War = "Bhishma",
orcBhishma = "Warrior",
orcSenko = "Hunter",
Spar = true,
Spat = false,
RealFight = false,
UnDef = 20,
Class = ["Hunter", " Shaman", "Warrior", "Priest"]

;

//Start
console.log(War + " narrowed his eyes towards " + Htr + " and grinned mischeviously.");
console.log("\"So the " + Class[0] + " believes he can best a mighty orc " + Class[2] + " in a spar?\" " + War + " cackled.");
console.log("\"I have battled " + UnDef + " times today and stand at " + UnDef + " victories!\" he added.");
console.log("\"Well then I'm certain one more would not be a problem for you...\" " + Htr + " japed.");
//Procedure (Argument(String),Procedure,Argument Conditional,Nested Conditional,Condition,Output,Back
if (UnDef < 30){
	console.log("\"More than 50 would not stop me from enjoying another match on the field, " + Class[0] + "!\" bellowed " + War) 
	if (Spar === true){
		console.log("\"Then let us take this bout to the Barrens amongst the animals there!\" " + Htr + " grinned.")
	} else {
		console.log("Honor your request to rest so that we may face again fully able.")
	}
} else {
	console.log("\"I pray I cannot " + Htr + ", for I feel I have reached my limit for this day.\"")
};
console.log(Htr + " continued. \"But I'll allow you to choose where in the Barrens.\"");
console.log(War + " thought on this for a moment.")
//Object Function JSON(local var),Array Function, Local Var, For Loop,  False, Return Array, True, Output 
var locale = {
		"scene" : {
			"North": {
				"area": "north",
				"air": "dry",
				"clutter": "cracked and desolate",
				"range": 10
			},
			"Middle":{
				"area": "midlands",
				"air": "humid",
				"clutter": "plentiful with grass and trees",
				"range": 20
			},
			"South":{
				"area": "south",
				"air": "mild",
				"clutter": "grassy and open",
				"range": 30
			}
		}
	};
for (var key in locale.scene) {
	var barrens = locale.scene[key];
};
var locale2 = {
		"scene" : [
			{
				"area": "north",
				"air": "dry",
				"clutter": "cracked and desolate",
				"range": 10
			},
			{
				"area": "midlands",
				"air": "humid",
				"clutter": "plentiful with grass and trees",
				"range": 20
			},
			{
				"area": "south",
				"air": "mild",
				"clutter": "grassy and open",
				"range": 30
			}
		]
	};
var areaChoose = function (locale){
	for (var i = 0; i < locale.scene.length; i++) {
		var barrens = locale.scene[i];
			console.log("In the "+ barrens.area + " part of the Barrens, the air is " + barrens.air + ", the fields are " + barrens.clutter + ", and is only " + barrens.range + " miles away.");
	};
};
areaChoose(locale2);
var Dest = locale.scene.Middle.area;
console.log(War + " grinned, \" To the " + Dest + "!\"");
console.log("****************************************************************************************");
console.log(Htr + " held up his dragon-bone bow with both hands, repeling each strike from the " + Class[2] + ", each blow seeming to ward off the wildlife");
console.log("that hid in the tall grass that surrounded the two.");
//String Function (Strings, String Prop, Local Var, String Concatenation, Return String Value
if (orcBhishma = "Warior"){
	var DefAtk = "Shield Bash";
	console.log(War + " attempted one more strike against " + Htr + " but feigned the sword movement, surprising the " + Class[0] + " with a " +DefAtk + ".");
};
console.log(Htr + " took the brundt of the hit upon his shoulder, faltering back slightly.");
console.log(War + " saw this as an opening for a charge attack.");
//Boolean Function (Bool Arguments, Prop, Comparison, True/False, Outputs, Return Boolean value)
if ((Spar && Spat) || RealFight) {
    console.log(War + " feels that this is a friendly spar and should go easy on " + Htr + ".");
} else {
    console.log("Orc spars are known to be fierce compared to the humans. " + War + " begins to charge at " + Htr + " with full speed, his sword straight before him to strike true his opponent.")
};
console.log("Instead of " + Htr + " attempting to move to the side, the " + Class[0] + " let his momentum assit by falling towards his back in the loft grass.");
console.log(War +  " had a great start with his attack that the drop suprised him but couldn't slow down in time as " + Htr + " moved on the ground,");
console.log("tripping " + War + " with a bit of foot work, causing the " + Class[2] + " to loose footing and fall foward, his sword tossing to the side.");
console.log(War + " rushed to his feet, found his sword in a frantic, and lunged to pick up the ebon blade, and then readied himself for " + Htr + ".");
console.log(War + " face gave a puzzling look as he realized the " + Class[0] + " is nowhere in sight.  The " + Class[2] + " stood motionless, surveying the area.");
//Array Function (Array Arguments, Object argument, mutator	, array prop, function(procedure hopefully), local var, for loop, nested loop, math, output, accessor, array return)			
var Arrow = 4,
Aim = ["shoulder", "forearm", "knee"],
Notch = [1,2,3,4];
Aim.push("ground");



/*needed
Number Argument
Number Prop
Number return Value
While loop
Returned Values
procuedure (if nto used yet)
Finish*/