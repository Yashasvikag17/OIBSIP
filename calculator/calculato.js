
function valueButton(e){
  calculatorform.display.value += e.value;
}

function Clear(){
  calculatorform.display.value= null;
}

function Calculate(){
  calculatorform.display.value = eval(calculatorform.display.value);
}
