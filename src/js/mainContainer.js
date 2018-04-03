var startBtn = document.getElementById("startBtn");
var hour= document.getElementById("hourChosen");
var minute= document.getElementById("minuteChosen");
var errorTxt= document.getElementById("errorTxt");
var intervalID;

function onStartTimer(){
var hourChosen= hour.value;
var minuteChosen= minute.value;
if((hourChosen>24)||(hourChosen<0)||(minuteChosen<0)||(minuteChosen>60)){
    errorTxt.innerHTML = "This is not a valid date, please choose again"
}

    console.log(hourChosen);
    console.log(clearInterval);
    if(!intervalID){
        intervalID= window.setInterval(function(){
            console.log(intervalID, "intervalID");
               minuteChosen = minuteChosen-1;
       if(minuteChosen == 0){
           hourChosen = hourChosen-1;
           minuteChosen = 60;
       }
       if((hourChosen ==0)&&(minuteChosen == 0)){
       clearInterval(intervalID)
       }
       errorTxt.innerHTML = hourChosen + "hour:"+minuteChosen+"minutes left";
           } ,1000)
    }else{
        clearInterval(intervalID);
    }
 

}
startBtn.addEventListener('click',onStartTimer );