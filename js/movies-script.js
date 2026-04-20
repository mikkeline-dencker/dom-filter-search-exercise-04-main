"use strict";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Science Fiction",
    year: 2010,
    duration: 2.28,
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    duration: 2.32,
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    duration: 2.22,
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    title: "Superbad",
    genre: "Comedy",
    year: 2007,
    duration: 1.53,
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    title: "It",
    genre: "horror",
    year: 2017,
    duration: 2.15,
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "Comedy",
    year: 2009,
    duration: 1.4,
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "horror",
    year: 2013,
    duration: 1.52,
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "Science Fiction",
    year: 2014,
    duration: 2.55,
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "Science Fiction",
    year: 1999,
    duration: 3.02,
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "Drama",
    year: 1994,
    duration: 1.39,
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/",
  },
];

const moviesContainer = document.querySelector("#movies-container");

//Henter HTML-elementer og gemmer i variabler
const selectedCategory = document.querySelector("#category-select");
const searchInput = document.querySelector("#gsearch");
const form = document.querySelector("form");

function filterMovies() {
  //Henter den valgte kategori (periode)
  const selectedValue = selectedCategory.value;
  //Henter søgeteksten og gør den klar til sammenligning (lowercase og trim)
  const searchTerm = searchInput.value.toLowerCase().trim();

  //Jeg starter med alle udstillinger fra listen (array - exhibitions)
  let filteredMovies = movies;

  if (selectedValue != "Alle") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.genre === selectedValue;
    });
  }

  if (searchTerm != "") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    });
  }

  displayMovies(filteredMovies);
}

selectedCategory.addEventListener("change", filterMovies);
searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Forhindrer standard formularindsendelse
  filterMovies();
});

function displayMovies(movieList) {
  moviesContainer.innerHTML += "";

  const html = movieList
    .map((movie) => {
      return `
  <article>
    <h2>${movie.title}</h2>
    <p>Genre: ${movie.genre}</p>
    <p>År: ${movie.year}</p>
    <p>Varighed: ${movie.duration}</p>

    <figure>
    <a href="${movie.url}" target="_blank" rel="noopener noreferrer">
        <img src="${movie.img}" alt="${movie.title}">
    </a>
    <figcaption>${movie.title}</figcaption>
    </figure>
    </article>
    `;
    })
    .join("");
  moviesContainer.innerHTML = html;
}

// Jeg kalder funktionen for at vise filmene
displayMovies(movies);
