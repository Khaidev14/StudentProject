
function startClock(){
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let identify = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  let minutes = currentTime.getMinutes().toString().padStart(2, 0);
  let seconds = currentTime.getSeconds().toString().padStart(2, 0);
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${identify}`;
  
}
startClock();
setInterval(startClock, 1000);