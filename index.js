function reset(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("email").value="";
    document.form.FirstName.focus();
    document.getElementsByClassName("invalid-input").item(0).style.display = "none";
    document.getElementsByClassName("invalid-input").item(1).style.display = "none";
}

function validate() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var fnc=0;
    var lnc=0;
    var ec=0;

    if (fname == "" || lname == "") {
        document.getElementsByClassName("invalid-input").item(0).style.display = "block";
        document.getElementsByClassName("invalid-input").item(0).innerHTML = "Name is required";
        document.getElementsByClassName("invalid-input").item(0).style.color= "red";
        document.form.FirstName.focus();
    }
    if(fname!="" && lname !=""){
        document.getElementsByClassName("invalid-input").item(0).style.display = "none";
    }

    if (email == "") {
        document.getElementsByClassName("invalid-input").item(1).style.display = "block";
        document.getElementsByClassName("invalid-input").item(1).innerHTML = "Email is required";
        document.getElementsByClassName("invalid-input").item(1).style.color= "red";
        document.form.FirstName.focus();
    }else{
        document.getElementsByClassName("invalid-input").item(1).style.display = "none";
    }


    var fnamelenght= fname.length;
    var lnamelenght= lname.length;
    var fnc;
    var lnc;

    for(var i=0 ;i<fnamelenght;i++){
        var characters=parseInt(fname.substring(i,i+1));
        if(Number.isInteger(characters)){
            fnc=true;
            break;
        }
    }


    for(var j=0 ;j<lnamelenght;j++){
        var characters1=parseInt(lname.substring(j,j+1));
        if(Number.isInteger(characters1)){
            lnc=true;
            break;
        }
    }

    if(fnc==true || lnc==true){
        document.getElementsByClassName("invalid-input").item(0).style.display = "block";
        document.getElementsByClassName("invalid-input").item(0).innerHTML = "A valid name is required";
        document.getElementsByClassName("invalid-input").item(0).style.color= "red";
    }


// EMAIL VALIDATION
    emailValidation();
}

// FUNCTION TO VALIDATE EMAIL ADDRESS
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function emailValidation() {
    const email = document.getElementById("email").value;

    if (!(validateEmail(email))) {
        document.getElementsByClassName("invalid-input").item(1).style.display = "block";
        document.getElementsByClassName("invalid-input").item(1).innerHTML = "Email is not valid";
        document.getElementsByClassName("invalid-input").item(1).style.color= "red";
        document.form.Email.focus();
    }else{
        document.getElementsByClassName("invalid-input").item(1).style.display = "none";
    }
}





