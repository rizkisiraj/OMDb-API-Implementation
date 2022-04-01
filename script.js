var arrowPrev = document.querySelectorAll('.swiper-button-prev');
var arrowNext = document.querySelectorAll('.swiper-button-next');
const form1 = document.querySelector('form');


let tmdbid = "tt" + 3896198;

form1.addEventListener("submit", function(e) {
  const input = document.querySelector("input");
  const main = document.querySelector("main");
  e.preventDefault();
  console.log(input.value);



  $.ajax({
    url: `http://www.omdbapi.com/?apikey=7106c092&s=${input.value}`,
    success: m => {
      const movies = m.Search;
      let moviesArr = `<div class="container-fluid"><div class="row justify-content-center" style="width=100%;">`;
      movies.forEach(movie => {
        moviesArr += `<div class="col-md-3 col-sm-4 col-xs-6 mt-5 text-center slides justify-content-center" style="max-width=auto; max-height: 20rem"><img class="d-block img-slide movie-img" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${movie.imdbID}" style="width: auto; height: 100%" src="${movie.Poster}" alt=""></div>`
      });

        moviesArr += `</div></div>`
      main.innerHTML = moviesArr;

      $(".movie-img").on("click", function() {
        console.log($(this).data('imdbid'));
  
        $.ajax({
          url: `http://www.omdbapi.com/?apikey=7106c092&i=${$(this).data('imdbid')}`,
          success: m => {
            const { Title, Year, Director, Actors, Plot, Poster } = m;
            $(".modal-body").html(`<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${Poster}" class="img-fluid" alt="">
              </div>
              <div class="col-md-9">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${Title} (${Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong> ${Director}</li>
                  <li class="list-group-item"><strong>Actor : </strong> ${Actors}</li>
                  <li class="list-group-item"><strong>Plot : </strong> ${Plot}</li>
                </ul>
              </div>
            </div>
          </div>`)
          }
        })
      })


    },
    error: e => {
      console.log(e.responseData);
    } 
  })
});


$.ajax({
  url: 'http://www.omdbapi.com/?apikey=7106c092&s=avengers',
  success: m => {
    const movies = m.Search;
    let moviesArr = "";
    movies.forEach(movie => {
      moviesArr += `<div class="swiper-slide"><img class="movie-img" src="${movie.Poster}" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdb="${movie.imdbID}" alt=""></div>`
    });
    $(".popular-movies").html(moviesArr);

    $(".movie-img").on("click", function() {
      console.log($(this).data('imdb'));

      $.ajax({
        url: `http://www.omdbapi.com/?apikey=7106c092&i=${$(this).data('imdb')}`,
        success: m => {
          const { Title, Year, Director, Actors, Plot, Poster } = m;
          $(".modal-body").html(`<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${Poster}" class="img-fluid" alt="">
            </div>
            <div class="col-md-9">
              <ul class="list-group">
                <li class="list-group-item"><h4>${Title} (${Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${Director}</li>
                <li class="list-group-item"><strong>Actor : </strong> ${Actors}</li>
                <li class="list-group-item"><strong>Plot : </strong> ${Plot}</li>
              </ul>
            </div>
          </div>
        </div>`)
        }
      })
    })
  },
  error: e => {
    console.log(e.responseData);
  } 
})

$.ajax({
  url: 'http://www.omdbapi.com/?apikey=7106c092&s=harry potter',
  success: m => {
    const movies = m.Search;
    let moviesArr = "";
    movies.forEach(movie => {
      moviesArr += `<div class="swiper-slide"><img class="movie-img" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdb="${movie.imdbID}" src="${movie.Poster}" alt=""></div>`
    });
    $(".harry-movies").html(moviesArr);

    $(".movie-img").on("click", function() {
      

      $.ajax({
        url: `http://www.omdbapi.com/?apikey=7106c092&i=${$(this).data('imdb')}`,
        success: m => {
          const { Title, Year, Director, Actors, Plot, Poster } = m;
          $(".modal-body").html(`<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${Poster}" class="img-fluid" alt="">
            </div>
            <div class="col-md-9">
              <ul class="list-group">
                <li class="list-group-item"><h4>${Title} (${Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${Director}</li>
                <li class="list-group-item"><strong>Actor : </strong> ${Actors}</li>
                <li class="list-group-item"><strong>Plot : </strong> ${Plot}</li>
              </ul>
            </div>
          </div>
        </div>`)
        }
      })
    })
  },
  error: e => {
    console.log(e.responseData);
  } 
})

$.ajax({
  url: 'http://www.omdbapi.com/?apikey=7106c092&s=star wars',
  success: m => {
    const movies = m.Search;
    let moviesArr = "";
    movies.forEach(movie => {
      moviesArr += `<div class="swiper-slide" ><img class="movie-img" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdb="${movie.imdbID}" src="${movie.Poster}" alt=""></div>`
    });
    $(".star-movies").html(moviesArr);

    $(".movie-img").on("click", function() {
      

      $.ajax({
        url: `http://www.omdbapi.com/?apikey=7106c092&i=${$(this).data('imdb')}`,
        success: m => {
          const { Title, Year, Director, Actors, Plot, Poster } = m;
          $(".modal-body").html(`<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${Poster}" class="img-fluid" alt="">
            </div>
            <div class="col-md-9">
              <ul class="list-group">
                <li class="list-group-item"><h4>${Title} (${Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${Director}</li>
                <li class="list-group-item"><strong>Actor : </strong> ${Actors}</li>
                <li class="list-group-item"><strong>Plot : </strong> ${Plot}</li>
              </ul>
            </div>
          </div>
        </div>`)
        }
      })
    })

  },
  error: e => {
    console.log(e.responseData);
  } 
})

$.ajax({
  url: `http://www.omdbapi.com/?apikey=7106c092&i=${tmdbid}`,
  success: m => {

    let carouselMovie = `<div class="col-5 carousel-body ">
    <h2 class="carousel-title">${m.Title}</h2>
    <button type="button" class="btn btn-secondary my-3 " >Details</button>
    <p>${m.Plot}</p>
  </div>
  <div class="col-5 text-center">
    <img src="${m.Poster}" class="img-fluid" alt="">
  </div>`
    
   
    $(".carousel").html(carouselMovie);
  },
  error: e => {
    console.log(e.responseData);
  } 
})








function myFunction(x) {
  if (x.matches) { // If media query matches
    arrowPrev.forEach(arrow => {
      arrow.style.display = "none";
    });

    arrowNext.forEach(arrow => {
      arrow.style.display = "none";
    });
    
  } 
  else {
    arrowPrev.forEach(arrow => {
      arrow.style.display = "block";
    });

    arrowNext.forEach(arrow => {
      arrow.style.display = "block";
    });
  }

}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  breakpoints: {
    100: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 30,
      // loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    },
  }
});

