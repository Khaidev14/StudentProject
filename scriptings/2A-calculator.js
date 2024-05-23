let display = document.getElementById('display');
console.log('hello world')

function appendToDisplay(selectedInput){
  display.value = display.value + selectedInput;
}

function allClear(){
  display.value = "";
}

function oneDelete(){
  display.value = display.value.slice(0, -1 );
}

function calculateEval(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = `error`;
  }
}