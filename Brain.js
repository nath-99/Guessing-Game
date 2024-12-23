var output = document.getElementById("outputtext");
var msga = document.getElementById("messegearray");
var msg = document.getElementById("messege");
var s = document.getElementById("container");

var clk =document.getElementById("click");
var app =document.getElementById("Applause");
var ida =document.getElementById("Idea");
var oho =document.getElementById("Oh no");


guessed_nums = [];
while(guessed_nums.length>0){guessed_nums.pop();}
var noofguess=0;
var number = Math.floor(Math.random() * 1000)+1;

/*
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playBTN');
*/

var attempts=14;

const startit = () => {
setTimeout(function () {
	confetti.start();
}, 500);
};

const stopit = () => {
setTimeout(function () {
	confetti.stop();
}, 6000);
};

/*
function playm()
{
	if(count==0)
	{
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Stop";
	}
	else{
		count = 0;
		audio.pause();
	    audio.currentTime = 0;
		playPauseBTN.innerHTML = "music &#127911;";
	}
}
*/
document.getElementById("attempt").textContent="You Have total : "+attempts.toString()+" attempts";

function play()
{   
	var clk = new Audio('Click.mp3');
	clk.playbackRate = 2.0;
	clk.play();

	noofguess+=1;

    var user_input = document.getElementById("input").value;

	if(user_input < 1 || user_input > 1000){
        alert("Please enter a number between 1 and 1000");
    }

	else 
	{
    attempts-=1;

	if(attempts<=2){document.getElementById("attempt").style.color = "red";}

	document.getElementById("attempt").textContent=" Now You Have total : "+attempts.toString()+" attempts left";

	guessed_nums.push(user_input);

	if(user_input!=number && attempts==0){var oho = new Audio('Oh no.mp3');oho.play(); attempt(); }

	else if(Math.abs(user_input-number)<=5 && Math.abs(user_input-number)>0)
	{
		var ida = new Audio('Idea.mp3');
		ida.playbackRate = 2.0;
		ida.play();
		output.textContent="You are very close "+String.fromCodePoint(0x1F600);
	}
	
	else if(user_input>number && Math.abs(user_input-number)>5)output.textContent="Enter a lower number "+String.fromCodePoint(0x1F615);
	
	else if(user_input<number && Math.abs(user_input-number)>5)output.textContent="Enter a higher number "+String.fromCodePoint(0x1F615);
	
	else 
	{
		var app = new Audio('Applause.mp3');
		app.play();
		startit();
		stopit();
		document.getElementById("enter").disabled=true;
		document.getElementById("input").disabled=true;
		document.getElementById("enter").style.display="none";
		document.getElementById("input").style.display="none";
		output.textContent = "Hurr...ah you guessed it correct "+String.fromCodePoint(0x1F60E) ; 
		mseg(noofguess); 
	}
	msga.textContent = "Guessed numbers are: " +guessed_nums;
   }
}

function mseg(noofguess)
{
    if(noofguess<10)msg.textContent="You guessed it right after "+ noofguess +" attempts "+String.fromCodePoint(0x1F929)+" Good job";
	else msg.textContent="You guessed it right after "+ noofguess +" attempts "+String.fromCodePoint(0x1F642)+" Do better guesses nxt time";
}

function attempt()
{
    document.getElementById("enter").disabled=true;
	document.getElementById("input").disabled=true;
	s.style.display = "none";
    document.getElementById("lost").textContent="You have exhausted all ur attempts : "+String.fromCodePoint(0x1F641)+"\n"+"Best Of Luck for nxt turn"+String.fromCodePoint(0x1F44D);
}
