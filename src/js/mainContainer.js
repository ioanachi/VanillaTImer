var startBtn = document.getElementById("startBtn");
var hour= document.getElementById("hourChosen");
var minute= document.getElementById("minuteChosen");
var errorTxt= document.getElementById("errorTxt");


function onStartTimer(){
var hourChosen= hour.value;
var minuteChosen= minute.value;
if((hourChosen>24)||(hourChosen<0)||(minuteChosen<0)||(minuteChosen>60)){
    errorTxt.innerHTML = "This is not a valid date, please choose again"
}

    console.log(hourChosen);
    console.log(minuteChosen);
    setInterval(function(){
        minuteChosen = minuteChosen-1;
       
if(minuteChosen == 0){
    hourChosen = hourChosen-1;
    minuteChosen = 60;
    
}
errorTxt.innerHTML = hourChosen + "hour:"+minuteChosen+"minutes left";





    } ,1000)
}
startBtn.addEventListener('click',onStartTimer );