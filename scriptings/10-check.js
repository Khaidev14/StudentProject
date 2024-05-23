const subCheckbox = document.getElementById('subCheckbox');
const gcashBtn = document.getElementById('gcashBtn');
const mayaBtn = document.getElementById('mayaBtn');
const paypalBtn = document.getElementById('paypalBtn');
const subsDisplay = document.getElementById('subsDisplay');
const paymentDisplay = document.getElementById("paymentDisplay");
const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function(){
  //1st part
  if(subCheckbox.checked){
    subsDisplay.textContent = `You are subscribed!`
    subsDisplay.classList.remove('subscribe');
    subsDisplay.classList.add('visible');
    console.log(subsDisplay.classList);
  }
  else{
    subsDisplay.textContent = `You are NOT subscribed!`
    subsDisplay.classList.remove('subscribe');
    subsDisplay.classList.add('visible');
  }
  //2nd part
  if(gcashBtn.checked){
    paymentDisplay.textContent = `Your payment method is Gcash.`
    paymentDisplay.classList.remove('payment');
    paymentDisplay.classList.add('visible');
  }
  else if(mayaBtn.checked){
    paymentDisplay.textContent = `Your payment method is Maya.`
    paymentDisplay.classList.remove('payment');
    paymentDisplay.classList.add('visible');
  }
  else if(paypalBtn.checked){
    paymentDisplay.textContent = `Your payment method is Paypal.`
    paymentDisplay.classList.remove('payment');
    paymentDisplay.classList.add('visible');
  }
  else{
    paymentDisplay.textContent = `Please select your payment method.`
    paymentDisplay.classList.remove('payment');
    paymentDisplay.classList.add('visible');
  }
}