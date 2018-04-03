var startBtn = document.getElementById("startBtn");
var hour= document.getElementById("hourChosen");
var minute= document.getElementById("minuteChosen");
var second= document.getElementById("secondChosen");
var errorTxt= document.getElementById("errorTxt");
var intervalID;


function addOptions(id, nr){
    var arrMinSec = [];
    for(var i=0; i<nr+1; i++){
    arrMinSec.push(i);
    };
    arrMinSec.forEach( function(number){
    var optn = document.createElement("option");
        
        optn.text = number;
        optn.value = number;
        console.log(number);
        document.getElementById(id).options.add(optn, number);
    })
}
addOptions("minuteChosen", 60);
addOptions("secondChosen", 60);
addOptions("hourChosen", 24);













function timerInterval(min, H){
    intervalID= window.setInterval(function(){
        console.log(min, H, "intervalID");
           min = min-1;
   if(min <= 0){
       H = H-1;
       min = 60;
       console.log(min, H, "iffff");
       
   }
   if((H ==0)&&(min == 0)){
   clearInterval(intervalID)
   console.log(min, H, "second iffff");
   
   }
   errorTxt.innerHTML =H + "hour:"+min+"minutes left";
       } ,1000)
}
function onStartTimer(){
var hourChosen= hour.value;
var minuteChosen= minute.value;
if((hourChosen>24)||(hourChosen<0)||(minuteChosen<0)||(minuteChosen>60)){
    errorTxt.innerHTML = "This is not a valid date, please choose again"
}

    console.log(hourChosen);
    console.log(clearInterval);
    if(!intervalID){
        timerInterval(minuteChosen, hourChosen)
    }else{
        clearInterval(intervalID);
        timerInterval(minuteChosen, hourChosen)
        
    }
 

}
startBtn.addEventListener('click',onStartTimer );