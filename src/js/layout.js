import { getMovies } from "./services/get-movies";
import { addMovie } from "./services/add-movie";
import { addMovieModal } from "./modals/add-movie-modal";
import { deleteMovie } from "./services/delete-movie";

class Page {
  constructor() {
    this.list = document.querySelector(".movies");
  }

  createMarkup(movie) {
    const item = document.createElement("li");
    item.classList.add("movies__item");
    item.id = movie.id;

    const title = document.createElement("h2");
    title.classList.add("movies__title");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.classList.add("movies__genre");
    genre.textContent = movie.genre;

    const director = document.createElement("p");
    director.classList.add("movies__director");
    director.textContent = movie.director;

    const year = document.createElement("p");
    year.classList.add("movies__year");
    year.textContent = movie.year;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-movie");
    editBtn.id = movie.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-movie");
    deleteBtn.id = movie.id;

    this.list.append(item);
    item.append(title, genre, director, year, editBtn, deleteBtn);
  }

  renderMovies() {
    getMovies().then((data) => {
      data.forEach((movie) => {
        this.createMarkup(movie);
      });
    });
  }

  renderAddedMovie(title, genre, director, year) {
    addMovie(title, genre, director, year).then((data) => {
      addMovieModal.toggle();
      this.createMarkup(data);
    });
  }
}

export const page = new Page();

page.renderMovies();

const addForm = document.querySelector(".add-form");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const target = e.target.children;

  page.renderAddedMovie(
    target.title.value,
    target.genre.value,
    target.director.value,
    target.year.value
  );
});
