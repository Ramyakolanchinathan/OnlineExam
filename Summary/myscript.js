var detailList = JSON.parse(sessionStorage.getItem("Details"));
console.log(detailList);

var name = sessionStorage.getItem("nameElm");
document.getElementById("userName").innerHTML = name;

var question = [];
var uAnswer = [];
var qAnswer = [];
for(var i=0;i<20;i++){
    question.push(detailList[i].Question);
    uAnswer.push(detailList[i].UserAnswer);
    qAnswer.push(detailList[i].Answer);
}

var attendedIndexNo = [];
for(var i=0;i<20;i++){
    if(uAnswer[i] !== ""){
        attendedIndexNo.push(i);
    }
}

function renderDynamicQuestions(dataList,isAllStatus){
    var summaryRenderElm = document.getElementById("summaryRenderElm");
    summaryRenderElm.innerHTML = "";

    for(var i=0;i<dataList.length;i++){
        
        var index = dataList[i];
        
        var attQuestion = document.createElement("p");
        attQuestion.setAttribute("id","attQuestion");
        var getAttQuestion = document.createElement("p");
        getAttQuestion.setAttribute("id","getAttQuestion");
        attQuestion.innerHTML ="QUESTION"+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        getAttQuestion.innerHTML = ":"+question[index];
        attQuestion.appendChild(getAttQuestion);
        summaryRenderElm.appendChild(attQuestion);

        var attAnswer = document.createElement("p");
        attAnswer.setAttribute("id","attAnswer");
        var getAttAnswer = document.createElement("span");
        getAttAnswer.setAttribute("id","getAttAnswer");
        attAnswer.innerHTML ="CORRECT ANSWER";
        getAttAnswer.innerHTML = "\xa0:"+qAnswer[index];
        attAnswer.appendChild(getAttAnswer);
        summaryRenderElm.appendChild(attAnswer);

        var attUserAnswer = document.createElement("p");
        attUserAnswer.setAttribute("id","attUserAnswer");
        var getAttUserAnswer = document.createElement("span");
        getAttUserAnswer.setAttribute("id","getAttUserAnswer");
        attUserAnswer.innerHTML ="USER ANSWER";
        getAttUserAnswer.innerHTML = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0:"+uAnswer[index]+"\t";
        var correctPic = document.createElement("img");
        var wrongPic = document.createElement("img");
        correctPic.setAttribute("id","correctImg");
        wrongPic.setAttribute("id","wrongImg");
        correctPic.setAttribute("src","https://www.pngplay.com/wp-content/uploads/12/Check-Mark-Tick-No-Background.png");
        wrongPic.setAttribute("src","https://www.pngall.com/wp-content/uploads/8/Wrong-Transparent.png");
        attUserAnswer.appendChild(getAttUserAnswer);
        
        
        if(isAllStatus === false){
            summaryRenderElm.appendChild(attUserAnswer);
        }

         if(qAnswer[index] === uAnswer[index]){
             attUserAnswer.appendChild(correctPic);
        }
        else{
            attUserAnswer.appendChild(wrongPic);
        }
    }
}

function attendedAnswer(){
    var isAllStatus = false;
   renderDynamicQuestions(attendedIndexNo,isAllStatus);
}

function allAnswer(){
    var isAllStatus = true;
    var allAnsIndexes = [];
    for(var i=0;i<20;i++){
        allAnsIndexes.push(i);
    }
     renderDynamicQuestions(allAnsIndexes,isAllStatus);
}


function handleLogout(){
    window.location="file:///D:/PROJECTS/Online%20Exam/Login/index.html";
}
attendedAnswer();