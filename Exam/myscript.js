var name = sessionStorage.getItem("UserName");
document.getElementById("userName").innerText=name;

sessionStorage.setItem("nameElm",name);

var count = 0;
var qnList=
    [   {"Question":"1.What is JavaScript?",
    "OptionList" : ["Assembly Language","Scripting Language","Markup Language","Compiled Language"],
    "Answer" : "Scripting Language",
    UserAnswer : ""},
        {"Question":"2.Which symbol is used separate Javascript statements?",
    "OptionList" : ["Comma(,)","Colon(:)","Semicolon(;)","Hyphen(-)"],
    "Answer" : "Semicolon(;)",
    UserAnswer : ""},
        {"Question":"3.What is the default value of an uninitialized variable?",
    "OptionList" : ["0","undefined","null","error"],
    "Answer" : "undefined",
    UserAnswer : ""},
        {"Question":"4.A group of reusable code which can be called anywhere in program is ____.",
    "OptionList" : ["exception","loop","function","switch"],
    "Answer" : "function",
    UserAnswer : ""},
        {"Question":"5.The statement \"a===b\" refers to",
    "OptionList" : ["Both a and b are equal in value,type,and reference address","Both a and b equal in value","Both a and b are equal in value and type","There is no such statement"],
    "Answer" : "Both a and b are equal in value and type",
    UserAnswer : ""},
        {"Question":"6.What we will get if we compare the '2' with '12' using the greater than operator ('2'>'12')?",
    "OptionList" : ["NaN","True","False","error"],
    "Answer" : "True",
    UserAnswer : ""},
        {"Question":"7.What are the three important manipulations done in for loop on a loop variable?",
    "OptionList" : ["Initialization,Incrementation,Testing","Initialization,Testing,Incrementation","Initialization,Update,Testing","Initialization,Testing,Update"],
    "Answer" : "Initialization,Testing,Update",
    UserAnswer : ""},
        {"Question":"8.Which of the following is not a looping statement?",
    "OptionList" : ["for","while","switch","do while"],
    "Answer" : "switch",
    UserAnswer : ""},
        {"Question":"9.Which operator will return false if two value are equal?",
    "OptionList" : ["!","!=","!==","All of the above"],
    "Answer" : "!=",
    UserAnswer : ""},
        {"Question":"10.The method which is used to add a new element in a array is ____.",
    "OptionList" : ["add()","insert()","push()","pop()"],
    "Answer" : "push()",
    UserAnswer : ""},
        {"Question":"11.How to merge two array(a=[2,7,4] and b=[6,4,3])?;",
    "OptionList" : ["a(concat.b)","a-concat(b)","concat(a.b)","a.concat(b)"],
    "Answer" : "a.concat(b)",
    UserAnswer : ""},
        {"Question":"12.Comparing two similar objects in javascript always returns ____.",
    "OptionList" : ["true","false","error","undefined"],
    "Answer" : "false",
    UserAnswer : ""},
        {"Question":"13.____ serializes only the enumerable own properties of an object.",
    "OptionList" : ["JSON.Parse()","JSON.Stringfy()","JSON.Null()","JSON.Objectify"],
    "Answer" : "JSON.Stringfy()",
    UserAnswer : ""},
        {"Question":"14.What is the purpose of a return statement in a function?",
    "OptionList" : ["Return the value and continue executing rest of the statements,if any","Return the value and stop the program","Stop executing the function and return the value","Return the value and stop executing the function"],
    "Answer" : "Stop executing the function and return the value",
    UserAnswer : ""},
        {"Question":"15.What is the full form of DOM?",
    "OptionList" : ["Document Object Management","Document Oriented Model","Document Object Model","Document Oriented Management"],
    "Answer" : "Document Object Model",
    UserAnswer : ""},
        {"Question":"16.What is the output of the following code?\n print(NaN === NaN);",
    "OptionList" : ["true","false","undefined","Error"],
    "Answer" : "false",
    UserAnswer : ""},
        {"Question":"17.What will be output of the following code? \nvar grand_Total = eval(\"10*10+5\");",
    "OptionList" : ["\"10*10+5\"","105 as integer value","105 as string value","undefined"],
    "Answer" : "105 as integer value",
    UserAnswer : ""},
    {"Question":"18.What will be output of the following code? \nvar stringToNum = parseInt(\"123xyz\");",
    "OptionList" : ["123xyz","123","Exception","NaN"],
    "Answer" : "123",
    UserAnswer : ""},
        {"Question":"19.What will be the result or type of error, if p is not defined in the following snippet? \n console.log(p);",
    "OptionList" : ["Value not found","Reference Error","Null","Zero"],
    "Answer" : "Reference Error",
    UserAnswer : ""},
        {"Question":"20.The internal clock in jvascript counts from midnight ____",
    "OptionList" : ["January 1,1972","January 1,1947","January 1,1980","January 1,1970"],
    "Answer" : "January 1,1970",
    UserAnswer : ""}];


for(var i=0;i<20;i++){
        var qnBtn = document.createElement("button");
        qnBtn.innerText = i+1;
        qnBtn.classList.add("qnNum");
        qnBtn.onclick = function(event){
            var value = event.target.innerHTML;
            var index = parseInt(value) - 1;
            displayQn(index);
            count = index;
            clearCheckedElm();
            check();
            
            var prevBtn = document.getElementById("prevBtn");
            var nextBtn = document.getElementById("nextBtn");
            if(index===0){
                prevBtn.setAttribute("disabled","");
                nextBtn.removeAttribute("disabled","");
            }
            else if(index===19){
                nextBtn.setAttribute("disabled","");
                prevBtn.removeAttribute("disabled","");
            }
            else{
                prevBtn.removeAttribute("disabled","");
                nextBtn.removeAttribute("disabled","");
            }
            return value;
        }
         
var noOfQuestionElm = document.getElementById("noOfQuestionElm");
noOfQuestionElm.appendChild(qnBtn);
    
}


