function lagosClock(){
	//presentTime uses the current time based on the local time
	//set on the PC
	var presentTime = new Date();
	//presentHour gets the current hour
	var presentHour = presentTime.getHours();
	//presentMinute gets the current minute
	var presentMinute = presentTime.getMinutes();
	//presentSecond gets the current second
	var presentSecond = presentTime.getSeconds();
	var presentDay = presentTime.getDay();

	var am = 'AM';
	var pm = 'PM';

	var dayArray = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

	//Conidtional statements that control the days of the week
	if(presentDay==0){
		document.getElementById('lagDay').innerHTML = dayArray[0];
	}
	else if(presentDay==1){
		document.getElementById('lagDay').innerHTML = dayArray[1];
	}
	else if(presentDay==2){
		document.getElementById('lagDay').innerHTML = dayArray[2];
	}
	else if(presentDay==3){
		document.getElementById('lagDay').innerHTML = dayArray[3];
	}
	else if(presentDay==4){
		document.getElementById('lagDay').innerHTML = dayArray[4];
	}
	else if(presentDay==5){
		document.getElementById('lagDay').innerHTML = dayArray[5];
	}
	else if(presentDay==6){
		document.getElementById('lagDay').innerHTML = dayArray[6];
	}
			

	//Conditional statements that output the meridiem per time
	if(presentHour > 11){
		document.getElementById('lagMeridiem').innerHTML = pm;
	}
	else{
		document.getElementById('lagMeridiem').innerHTML = am;
	}


	//This category controls firstly, the addition of zero when any hand is
	//between 0 and 9. And secondly, the conversion of GMT into 12hours each
	if(presentHour > 13){
		document.getElementById('lagHour').innerHTML = '0'+presentHour - 12;
	}
	else{
		document.getElementById('lagHour').innerHTML = presentHour;
	}
	
	if(presentMinute < 10){
		document.getElementById('lagMinute').innerHTML = '0'+presentMinute;
	}
	else{
		document.getElementById('lagMinute').innerHTML = presentMinute;
	}

	if(presentSecond < 10){
		document.getElementById('lagSecond').innerHTML = '0'+presentSecond;
	}
	else{
		document.getElementById('lagSecond').innerHTML = presentSecond;
	}
	
}

function sydneyClock(){
	var presentTime = new Date();
	//Sydney is currently 10 hours ahead of Lagos
	var presentHour = presentTime.getHours()+10;
	var presentMinute = presentTime.getMinutes();
	var presentSecond = presentTime.getSeconds();
	var presentDay = presentTime.getDay();

	var am = 'AM';
	var  pm= 'PM';
	
	var dayArray = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

	//This category is more complex than the Lagos clock because the
	//days don't change at the same time, due to time difference
	if(presentDay==0){
		document.getElementById('sydDay').innerHTML = dayArray[0];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[1];
		}
	}
	else if(presentDay==1){
		document.getElementById('sydDay').innerHTML = dayArray[1];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[2];
		}
	}
	else if(presentDay==2){
		document.getElementById('sydDay').innerHTML = dayArray[2];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[3];
		}
	}
	else if(presentDay==3){
		document.getElementById('sydDay').innerHTML = dayArray[3];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[4];
		}
	}
	else if(presentDay==4){
		document.getElementById('sydDay').innerHTML = dayArray[4];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[5];
		}
	}
	else if(presentDay==5){
		document.getElementById('sydDay').innerHTML = dayArray[5];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[6];
		}
	}
	else if(presentDay==6){
		document.getElementById('sydDay').innerHTML = dayArray[6];
		if(presentHour > 24){
			document.getElementById('sydDay').innerHTML = dayArray[0];
		}
	}
	

	//This is also more complicated due to time difference
	if(presentHour > 12) {
		presentHour = presentHour - 12;
		document.getElementById('sydHour').innerHTML = presentHour;
		document.getElementById('sydMeridiem').innerHTML = pm;

		if(presentHour > 12) {
			presentHour = presentHour - 12;
			document.getElementById('sydHour').innerHTML = presentHour;
			document.getElementById('sydMeridiem').innerHTML = am;
		}
	}
	else{
		document.getElementById('sydHour').innerHTML = presentHour;
		document.getElementById('sydMeridiem').innerHTML = am;
	}

	if(presentMinute < 10){
		document.getElementById('sydMinute').innerHTML = '0'+presentMinute;
	}
	else{
		document.getElementById('sydMinute').innerHTML = presentMinute;
	}

	if(presentSecond < 10){
		document.getElementById('sydSecond').innerHTML = '0'+presentSecond;
	}
	else{
		document.getElementById('sydSecond').innerHTML = presentSecond;
	}	
}


