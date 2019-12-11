function voice(audio){
	voicestop();
	var x = document.getElementById(audio);
	x.play();
}

function voicestop(){
	document.getElementById('audioInitial').pause();
	document.getElementById('audioInitial').currentTime = 0;

	document.getElementById('audioA-0').pause();
	document.getElementById('audioA-0').currentTime = 0;

	document.getElementById('audioA-1').pause();
	document.getElementById('audioA-1').currentTime = 0;

	document.getElementById('audioB-0').pause();
	document.getElementById('audioB-0').currentTime = 0;

	document.getElementById('audioB-1').pause();
	document.getElementById('audioB-1').currentTime = 0;

	document.getElementById('audioC-0').pause();
	document.getElementById('audioC-0').currentTime = 0;

	document.getElementById('audioC-1').pause();
	document.getElementById('audioC-1').currentTime = 0;

	document.getElementById('accepted').pause();
	document.getElementById('accepted').currentTime = 0;

	document.getElementById('rejected').pause();
	document.getElementById('rejected').currentTime = 0;

	document.getElementById('audioA-0.2').pause();
	document.getElementById('audioA-0.2').currentTime = 0;

	document.getElementById('audioA-1.2').pause();
	document.getElementById('audioA-1.2').currentTime = 0;

	document.getElementById('audioB-0.2').pause();
	document.getElementById('audioB-0.2').currentTime = 0;

	document.getElementById('audioB-1.2').pause();
	document.getElementById('audioB-1.2').currentTime = 0;

	document.getElementById('audioC-0.2').pause();
	document.getElementById('audioC-0.2').currentTime = 0;

	document.getElementById('audioC-1.2').pause();
	document.getElementById('audioC-1.2').currentTime = 0;
}

function keypresshandler(event)
{
     var charCode = event.keyCode;
     //Non-numeric character range
     if (charCode != 48 && charCode != 49)
     	return false;
}

var str1 = null;
var ctr = 0;
var State = '';

function simulate(input, label){
	if(document.getElementById(input).value == "")
		window.alert("Input String first!");
	else{
		if(str1 == null){
			str1 = document.getElementById(input).value;
			document.getElementById(input).disabled = true;
			console.log("str1 = " + str1);
			State = 'A';
			voice('audioInitial');
			changeArrow(".initial");
			changeColor(State);
			//document.getElementById("s-a").style.backgroundColor = "red";
			document.getElementById(label).innerText = "First Input: " + str1.charAt(ctr);
		}
		
		else{
			switch(State){
				case 'A': 	if(str1.charAt(ctr) == '1'){
								State = 'B';
								voice('audioA-1');
								changeArrow(".SA-1");
								changeColor(State);
							}
							else{
								voice('audioA-0');
								changeArrow(".SA-0");
							}
							break;
				case 'B': 	if(str1.charAt(ctr) == '0'){
								State = 'C';
								voice('audioB-0');
								changeArrow(".SB-0");
								changeColor(State);
							}
							else{
								voice('audioB-1');
								changeArrow(".SB-1");
							}
							break;
				case 'C': 	if(str1.charAt(ctr) == '0'){
								State = 'C';
								voice('audioC-0');
								changeArrow(".SC");
							}
							else if(str1.charAt(ctr) == '1'){
								State = 'C';
								voice('audioC-1');
								changeArrow(".SC");
							}
							break;
			}
			ctr++;
			
			if(str1.charAt(ctr) == ""){
				console.log("hotdog");
				$(".l1").css({"left": "195px"});
				if(State == 'C'){
					setTimeout(voice, 4500, 'accepted');
					setTimeout(accept, 700, "Accepted", label);
				}
				else{
					setTimeout(voice, 4500, 'rejected');
					setTimeout(accept, 700, "Rejected", label);
				}
			}
			else
				document.getElementById(label).innerText = "Next Input: " + str1.charAt(ctr);
		}
	}
	
	//switch(State){
		//case 'A': if
	//}
}

function clear(){
	$(".initial").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SA-1").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SA-0").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SB-1").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SB-0").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SC").css({"font-size": "12px", "fill": "black", "stroke": "black"});
}

function stop(input, label){
	changeArrow();
	document.getElementById(input).value = "";
	document.getElementById(input).disabled = false;
	document.getElementById(label).innerText = "";
	str1 = null;
	ctr = 0;
	document.getElementById("s-a").style.backgroundColor = "white";
	document.getElementById("s-b").style.backgroundColor = "white";
	document.getElementById("s-c").style.backgroundColor = "white";
	$(".l1").css({"left": "180px"});
	voicestop();
}

