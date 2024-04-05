var detail = JSON.parse(sessionStorage.getItem("UserDetail"));
var nameElm=detail.UserName;
document.getElementById("userName").innerText=nameElm;

sessionStorage.setItem("UserName",nameElm);


var checkElm = document.getElementById("condition");
var btnStart = document.getElementById("startBtn");

function conditionCheck(){
    if(checkElm.checked){
        btnStart.removeAttribute("disabled","");
    }
    else{
        btnStart.setAttribute("disabled","");
    }
}
function handleStartExam(){
    window.location = "file:///D:/PROJECTS/Online%20Exam/Exam/index.html";
}