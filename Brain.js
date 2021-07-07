var output = document.getElementById("outputtext");
var msga = document.getElementById("messegearray");
var msg = document.getElementById("messege");
var s = document.getElementById("container");

guessed_nums = [];
while(guessed_nums.length>0){guessed_nums.pop();}
var noofguess=0;
var number = Math.floor(Math.random() * 1000)+1;

var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playBTN');
var attempts=12;

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
document.getElementById("attempt").textContent="You Have total : "+attempts.toString();

function play()
{   
	noofguess+=1;

    var user_input = document.getElementById("input").value;

	if(user_input < 1 || user_input > 1000){
        alert("Please enter a number between 1 and 1000");
    }

	else 
	{
    attempts-=1;

	if(attempts<=2){document.getElementById("attempt").style.color = "red";}

	document.getElementById("attempt").textContent=" Now You Have total : "+attempts.toString()+" left";

	guessed_nums.push(user_input);

	if(user_input!=number && attempts==0){ attempt(); return; }

	else if(Math.abs(user_input-number)<=5 && Math.abs(user_input-number)>0)output.textContent="You are very close "+String.fromCodePoint(0x1F600);
	
	else if(user_input>number && Math.abs(user_input-number)>5)output.textContent="Enter a lower number plzz "+String.fromCodePoint(0x1F615);
	
	else if(user_input<number && Math.abs(user_input-number)>5)output.textContent="Enter a higher number plzz "+String.fromCodePoint(0x1F615);
	
	else { output.textContent = "Hurr...ah you guessed it correct "+String.fromCodePoint(0x1F60E) ; mseg(noofguess-1); }

	msga.textContent = "Guessed numbers are: " +guessed_nums;
   }
}

function mseg(noofguess)
{
    if(noofguess<10)msg.textContent="You guessed it Right after "+ noofguess +" attempts "+String.fromCodePoint(0x1F929)+" Good job";

	else msg.textContent="You guessed it after "+ noofguess +" attempts "+String.fromCodePoint(0x1F642)+" Do better guesses nxt time";
}

function attempt()
{
	s.style.display = "none";
    document.getElementById("lost").textContent="You have exhausted all ur attempts : "+String.fromCodePoint(0x1F641)+"\n"+"Best Of Luck for nxt turn"+String.fromCodePoint(0x1F44D);
}
