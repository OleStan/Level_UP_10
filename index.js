var elem = document.getElementById("button");
var input = document.getElementById("userName");
let bad_pass = ["qwerty", "1234", "pass", "password","123456"];




function validateForm() {
    const N = document.getElementById("userName").value;
    const P = document.getElementById("userPassword").value;
    const D = document.getElementById("userDate").value;
    if (N == "") {
        alert("Name must be filled out");
        return false;
    }
    console.log(N, P, D);
    console.log("dsfdasfas");
    return true;

}


/*-----send click----------*/
elem.addEventListener("click",function (event) {

    var Name = document.getElementById("userName");
    var Pass = document.getElementById("userPassword");
    console.log(Pass);
    var Date = document.getElementById("userDate");
    console.log("clik clik");
    const pass_control = document.getElementById("userPassword").value;
    const check_pass = bad_pass.find(element => element === pass_control);
/*---------pass------------------*/
   if (check_pass === undefined) {
       corectP();
       }
        else {
            alert("Pasword: "+check_pass+"   is week! Pleas change it");
            errorN();


   }


    /*---------------VALIDATION----------------*/

    /*------Empty Input----*/
    if(!Name.value) errorN();
    else corectN();

    if(!Pass.value) errorP();
    /*------Pass lenght----*/

    if( Pass.value.length < 6) errorP();
    else if (Pass.value.length >18) errorP();
    else corectP();

    /*------Corect age----*/
    if(Date.value > 2007) errorD();
    else corectD();


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
    event.preventDefault();
    return false;
}
function corectD() {
    document.getElementById("userDate").classList.remove("empty","wrong","corect");
    document.getElementById("userDate").classList.add("corect");

    return true;
}
function errorN() {
    document.getElementById("userName").classList.remove("empty","wrong","corect");
    document.getElementById("userName").classList.add("wrong");
    event.preventDefault();
    return false;
}
function corectN() {
    document.getElementById("userName").classList.remove("empty","wrong","corect");
    document.getElementById("userName").classList.add("corect");
    return true;
}
function errorP() {
    document.getElementById("userPassword").classList.remove("empty","wrong","corect");
    document.getElementById("userPassword").classList.add("wrong");
    event.preventDefault();
    return false;
}
function corectP() {
    document.getElementById("userPassword").classList.remove("empty","wrong","corect");
    document.getElementById("userPassword").classList.add("corect");
    return true;
}