function newYorkClock(){
	var presentTime = new Date();
	//New York is currently 6 hours behind Lagos
	var presentHour = presentTime.getHours()-6;
	var presentMinute = presentTime.getMinutes();
	var presentSecond = presentTime.getSeconds();
	var presentDay = presentTime.getDay();

	var am = 'AM';
	var  pm= 'PM';
	
	var dayArray = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

	if(presentDay==0){
		document.getElementById('nycDay').innerHTML = dayArray[0];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[1];
		}
	}
	else if(presentDay==1){
		document.getElementById('nycDay').innerHTML = dayArray[1];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[2];
		}
	}
	else if(presentDay==2){
		document.getElementById('nycDay').innerHTML = dayArray[2];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[3];
		}
	}
	else if(presentDay==3){
		document.getElementById('nycDay').innerHTML = dayArray[3];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[4];
		}
	}
	else if(presentDay==4){
		document.getElementById('nycDay').innerHTML = dayArray[4];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[5];
		}
	}
	else if(presentDay==5){
		document.getElementById('nycDay').innerHTML = dayArray[5];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[6];
		}
	}
	else if(presentDay==6){
		document.getElementById('nycDay').innerHTML = dayArray[6];
		if(presentHour > 24){
			document.getElementById('nycDay').innerHTML = dayArray[0];
		}
	}


	if(presentHour > 12) {
		presentHour = presentHour - 12;
		document.getElementById('nycHour').innerHTML = presentHour;
		document.getElementById('nycMeridiem').innerHTML = pm;
		if(presentHour > 12) {
			presentHour = presentHour - 12;
			document.getElementById('nycHour').innerHTML = presentHour;
			document.getElementById('nycMeridiem').innerHTML = am;
		}
	}
	else{
		document.getElementById('nycHour').innerHTML = presentHour;
		document.getElementById('nycMeridiem').innerHTML = am;
	}
	if(presentHour > 11){
		document.getElementById('nycMeridiem').innerHTML = pm;
	}
	else{
		document.getElementById('nycMeridiem').innerHTML = am;
	}
	
	if(presentMinute < 10){
		document.getElementById('nycMinute').innerHTML = '0'+presentMinute;
	}
	else{
		document.getElementById('nycMinute').innerHTML = presentMinute;
	}

	if(presentSecond < 10){
		document.getElementById('nycSecond').innerHTML = '0'+presentSecond;
	}
	else{
		document.getElementById('nycSecond').innerHTML = presentSecond;
	}	
}


function londonClock(){
	var presentTime = new Date();
	//London is currently 1 hour behind Lagos
	var presentHour = presentTime.getHours()-1;
	var presentMinute = presentTime.getMinutes();
	var presentSecond = presentTime.getSeconds();
	var presentDay = presentTime.getDay();

	var am = 'AM';
	var  pm= 'PM';
	
	var dayArray = ['SUN','MON','TUE','WED','THU','FRI','SAT'];	

	if(presentDay==0){
		document.getElementById('lonDay').innerHTML = dayArray[0];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[1];
		}
	}
	else if(presentDay==1){
		document.getElementById('lonDay').innerHTML = dayArray[1];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[2];
		}
	}
	else if(presentDay==2){
		document.getElementById('lonDay').innerHTML = dayArray[2];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[3];
		}
	}
	else if(presentDay==3){
		document.getElementById('lonDay').innerHTML = dayArray[3];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[4];
		}
	}
	else if(presentDay==4){
		document.getElementById('lonDay').innerHTML = dayArray[4];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[5];
		}
	}
	else if(presentDay==5){
		document.getElementById('lonDay').innerHTML = dayArray[5];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[6];
		}
	}
	else if(presentDay==6){
		document.getElementById('lonDay').innerHTML = dayArray[6];
		if(presentHour > 24){
			document.getElementById('lonDay').innerHTML = dayArray[0];
		}
	}

	
	if(presentHour > 12) {
		presentHour = presentHour - 12;
		document.getElementById('lonHour').innerHTML = presentHour;
		document.getElementById('lonMeridiem').innerHTML = pm;
		if(presentHour > 12) {
			presentHour = presentHour - 12;
			document.getElementById('lonHour').innerHTML = presentHour;
			document.getElementById('lonMeridiem').innerHTML = am;
		}
	}
	else{
		document.getElementById('lonHour').innerHTML = presentHour;
		document.getElementById('lonMeridiem').innerHTML = am;
	}

	
	if(presentMinute < 10){
		document.getElementById('lonMinute').innerHTML = '0'+presentMinute;
	}
	else{
		document.getElementById('lonMinute').innerHTML = presentMinute;
	}

	if(presentSecond < 10){
		document.getElementById('lonSecond').innerHTML = '0'+presentSecond;
	}
	else{
		document.getElementById('lonSecond').innerHTML = presentSecond;
	}	
}

/*To initiate the timing process (by initiating the functions) 
and set the time interval for the second hand.
Note: 1000 milliseconds equals 1 second*/
lagosClock();
setInterval(lagosClock, 1000);

sydneyClock();
setInterval(sydneyClock,1000);

newYorkClock();
setInterval(newYorkClock,1000);

londonClock();
setInterval(londonClock, 1000);

