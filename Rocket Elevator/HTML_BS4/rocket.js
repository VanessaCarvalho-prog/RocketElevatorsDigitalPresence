



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

    var selectType = document.getElementById("options").value;
    if (selectType == 1){
        
    var resApp = document.getElementById("calc-residential-app").value;
    var resFloor = document.getElementById("calc-residential-floor").value;

    var doorPerFloor = parseInt(resApp)/parseInt(resFloor);
    
    var cage = calculateCage(doorPerFloor);
    

    var totalColumns = calculateColumns(resFloor);
    
    
    var numElevators = parseInt(totalColumns) * parseInt(cage);
  
    finaleCalculate(numElevators, unitPrice, percent)


       
    }else if (selectType == 2){
        var elevators = document.getElementById("calc-com-el").value;

        finaleCalculate(elevators, unitPrice, percent)
        
       
    
    }else if (selectType == 3) {
          
      var numOccFloor = document.getElementById("calc-corporate-occ").value;
      var numFloor = document.getElementById("calc-corporate-floors").value;
      var numBasements = document.getElementById("calc-corporate-bas").value;
      var numOccupTotal = (parseInt(numFloor)+ parseInt(numBasements))*parseInt(numOccFloor);

      var numOfElevators = parseInt(parseInt(numOccupTotal) /1000);

      var numColum = Math.ceil((parseInt(numFloor)+ parseInt(numBasements)) / 20); 

      var numElevColum = Math.ceil(parseInt(numOfElevators) / parseInt(numColum));

      var numTotalElevators = parseInt(numElevColum) * parseInt(numColum);

      document.getElementById("calc-amount-elevators").value = numTotalElevators;

      finaleCalculate(numTotalElevators, unitPrice, percent);
        

     }else {
      var numOccFloor = document.getElementById("calc-hybrid-max").value;
      var numFloor = document.getElementById("calc-hybrid-floors").value;
      var numBasements = document.getElementById("calc-hybrid-bas").value;
      var numOccupTotal = (parseInt(numFloor)+ parseInt(numBasements))*parseInt(numOccFloor);

      var numOfElevators = parseInt(parseInt(numOccupTotal) /1000);

      var numColum = Math.ceil((parseInt(numFloor)+ parseInt(numBasements)) / 20); 

      var numElevColum = Math.ceil(parseInt(numOfElevators) / parseInt(numColum));

      var numTotalElevators = parseInt(numElevColum) * parseInt(numColum);

      document.getElementById("calc-amount-elevators").value = numTotalElevators;
      finaleCalculate(numTotalElevators, unitPrice, percent);
      



     }



    
}

    function calculateCage(doorPerFloor){
      if (doorPerFloor < 12){
          return 1;
      }else {
         return Math.ceil(doorPerFloor / 6);
      }
    }


    function calculateColumns(numberFloors){
      var numberFloors = parseInt(numberFloors)
      if (numberFloors < 40){
          return 1;
      }else {
         return Math.ceil(numberFloors / 20);
         
      }
    }

    function finaleCalculate(numTotalElevators, unitPrice, percent) {
      var totalPrice = parseInt(unitPrice)*parseInt(numTotalElevators);   
      var fees = totalPrice * percent;
      var finalPrice = totalPrice + fees;
  
  
      document.getElementById("calc-amount-elevators").value = numTotalElevators;
      document.getElementById("calc-unit-price").value = transformers(unitPrice);
      document.getElementById("calc-total-price").value = transformers(totalPrice);
      document.getElementById("calc-installation-fees").value = transformers(fees);
      document.getElementById("calc-final-price").value = transformers(finalPrice);
    }
    

    function transformers(number) {
      var numberString = number.toString()
      var numberCents = numberString.slice(-2)
      var numberDolar = numberString.slice(0, numberString.length-2)
      return  + numberDolar + "," + numberCents + " $";
    }


      




