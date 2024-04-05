var nameErrormes = document.getElementById("errormesName");
var pwdErrormes = document.getElementById("errormesPwd");
var successfullMes = document.getElementById("successfullLoginMes");
var failedMes = document.getElementById("failedLoginMes");
var userName = document.getElementById("name");
var userPwd = document.getElementById("password");

function validName(){
    var nameValue= userName.value;
    
    if(nameValue === ""){
        nameErrormes.style.display ="inline";
        successfullMes.style.display ="none";
        failedMes.style.display ="none";
    }
    else{
        nameErrormes.style.display ="none";
        successfullMes.style.display ="none";
        failedMes.style.display ="none";
    }
}

function validPassword(){
    var passwordValue = userPwd.value;
    
    if(passwordValue === ""){
        pwdErrormes.style.display ="inline";
        successfullMes.style.display ="none";
        failedMes.style.display ="none";
    }
    else{
        pwdErrormes.style.display ="none";
        successfullMes.style.display ="none";
        failedMes.style.display ="none";
    }
}

function validLogin(){
    var nameValue= userName.value;
    var passwordValue = userPwd.value;
    var Detail;
    
    if(nameValue === "Admin" && passwordValue === "admin@123"){
        successfullMes.style.display ="inline";
        failedMes.style.display ="none";
        
        Detail = {"UserName": nameValue,
                     "Password":passwordValue};
        console.log(Detail);
        sessionStorage.setItem("UserDetail",JSON.stringify(Detail));
        
        setTimeout(function(){
            successfullMes.style.display = "none";
            window.location="../Instruction/index.html";
        },2000)
    }
    else{
        successfullMes.style.display ="none";
        failedMes.style.display ="inline";   
    }
}

function handlelogin(){
    var nameValue= userName.value;
    var passwordValue = userPwd.value;
    
    if(validName()){}
    
    else if(validPassword()){}
    
    else if(validLogin()){}
}

function handleClear(){
    userName.value=null;
    userPwd.value=null;
    nameErrormes.style.display ="none";
    pwdErrormes.style.display = "none";
    successfullMes.style.display ="none";
    failedMes.style.display ="none";    
}