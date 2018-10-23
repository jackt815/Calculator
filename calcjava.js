var num1;
var num2;
var operationSelected;
function selectOperation(op) {
  var buttons = document.getElementsByClassName("operation");
  for (var i=0; i< buttons.length; i++){
      buttons[i].style.backgroundColor="rgba(255,0,0,0.2)"
  }

  op.style.backgroundColor="red";
  operationSelected=op.getAttribute('id');
}

  function calculate(){
    num1 = document.getElementById("firstNum").value; /*You can use the .value property to get text entered in a form */
    num2 = document.getElementById("secondNum").value;
    var result = 0;

  if (operationSelected == "addition") {
    result = Number(num1) + Number(num2);
  }
  else if (operationSelected=="multiplication") {
    result = Number(num1) * Number (num2);
  }
  else if (operationSelected=="division") {
    result=Number(num1) / Number(num2);
  }
  else if (operationSelected=="squared") {
    result=Number(num1) * Number(num1);
  }
  else if (operationSelected=="subtraction") {
    result=Number(num1) - Number(num2);
  }
  else if (operationSelected=="cubed") {
    result=Number(num1) * Number(num1) * Number(num1);
  }
  else if (operationSelected=="exponent") {
    result=+Math.pow(Number(num1), Number(num2))
  }
  else if (operationSelected=="sqrt") {
    result=+Math.sqrt(Number(num1), Number(num2))
  }
  else if (operationSelected=="sin") {
    result=+Math.sin(Number(num1))
  }
  else if (operationSelected=="cos") {
    result=+Math.cos(Number(num1))
  }
  else if (operationSelected=="arcsin") {
    result=+Math.asin(Number(num1))
  }
  else if (operationSelected=="arccos") {
    result=+Math.acos(Number(num1))
  }
  else if (operationSelected=="log") {
    result=+Math.log(Number(num1))
  }
  else if (operationSelected=="cuberoot") {
    result=+Math.cbrt(Number(num1))
  }
  else if (operationSelected=="tan") {
    result=+Math.tan(Number(num1))
  }
  else if (operationSelected=="arctan") {
    result=+Math.atan(Number(num1))
  }
  document.getElementById('Result').innerHTML=result;
}
