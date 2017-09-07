var clockElement = document.getElementById("clock");

function updateTime(){

	function updateClock( clock ) {
		clock.innerHTML = new Date().toLocaleTimeString();
	}

	setInterval( 
		function() { updateClock( clockElement ) }, 
		1000
	);

}

updateTime();
