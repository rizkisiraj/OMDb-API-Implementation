// const movieCard = document.getElementById("movie-container");
const form = document.querySelector("form");

form.addEventListener("submit", e => {
    const input = document.querySelector("input");
    e.preventDefault();
    ajaxRequest(input.value);
})

window.addEventListener("DOMContentLoaded", () => ajaxRequest("avengers"));

const ajaxRequest = (title) => {
    $.ajax({
        url: `http://www.omdbapi.com/?i=tt3896198&apikey=7106c092&s=${title}`,
        success: results => {
            const movies = results.Search;
            let movieCardArr = movies.map(m => {
                return `<div class="col-md-4 my-5">
                <div class="card" style= "max-width: 80%;">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-details-button" data-bs-toggle="modal" data-bs-target="#MovieModal" data-imdb="${m.imdbID}">Details</a>
                    </div>
                  </div>
            </div>`;
            });
    
           $('#movie-container').html(movieCardArr.join(""));
           $('.modal-details-button').click(function() {
               $.ajax({
                    url: 'http://www.omdbapi.com/?i=' + $(this).data('imdb') + '&apikey=7106c092',
                    success: m => {
                        // console.log("True");
                        $('.modal-body').html(`  <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-3">
                            <img src="${m.Poster}" alt="" class="img-fluid">
                          </div>
                          <div class="col md">
                            <ul class="list-group">
                              <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                              <li class="list-group-item"><strong>Director : </strong> ${m.Director} </li>
                              <li class="list-group-item"><strong>Actors : </strong> ${m.Actors} </li>
                              <li class="list-group-item"><strong>Writer : </strong> ${m.Writer} </li>
                              <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot} </li>
                            </ul>
                          </div>
                        </div>
                      </di`)
                    }
               })
           })
            
        }
    
    
    });
}

// $.ajax({
//     url: `http://www.omdbapi.com/?i=tt3896198&apikey=7106c092&s=avengers`,
//     success: results => {
//         const movies = results.Search;
//         let movieCardArr = movies.map(m => {
//             return `<div class="col-md-4 my-5">
//             <div class="card">
//                 <img src="${m.Poster}" class="card-img-top" alt="">
//                 <div class="card-body">
//                   <h5 class="card-title">${m.Title}</h5>
//                   <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
//                   <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//               </div>
//         </div>`;
//         });

//        $('#movie-container').html(movieCardArr.join(""));
        
//     }


// });