function changeArrow(arrow){
	clear();


	$(arrow).css({"transition-duration":"0.2s", "font-size": "16px", "fill": "red", "stroke": "red"});

	setTimeout(clear, 700);
}

function changeColor(state){
	
	switch(state){
		case 'A':	$('#s-a').css({"transition-delay": "0.4s", "transition-duration":"0.3s", "backgroundColor": "red"});
					document.getElementById("s-b").style.backgroundColor = "white";
					document.getElementById("s-c").style.backgroundColor = "white";
					break;
		case 'B': 	$('#s-b').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a").style.backgroundColor = "white";
					document.getElementById("s-c").style.backgroundColor = "white";
					break;
		case 'C': 	$('#s-c').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a").style.backgroundColor = "white";
					document.getElementById("s-b").style.backgroundColor = "white";
					break;
	}
}

function accept(str, label){
	document.getElementById(label).innerText = str;
}


//example2
function simulate2(input, label){
	if(document.getElementById(input).value == "")
		window.alert("Input String first!");
	else{
		if(str1 == null){
			str1 = document.getElementById(input).value;
			document.getElementById(input).disabled = true;
			console.log("str1 = " + str1);
			State = 'A';
			voice('audioInitial');
			changeArrow2(".initial2");
			changeColor2(State);
			//document.getElementById("s-a").style.backgroundColor = "red";
			document.getElementById(label).innerText = "First Input: " + str1.charAt(ctr);
		}
		
		else{
			switch(State){
				case 'A': 	if(str1.charAt(ctr) == '0'){
								State = 'B';
								voice('audioA-0.2');
								changeArrow2(".SA-1-0");
								changeColor2(State);
							}
							else{
								voice('audioA-1.2');
								changeArrow2(".SA-0-1");
							}
							break;
				case 'B': 	if(str1.charAt(ctr) == '1'){
								State = 'C';
								voice('audioB-1.2');
								changeArrow2(".SB-0-1");
								changeColor2(State);
							}
							else{
								voice('audioB-0.2');
								changeArrow2(".SB-1-0");
							}
							break;
				case 'C': 	if(str1.charAt(ctr) == '0'){
								State = 'B';
								voice('audioC-0.2');
								changeArrow2(".SC-0");
								changeColor2(State);
							}
							else{
								State = 'A';
								voice('audioC-1.2');
								changeArrow2(".SC-1");
								changeColor2(State);
							}
							break;
			}
			ctr++;
			
			if(str1.charAt(ctr) == ""){
				console.log("hotdog");
				$(".l1").css({"left": "195px"});
				if(State == 'C'){
					setTimeout(voice, 4500, 'accepted');
					setTimeout(accept, 700, "Accepted", label);
				}
				else{
					setTimeout(voice, 4500, 'rejected');
					setTimeout(accept, 700, "Rejected", label);
				}
			}
			else
				document.getElementById(label).innerText = "Next Input: " + str1.charAt(ctr);
		}
	}
	
	//switch(State){
		//case 'A': if
	//}
}

function stop2(input, label){
	changeArrow2();
	document.getElementById(input).value = "";
	document.getElementById(input).disabled = false;
	document.getElementById(label).innerText = "";
	str1 = null;
	ctr = 0;
	document.getElementById("s-a2").style.backgroundColor = "white";
	document.getElementById("s-b2").style.backgroundColor = "white";
	document.getElementById("s-c2").style.backgroundColor = "white";
	$(".l1").css({"left": "180px"});
	voicestop();
}

function clear2(){
	$(".initial2").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SA-1-0").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SA-0-1").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SB-1-0").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SB-0-1").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SC-0").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SC-1").css({"font-size": "12px", "fill": "black", "stroke": "black"});
}

function changeArrow2(arrow){
	clear2();


	$(arrow).css({"transition-duration":"0.2s", "font-size": "16px", "fill": "red", "stroke": "red"});

	setTimeout(clear2, 700);
}

function changeColor2(state){

	switch(state){
		case 'A':	$('#s-a2').css({"transition-delay": "0.4s", "transition-duration":"0.3s", "backgroundColor": "red"});
					document.getElementById("s-b2").style.backgroundColor = "white";
					document.getElementById("s-c2").style.backgroundColor = "white";
					break;
		case 'B': 	$('#s-b2').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a2").style.backgroundColor = "white";
					document.getElementById("s-c2").style.backgroundColor = "white";
					break;
		case 'C': 	$('#s-c2').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a2").style.backgroundColor = "white";
					document.getElementById("s-b2").style.backgroundColor = "white";
					break;
	}
}

