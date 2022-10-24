let millisec = 0;
let sec = 0;
let min = 0;
var myInterval = null;
var isRunning = false;

function start(){

    document.getElementById("time").innerHTML = (min<10? "0"+min:min) + " : " +(sec<10? "0"+sec:sec)+"."+(millisec<10? "0"+millisec:millisec);
    millisec++;
    if (millisec>99)
    {
        sec++;
        if(sec > 59)
        {
            min++
            sec = 00;
        }
        millisec = 00;
    }
  
}

document.getElementById("start").addEventListener("click", function(){
    if(isRunning !== false) return;
    myInterval = setInterval(start, 10);
    isRunning = true;
})

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(myInterval);
    myInterval = null;
    isRunning = false;
})

function reset(){
    millisec = 0;
    sec = 0;
    min = 0;
    clearInterval(myInterval);
    myInterval = null;
    isRunning = false;
    document.getElementById("time").innerHTML = "00 : 00.00";
}
