const submitBtn = document.getElementById("submitBtn");
const celciusToFahrenheit = document.getElementById("celciusToFahrenheit");
const fahrenheitToCelcius = document.getElementById("fahrenheitToCelcius");
const displayResult = document.getElementById("displayResult");


submitBtn.onclick = function(){
  const inputBox = document.getElementById('inputBox');
  
  if(inputBox.value == ""){
    displayResult.textContent = `Please enter a valid temperature!`
  }
  else{
    if(celciusToFahrenheit.checked){
      let temperature = inputBox.value;
      temperature = Number(temperature);
      temperature = temperature * (9/5) + 32;
      displayResult.textContent = `${temperature.toFixed(2)}°F`;
      console.log(temperature);
    }
    else if(fahrenheitToCelcius.checked){
      let temperature = inputBox.value;
      temperature = Number(temperature);
      temperature = (temperature - 32) * 5/9;
      displayResult.textContent = `${temperature.toFixed(2)}°C`;
      console.log(temperature);
    }
    else{
      displayResult.textContent = `Please select a conversion method!`;
    }
  }
}