//example3
function simulate3(input, label){
	if(document.getElementById(input).value == "")
		window.alert("Input String first!");
	else{
		if(str1 == null){
			str1 = document.getElementById(input).value;
			document.getElementById(input).disabled = true;
			console.log("str1 = " + str1);
			State = 'A';
			changeArrow3(".initial3");
			changeColor3(State);
			//document.getElementById("s-a").style.backgroundColor = "red";
			document.getElementById(label).innerText = "First Input: " + str1.charAt(ctr);
		}
		
		else{
			switch(State){
				case 'A': 	if(str1.charAt(ctr) == '0'){
								State = 'D';
								changeArrow3(".SA-0-3");
								changeColor3(State);
							}
							else{
								State = 'B';
								changeArrow3(".SA-1-3");
								changeColor3(State);
							}
							break;
				case 'B': 	if(str1.charAt(ctr) == '0'){
								State = 'C';
								changeArrow3(".SB-0-3");
								changeColor3(State);
							}
							else{
								State = 'D';
								changeArrow3(".SB-1-3");
								changeColor3(State);
							}
							break;
				case 'C': 	if(str1.charAt(ctr) == '0' || str1.charAt(ctr) == '1'){
								State = 'C';
								changeArrow3(".SC-3");
								changeColor3(State);
							}
							break;
				case 'D': 	if(str1.charAt(ctr) == '0' || str1.charAt(ctr) == '1'){
								State = 'D';
								changeArrow3(".SD-3");
								changeColor3(State);
							}
							break;
			}
			ctr++;
			
			if(str1.charAt(ctr) == ""){
				console.log("hotdog");
				$(".l1").css({"left": "195px"});
				if(State == 'C')
					setTimeout(accept, 700, "Accepted", label);
				else
					setTimeout(accept, 700, "Rejected", label);
			}
			else
				document.getElementById(label).innerText = "Next Input: " + str1.charAt(ctr);
		}
	}
	
	//switch(State){
		//case 'A': if
	//}
}

function stop3(input, label){
	changeArrow3();
	document.getElementById(input).value = "";
	document.getElementById(input).disabled = false;
	document.getElementById(label).innerText = "";
	str1 = null;
	ctr = 0;
	document.getElementById("s-a3").style.backgroundColor = "white";
	document.getElementById("s-b3").style.backgroundColor = "white";
	document.getElementById("s-c3").style.backgroundColor = "white";
	document.getElementById("s-d3").style.backgroundColor = "white";
	$(".l1").css({"left": "180px"});
}

function clear3(){
	$(".initial3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SA-1-3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SA-0-3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SB-1-3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SB-0-3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SC-3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
	$(".SD-3").css({"font-size": "12px", "fill": "black", "stroke": "black"});
}

function changeArrow3(arrow){
	clear3();


	$(arrow).css({"transition-duration":"0.2s", "font-size": "16px", "fill": "red", "stroke": "red"});
	setTimeout(clear3, 700);
}

function changeColor3(state){

	switch(state){
		case 'A':	$('#s-a3').css({"transition-delay": "0.4s", "transition-duration":"0.3s", "backgroundColor": "red"});
					document.getElementById("s-b3").style.backgroundColor = "white";
					document.getElementById("s-c3").style.backgroundColor = "white";
					document.getElementById("s-d3").style.backgroundColor = "white";
					break;
		case 'B': 	$('#s-b3').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a3").style.backgroundColor = "white";
					document.getElementById("s-c3").style.backgroundColor = "white";
					document.getElementById("s-d3").style.backgroundColor = "white";
					break;
		case 'C': 	$('#s-c3').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a3").style.backgroundColor = "white";
					document.getElementById("s-b3").style.backgroundColor = "white";
					document.getElementById("s-d3").style.backgroundColor = "white";
					break;
		case 'D': 	$('#s-d3').css({"transition-delay": "0.4s", "transition-duration":"0.5s", "backgroundColor": "red"});
					document.getElementById("s-a3").style.backgroundColor = "white";
					document.getElementById("s-b3").style.backgroundColor = "white";
					document.getElementById("s-c3").style.backgroundColor = "white";
					break;
	}
}

function accept(str, label){
	document.getElementById(label).innerText = str;
}