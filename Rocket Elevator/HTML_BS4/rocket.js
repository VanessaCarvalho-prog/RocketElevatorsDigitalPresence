



function myFunction() {
    var x = document.getElementById("options").value;
    if (x == 1){
        document.getElementById("form-residential").style.display = "";
        document.getElementById("form-commercial").style.display = "none";
        document.getElementById("form-corporate").style.display = "none";
        document.getElementById("form-hybrid").style.display = "none";
    }else if (x == 2){
        document.getElementById("form-residential").style.display = "none";
        document.getElementById("form-commercial").style.display = "";
        document.getElementById("form-corporate").style.display = "none";
        document.getElementById("form-hybrid").style.display = "none";
    }else if (x == 3){
    document.getElementById("form-residential").style.display = "none";
    document.getElementById("form-commercial").style.display = "none";
    document.getElementById("form-corporate").style.display = "";
    document.getElementById("form-hybrid").style.display = "none";
    }else {
        document.getElementById("form-residential").style.display = "none";
        document.getElementById("form-commercial").style.display = "none";
        document.getElementById("form-corporate").style.display = "none";
        document.getElementById("form-hybrid").style.display = "";
    }

}
