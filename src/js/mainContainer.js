var startBtn = document.getElementById("startBtn");
var hour = document.getElementById("hourChosen");
var minute = document.getElementById("minuteChosen");
var second = document.getElementById("secondChosen");
var errorTxt = document.getElementById("errorTxt");
var intervalID;


function addOptions(id, nr) {
    var arrMinSec = [];
    for (var i = 0; i < nr + 1; i++) {
        arrMinSec.push(i);
    };
    arrMinSec.forEach(function (number) {
        var optn = document.createElement("option");

        optn.text = number;
        optn.value = number;
        document.getElementById(id).options.add(optn, number);
    })
}
addOptions("minuteChosen", 60);
addOptions("secondChosen", 60);
addOptions("hourChosen", 24);

function timerInterval(H, min, sec) {
    
     window.setInterval(function () {
    console.log("intra in interval");
    sec = sec - 1;
        
        console.log(min, H, sec, "intra");
        if (sec <= 0) {
            min = min - 1;
            sec = 60;
        }
        if (min <= 0) {
            H = H - 1;
            min = 60;
            //    console.log(min, H, "iffff");

        }
        if(H <= 0){
            H =0;
        }
        if ((H <= 0) && (min == 0)&&(sec == 0)) {
            clearInterval(intervalID)
            console.log(min, H, "second iffff");
            H =0;
        }
        errorTxt.innerHTML = H + " hour : " + min + " minutes : " + sec + " seconds left";
    }, 1000)
}
function onStartTimer() {
    var hourChosen = hour.value;
    var minuteChosen = minute.value;
    var secondChosen = second.value;
    console.log(hourChosen, minuteChosen, secondChosen);
    console.log(clearInterval);
    if (!intervalID) {
        
        timerInterval(minuteChosen, hourChosen, secondChosen)
        
    } else {
        clearInterval(intervalID);
        timerInterval(minuteChosen, hourChosen, secondChosen)

    }


}
startBtn.addEventListener('click', onStartTimer);