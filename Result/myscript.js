var name = sessionStorage.getItem("nameElm");
document.getElementById("userName").innerHTML = name;

var detailList = JSON.parse(sessionStorage.getItem("AnswerDetilas"));
console.log(detailList);

var uAnswer = [];
var qAnswer = [];
for(var i=0;i<20;i++){
    uAnswer.push(detailList[i].UserAnswer);
    qAnswer.push(detailList[i].Answer);
}

var skippedCount = 0;
for(var i=0;i<20;i++){
    if(uAnswer[i] === ""){
        skippedCount=skippedCount+1;
    }
}

var correctAnswerCount = 0;
var wrongAnswerCount = 0;

for(var i=0;i<20;i++){
    if(uAnswer[i] !== qAnswer[i] && uAnswer[i] !== ""){
        wrongAnswerCount = wrongAnswerCount+1;
    }
    else if(uAnswer[i] === qAnswer[i]){
        correctAnswerCount = correctAnswerCount+1;
    }
    
}

var percentage = (correctAnswerCount*100)/20;

var skippedQuestions = document.getElementById("skippedCount");
skippedQuestions.innerHTML=skippedCount;

var correctAnswer = document.getElementById("crtAnsCount");
correctAnswer.innerHTML = correctAnswerCount;

var wrongAnswer = document.getElementById("wrgAnsCount");
wrongAnswer.innerHTML = wrongAnswerCount;

var totalMark = document.getElementById("analyzedMark");
totalMark.innerHTML = correctAnswerCount;

var average = document.getElementById("analyzedAverage");
average.innerHTML = percentage;

document.getElementById("percentResult").innerHTML = percentage;
    if(percentage>=80){
        document.getElementById("classResult").innerHTML = "Destinction";
        document.getElementById("analyzedGrade").innerHTML = "\"O\"";
        percent.style.backgroundColor = "aqua"
        }
    else if(percentage>=70 && percentage<80){
        document.getElementById("classResult").innerHTML = "First Class";
        document.getElementById("analyzedGrade").innerHTML = "\"A\"";
        percent.style.backgroundColor = "goldenrod"
        }
    else if(percentage>=60 && percentage<70){
        document.getElementById("classResult").innerHTML = "Second Class";
        document.getElementById("analyzedGrade").innerHTML = "\"B\"";
        percent.style.backgroundColor = "cornflowerblue"
        }
    else if(percentage>=35 && percentage<60){
        document.getElementById("classResult").innerHTML = "Third Class";
        document.getElementById("analyzedGrade").innerHTML = "\"C\"";
        percent.style.backgroundColor = "magenta"
        }
    else{
        document.getElementById("classResult").innerHTML = "Fail";
        document.getElementById("analyzedGrade").innerHTML = "\"U\"";
        percent.style.backgroundColor = "peachpuff"
        }

function handleLogout(){
    window.location="file:///D:/PROJECTS/Online%20Exam/Login/index.html";
}

function handleSummary(){
    sessionStorage.setItem("Details",JSON.stringify(detailList));
    sessionStorage.setItem("nameElm",name);
    window.location = "file:///D:/PROJECTS/Online%20Exam/Summary/index.html";
}