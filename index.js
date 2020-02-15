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
    document.getElementById("userDate").classList.remove("empty","wrong","corect");
    document.getElementById("userDate").classList.add("wrong");
    document.getElementById("wrong_age").innerHTML= "You must be 13+";
    return false;
}
function corectD() {
    document.getElementById("userDate").classList.remove("empty","wrong","corect");
    document.getElementById("userDate").classList.add("corect");
    document.getElementById("wrong_age").innerHTML= " ";
    console.log(document.getElementById("wrong_age"));
    return false;
}
function errorN() {
    document.getElementById("userName").classList.remove("empty","wrong","corect");
    document.getElementById("userName").classList.add("wrong");
    return false;
}
function corectN() {
    document.getElementById("userName").classList.remove("empty","wrong","corect");
    document.getElementById("userName").classList.add("corect");
    return false;
}
function errorP() {
    document.getElementById("userPassword").classList.remove("empty","wrong","corect");
    document.getElementById("userPassword").classList.add("wrong");
    return false;
}
function corectP() {
    document.getElementById("userPassword").classList.remove("empty","wrong","corect");
    document.getElementById("userPassword").classList.add("corect");
    return false;
}
