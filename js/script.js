var sayMyName = function (name) {
	alert("My name is: " + name)
};

var car = {
			make: "VW",
			type: "Polo",
			colour: "blue",
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				"seat1",
			 	"seat2", 
			 	"seat3", 
			 	"seat4"
			 	],
			 turnOn: function(){
			 	this.isTurnedOn = true; //"This" refers to the car object here
			 	},
			 fly: function(){
			 		alert("flying")
			 	},
			 switchCar: function(isOn){
			 	console.log("turn car" + " " + isOn);
			 		if(isOn == true){
			 			this.isTurnedOn = true
			 		}
			 		else{
			 			this.isTurnedOn = false
			 		}
			 	}
		};
		
			console.log("hello there friends!")