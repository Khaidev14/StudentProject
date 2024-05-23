let quotation = document.getElementById('quotation');
let author = document.getElementById('author');
const myButton = document.querySelector('.generate-button');

const urlApi = "https://api.quotable.io/random";

const container = document.querySelector('.container');

async function fetchApi(url){
  const response = await fetch(url);
  const data = await response.json();

  if(data.content.length >= 200){
    console.log(data.content.length);
    changeLong();
  }
  else{
    console.log(data.content.length);
    changeShort();
  }

  quotation.textContent = data.content;
  author.textContent = data.author
}

function changeLong(){
  container.classList.remove('container');
  container.classList.add('container-long');
  console.log(container.classList);
}

function changeShort(){
  container.classList.remove('container-long');
  container.classList.add('container');
  console.log(container.classList);
}