var option1 =document.createElement("input");
option1.type="radio";
option1.setAttribute("id","option1");
option1.setAttribute("name","option");
option1.setAttribute("value","");
option1.setAttribute("onchange","storedElm()");
var opt1 = document.createElement("label");
opt1.setAttribute("for","option1");
var radioElm1 = document.getElementById("optionContainer1");
radioElm1.appendChild(option1);
radioElm1.appendChild(opt1);

var option2 =document.createElement("input");
option2.type="radio";
option2.setAttribute("id","option2");
option2.setAttribute("name","option");
option2.setAttribute("value","");
option2.setAttribute("onchange","storedElm()");
var opt2 = document.createElement("label");
opt2.setAttribute("for","option2");
var radioElm2 = document.getElementById("optionContainer2");
radioElm2.appendChild(option2);
radioElm2.appendChild(opt2);

var option3 =document.createElement("input");
option3.type="radio";
option3.setAttribute("id","option3");
option3.setAttribute("name","option");
option3.setAttribute("value","");
option3.setAttribute("onchange","storedElm()");
var opt3 = document.createElement("label");
opt3.setAttribute("for","option3");
var radioElm3 = document.getElementById("optionContainer3");
radioElm3.appendChild(option3);
radioElm3.appendChild(opt3);

var option4 =document.createElement("input");
option4.type="radio";
option4.setAttribute("id","option4");
option4.setAttribute("name","option");
option4.setAttribute("value","");
option4.setAttribute("onchange","storedElm()");
var opt4 = document.createElement("label");
opt4.setAttribute("for","option4");
var radioElm4 = document.getElementById("optionContainer4");
radioElm4.appendChild(option4);
radioElm4.appendChild(opt4);


var startingMinutes = 05;
var time = startingMinutes * 60;
var countDownElm = document.getElementById("countDown");

function updateCountDown(){
    var minutes = Math.floor(time/60);
    var secounds = time % 60;
    
    countDownElm.innerHTML = "0"+minutes+":"+secounds;
    time--; 
    
    if(time<0){
        window.location="file:///D:/PROJECTS/Online%20Exam/Result/index.html";
    }
}

function handlePrevBtn(){
    clearCheckedElm();
    
    if(count>1){
        count = count-1;
        var nextBtn = document.getElementById("nextBtn");
        nextBtn.removeAttribute("disabled","");
        displayQn(count);
        check();
    }
    else if(count===1){
        count = count-1;
        var prevBtn = document.getElementById("prevBtn");
        prevBtn.setAttribute("disabled","");
        displayQn(count);
        check();
    }
    }

function handleNextBtn(){
    clearCheckedElm();
    
    if (count<18){
        count = count+1;
        var prevBtn = document.getElementById("prevBtn");
        prevBtn.removeAttribute("disabled","");
        displayQn(count);
        check();
    }
    else if (count===18){
        count = count+1;
        var nextBtn = document.getElementById("nextBtn");
        nextBtn.setAttribute("disabled","");
        displayQn(count);
        check();
    }
}

function handleClearBtn(){
    var btnNum = document.getElementsByClassName("qnNum");
    
    clearCheckedElm();
    qnList[count].UserAnswer="";
    btnNum[count].style.backgroundColor="white";
}

function clearCheckedElm(){
    var checkedItem = document.getElementsByName("option");
    
    for(var j=0;j<checkedItem.length;j++){
        checkedItem[j].checked=false;
    }
}

function storedElm(){
    var checkVal = "";
    var checkedItem = document.getElementsByName("option");
    
    for(var j=0;j<checkedItem.length;j++){
        if(checkedItem[j].checked){
            checkVal = checkedItem[j].value;
        }
    }
    qnList[count].UserAnswer=checkVal;
    answerColorCode(count);
}

function check(){
    var uAns = qnList[count].UserAnswer;
    var checkedItem = document.getElementsByName("option");
    
    for(var j=0;j<checkedItem.length;j++){
        var checkedVal = checkedItem[j].value; 
        if(uAns === checkedVal){
            checkedItem[j].checked = true;
        }
    }
} 

function answerColorCode(count){
    var checkedItem = document.getElementsByName("option");
    var btnNum = document.getElementsByClassName("qnNum");
    
    for(j=0;j<checkedItem.length;j++){
        if(checkedItem[j].checked){
            btnNum[count].style.backgroundColor="dodgerblue";
        }
}
}

function displayQn(count){
    var i = count;
    outOfQn.innerText = i+1;
    question.innerText = qnList[i].Question;
    opt1.innerText = qnList[i].OptionList[0]; 
    opt2.innerText = qnList[i].OptionList[1];
    opt3.innerText = qnList[i].OptionList[2];
    opt4.innerText = qnList[i].OptionList[3];
    
    option1.value = qnList[i].OptionList[0]; 
    option2.value = qnList[i].OptionList[1];
    option3.value = qnList[i].OptionList[2];
    option4.value = qnList[i].OptionList[3];
}

function handleLogout(){
    window.location="file:///D:/PROJECTS/Online%20Exam/Login/index.html";
}

function handleSubmitBtn(){
    var confirmation = confirm("Do you want to continue?");
    
    if(confirmation){
    sessionStorage.setItem("AnswerDetilas",JSON.stringify(qnList));
    console.log(qnList);
    window.location="file:///D:/PROJECTS/Online%20Exam/Result/index.html";
    }
}

displayQn(count);
updateCountDown();
setInterval(updateCountDown,1000);