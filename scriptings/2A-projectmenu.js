const panels = document.querySelectorAll(".panel");
const titles = document.querySelectorAll(".panel-title");
const icons = document.querySelectorAll(".fa-solid");

panels.forEach(panel => {
  panel.addEventListener("click", ()=>{
    removeActive();
    panel.classList.add("active");
    panel.classList.remove('inactive');
    
    panels.forEach(panel => {
      // console.log(panel.classList.value);
      if(panel.classList.value == "panel"){
        panel.classList.add("inactive");
      }
    })
  })
})
function removeActive(){
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}
// panels.forEach(panel => {
//   panel.addEventListener("click", () => {
//     removeActive();
//     // removeContent();
//     panel.classList.remove("inactive");
//     panel.classList.add("active");
//   })
// });

// function removeActive(){
//   panels.forEach(panel => {
//     panel.classList.remove("active");
//   })
// }

// function removeContent(){
//   titles.forEach(title => {
//     title.style.display = "none";
//   })
//   icons.forEach(icon => {
//     icon.style.display = "none"
//   })
// }

// function addContent(){
//   titles.forEach(title => {
//     title.style.display = "none";
//   })
//   icons.forEach(icon => {
//     icon.style.display = "none"
//   })
// }