



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
// Commercial
function calculate() {
    var plan = document.querySelector('input[name="radioPlan"]:checked').value;
    var unitPrice;
    var percent;
    if (plan == "1") {
       unitPrice = 756500;
       percent = 0.1
    }else if (plan == "2") {
        unitPrice = 1234500;
        percent = 0.13;
    }else{
        unitPrice = 1540000;
        percent = 0.16;
    }

    var elevators = document.getElementById("calc-com-el").value;
    var totalPrice = parseInt(unitPrice)*parseInt(elevators);   
    var fees = totalPrice * percent;
    var finalPrice = totalPrice + fees;


    document.getElementById("calc-amount-elevators").value = elevators;
    document.getElementById("calc-unit-price").value = unitPrice;
    document.getElementById("calc-total-price").value = totalPrice;
    document.getElementById("calc-installation-fees").value = fees;
    document.getElementById("calc-final-price").value = finalPrice;
}