const redCar = document.getElementById('myRedCar');
const theButton =  document.getElementById('myButton');

theButton.addEventListener("click", ()=>{
  if(redCar.style.visibility === "hidden"){
    redCar.style.visibility = "visible";
    theButton.textContent = "hide";
  }
  else{
    redCar.style.visibility = "hidden";
    theButton.textContent = "show";
  }
})