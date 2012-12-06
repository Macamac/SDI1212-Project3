/*
Miguel Camacho
SDI 1212
Project 3
Let's Spar
*/
alert("A Simple Spar!");

var
Htr = "Senko"
War = "Bhishma"
Spar = true,
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
//Array Function (Argument(Array), JSON(local var),Array Function, Local Var, For Loop,  False, Return Array, True, Output 
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
console.log(War + " grinned. \" To the Midlands!\"");
console.log("****************************************************************************************");
