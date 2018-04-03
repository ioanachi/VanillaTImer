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

    console.log(H, min, sec, "inainte de  interval");

    intervalID = window.setInterval(function () {
        console.log(H, min, sec, "intra in interval");

        sec = sec - 1;

        if (sec <= 1) {
            console.log("1");

            if ((min <= 0)) {
                console.log("2");

                
                if ((H <= 0)&& (min <= 0) && (sec <= 0)) {
                    console.log("3");
                    H = 0;
                    min = 0;
                    sec = 0;
                    clearInterval(intervalID)

             
                    errorTxt.innerHTML = "Timer Ended"
                }
                H = H - 1;
            }
            min = min - 1;
            sec = 60;
        }
        console.log(H, min, sec, "intra");

        if ((min <= 0) && (sec <= 0)) {
            H = H - 1;
            min = 60;
            //    console.log(min, H, "iffff");
        }
        if (H <= 0) {
            H = 0;
        }
        if ((H <= 0) && (min <= 0) && (sec <= 0)) {
            errorTxt.innerHTML = "Timer Ended"

            clearInterval(intervalID)
            console.log(H, min, sec, "second iffff");

            H = 0;
        }
        errorTxt.innerHTML = H + " hours : " + min + " minutes : " + sec + " seconds left";
    }, 100)
}
function onStartTimer() {
    var hourChosen = hour.value;
    var minuteChosen = minute.value;
    var secondChosen = second.value;
    console.log(hourChosen, minuteChosen, secondChosen);
    console.log(clearInterval);
    if (!intervalID) {

        timerInterval(hourChosen, minuteChosen, secondChosen)

    } else {
        clearInterval(intervalID);
        timerInterval(hourChosen, minuteChosen, secondChosen)

    }


}
startBtn.addEventListener('click', onStartTimer);