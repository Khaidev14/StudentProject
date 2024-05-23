let movieNameRef = document.getElementById('movie-name');
const searchBtn = document.querySelector('.search-btn');
let result = document.getElementById('result')

searchBtn.addEventListener("click", () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if(movieName.length <=0){
    result.innerHTML = `<h3 class="empty-msg">Please Enter a Movie Name.</h3>`
  }
  else{
    //fetch the url
    fetch(url).then(response => response.json()).then(data => {
      if(data.Response == "True"){
        console.log(data)
        console.log("Movie is in the database.");
        result.innerHTML = `<div class="information-container">    
                              <div class="poster">
                                <img src="${data.Poster}" class="poster-img">
                              </div>
                              <div class="text">
                                <p class="title">${data.Title}</p>
                                <p class="plot"><span>Plot: </span>${data.Plot}</p>
                                <p class="cast"><span>Cast: </span>${data.Actors}</p>
                                <p class="rating-txt">Rating</p>
                                <div class="rating-div">
                                  <img src="stylings/pictures/yellow.png">
                                  <p class="rating-number">${data.imdbRating}</p>
                                </div>
                                <div class="time-division">
                                  <div class="rate">${data.Rated}</div>
                                  <div class="year">${data.Year}</div>
                                  <div class="runtime">${data.Runtime}</div>
                                </div>
                                <div class="genre-division">
                                  <div>${data.Genre.split(",").join("</div><div>")}
                                </div>
                              </div>
                            </div>`
      }
      else{
        console.log('result is not in the database');
        result.innerHTML = `<p class="title">Result is not in the Database.</p>`
      }
    })
  }
})



