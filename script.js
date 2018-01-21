//alert("Hi there, and welcome."
//let rounds=0;
let userTotal=0;
let computerTotal=0;


function Reset(){
	//rounds=0;
	userTotal=0;
	computerTotal=0;
	document.getElementById("Computer").innerHTML = computerTotal ;
	document.getElementById("User").innerHTML = userTotal;
}

function Check(){
	if (userTotal>=5 || computerTotal >=5){
		alert("We have a winner Start over");
		Reset();
	}
}



function Rock() {
	
   userOption="Rock"
   PlayGround(ComputerPlay(),userOption);
}

function Paper() {
	
   userOption="Paper"
   PlayGround(ComputerPlay(),userOption);
}

function Scissor() {
	
   userOption="Scissor"
   PlayGround(ComputerPlay(),userOption);
}




function ComputerPlay()
{ // computer resolt
	computerRandom=Math.random();
	if (computerRandom <0.33 ){
		computerValue="Paper";
		return computerValue;
	} 
	else if (computerRandom>= 0.33 && computerRandom <0.66 ){
		computerValue="Rock";
		return computerValue
	}

	else {
		computerValue="Scissor"
		return computerValue
	}
}


function PlayGround (ComputerPlay1,userOption1){ // Check the winner
	userOption1=userOption;
	ComputerPlay1=ComputerPlay();

	if (ComputerPlay1 == "Rock" && userOption1 == "Paper"){
	alert(" Computer Selected "+ ComputerPlay1+ " and you Selected "+ userOption1+ " User Win");
	userTotal++;
	document.getElementById("User").innerHTML = userTotal;
	Check()
	}
	else if (ComputerPlay1 == "Rock" && userOption1 == "Scissor"){
	alert (" Computer Selected "+ ComputerPlay1+ " and you Selected "+ userOption1+ " Computer Wins");
	computerTotal++;
	document.getElementById("Computer").innerHTML = computerTotal;
	Check();
		}
	else if (ComputerPlay1 == "Scissor" && userOption1 == "Rock"){
	alert (" Computer Selected "+ ComputerPlay1+ " and you Selected "+ userOption1+ " User Wins");
	userTotal++;
	document.getElementById("User").innerHTML = userTotal;
	Check();
		}
	else if (ComputerPlay1 == "Scissor" && userOption1 == "Paper"){
	alert (" Computer Selected "+ ComputerPlay1+ " and you Selected "+ userOption1+ " Computer Wins");
	computerTotal++
	document.getElementById("Computer").innerHTML = computerTotal;
	Check();
		}
	else if (ComputerPlay1 == "Paper" && userOption1 == "Rock"){
	alert (" Computer Selected "+ ComputerPlay1+ " and you Selected "+ userOption1+ " Computer wins");
	computerTotal++;
	document.getElementById("Computer").innerHTML = computerTotal;
	Check();}
	else if (ComputerPlay1 == "Paper" && userOption1 == "Scissor"){
	alert (" Computer Selected "+ ComputerPlay1+ " and you Selected "+ userOption1+ " User wins");
	userTotal++;
	document.getElementById("User").innerHTML = userTotal;
	Check();}
	else { alert("This is a tie")};

}



//Old Code Before Repl Modifications 

/*

function Rock (){ // User Selected Rock
	userOption= "Rock"
	ComputerPlay()
	PlayGround(ComputerPlay)
};

function Paper(){ //User Selected Paper
 	userOption="Paper"
};

function Scissor () { // User Selected Scissor
	userOption="Scissor";
};


function ComputerPlay()
{ // computer resolt
	computerRandom=Math.random();
	if (computerRandom <0.33 ){
		computerValue="Paper";
		return computerValue;
	} 
	else if (computerRandom>= 0.33 && computerRandom <0.66 ){
		computerValue="Rock";
		return computerValue
	}

	else {
		computerValue="Scissor"
		return computerValue
	}
}


function displayResult() {
	Rock();
    document.getElementById("Computer").innerHTML = computerValue;

}

function PlayGround (ComputerPlay,userOption1){ // Check the winner
	userOption1=userOption;
	ComputerPlay=computerValue;

	if (ComputerPlay == "Rock" && userOption1 == "Paper"){
	alert("User Win ");
	}
	else if (ComputerPlay == "Rock" && userOption1 == "Scissor"){
	alert ("Computer Wins");
		}
	else if (ComputerPlay == "Scissor" && userOption1 == "Rock"){
	alert ("User Wins");
		}
	else if (ComputerPlay == "Scissor" && userOption1 == "Paper"){
	alert ("Computer Wins");
		}
	else if (ComputerPlay == "Paper" && userOption1 == "Rock"){
	alert ("Computer wins");
	}
	else if (ComputerPlay == "Paper" && userOption1 == "Scissor"){
	alert ("User wins");
	}
	else { alert("This is a tie")};

} */




