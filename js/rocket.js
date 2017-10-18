var timer = null;

var countdownNumber = 10;

var changeState = function(state){
	document.body.className = "body-state" + state;

	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById("countdown").innerHTML = countdownNumber;

	// Countdown
	if(state === 2){
		timer = setInterval(function(){
			countdownNumber = countdownNumber - 1;
			document.getElementById("countdown").innerHTML = countdownNumber;

			if(countdownNumber === 5){
				document.querySelector('.nervous').classList.toggle('show', true)
			}
			else{
				document.querySelector('.nervous').classList.toggle('show', false)
			}

			if(countdownNumber === 3){
				document.querySelector('.cant-wait').classList.toggle('show', true)
			}
			else {
				document.querySelector('.cant-wait').classList.toggle('show', false)
			}
			

			if(countdownNumber <= 0){
				changeState(3)
			};
		
		}, 1000)
	}
	else if(state === 3){
		var success = setTimeout(function(){
			var randomNumber = Math.round(Math.random()*10)

			console.log("randomNumber:" + randomNumber)

			// Success
			if(randomNumber > 5){
				changeState(4)
			}
			else{
				changeState(5) // Oh no!
			}

		}, 2000)

	}
};
