var elFilmList = document.querySelector('.films__list');
var elFilmTemplate = document.querySelector('#film__template').content;
var elGenreTemplate = document.querySelector('#genre__template').content;

var renderGenres = (array, element)=>{
    element.innerHTML = null;
    
    array.forEach(genre=>{
        var genreTemplate = elGenreTemplate.cloneNode(true);
        genreTemplate.querySelector('.film__genre').textContent = genre;
        element.appendChild(genreTemplate)
    })
}


function normalizeDate(dateFormat){
    var  date = new Date (dateFormat);
    var day = String(date.getDate()).padStart(2,0);
    var month = String(date.getMonth() +1).padStart(2,0);   
    var year = String(date.getFullYear()).padStart(2,0);
    
    return(day + '.' + month + '.' + year);
}

var renderFilms = (array, element)=>{
    element.innerHTML = null;
    array.forEach((film)=>{
        var filmTemplate = elFilmTemplate.cloneNode(true);
        filmTemplate.querySelector('.film__heading').textContent = film.title
        filmTemplate.querySelector('.film__image').src = film.poster;
        filmTemplate.querySelector('.film__overview').textContent = film.overview;
        filmTemplate.querySelector('.film__time').textContent = normalizeDate(film.release_date)
        
        var elGenres = filmTemplate.querySelector('.film__genres');
        renderGenres(film.genres, elGenres)
        element.appendChild(filmTemplate)
    })
}

renderFilms(films, elFilmList)

