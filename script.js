var arrowPrev = document.querySelectorAll('.swiper-button-prev');
var arrowNext = document.querySelectorAll('.swiper-button-next');
const form = document.querySelector('form');

let tmdbid = "tt" + 3896198;

// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   $.ajax({
//     url: `http://www.omdbapi.com/?apikey=7106c092&s=${inputValue}`,
//     success: m => {
//       const movies = m.Search;
//       let moviesArr = "";
//       movies.forEach(movie => {
//         moviesArr += `<div class="swiper-slide" ><img src="${movie.Poster}" alt=""></div>`
//       });
//       $(".popular-movies").html(moviesArr);
//     },
//     error: e => {
//       console.log(e.responseData);
//     } 
//   })
// });


$.ajax({
  url: 'http://www.omdbapi.com/?apikey=7106c092&s=avengers',
  success: m => {
    const movies = m.Search;
    let moviesArr = "";
    movies.forEach(movie => {
      moviesArr += `<div class="swiper-slide" ><img src="${movie.Poster}" alt=""></div>`
    });
    $(".popular-movies").html(moviesArr);
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
      moviesArr += `<div class="swiper-slide" ><img src="${movie.Poster}" alt=""></div>`
    });
    $(".harry-movies").html(moviesArr);
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
      moviesArr += `<div class="swiper-slide" ><img src="${movie.Poster}" alt=""></div>`
    });
    $(".star-movies").html(moviesArr);
  },
  error: e => {
    console.log(e.responseData);
  } 
})

$.ajax({
  url: `http://www.omdbapi.com/?apikey=7106c092&i=${tmdbid}`,
  success: m => {

    console.log(m);
    let carouselMovie = `<div class="col-5 carousel-body ">
    <h2 class="carousel-title">${m.Title}</h2>
    <button type="button" class="btn btn-secondary my-3">Details</button>
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

