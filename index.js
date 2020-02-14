var elem = document.getElementById("button");
var test = document.getElementById("testing");
var input = document.getElementById("userName");

/*-----send click----------*/
elem.addEventListener("click",function (event) {
    var Name = document.getElementById("userName");
    var Pass = document.getElementById("userPassword");
    console.log(Pass);
    var Date = document.getElementById("userDate");
    console.log("clik clik");

    /*---------------VALIDATION----------------*/

    /*------Empty Input----*/
    if(!Name.value) errorN();
    else  corectN();

    if(!Pass.value) errorP();
    /*------Pass lenght----*/

    if( Pass.value.length < 6) errorP();
    else if (Pass.value.length >18) errorP();
    else corectP();

    /*------Corect age----*/
    if(Date.value > 2007) errorD();
    else corectD();

    event.preventDefault();
});




/*-------------Caps Validation---------*/
input.addEventListener("keyup", function(event) {
    var text = document.getElementById("userName").value;
    var res = text.toLowerCase();
    document.getElementById("userName").value=res;
    if (event.getModifierState("CapsLock")) {
        errorN();
    }
    else  {
        corectN();
    }
});


/*-----------------ERROR & CORECT-------------*/
function errorD() {
    userDate.style.border = "2px solid red";
    document.getElementById("wrong_age").innerHTML= "You must be 13+";
    return false;
}
function corectD() {
    userDate.style.border = "2px solid black";
    document.getElementById("wrong_age").innerHTML= ""
    return ;
}
function errorN() {

   userName.style.border = "2px solid red";
    return false;
}
function corectN() {
    userName.style.border = "2px solid black";
    return false;
}
function errorP() {
    userPassword.style.border = "2px solid red";
    return false;
}
function corectP() {
    userPassword.style.border = "2px solid black";
    return false;
}
