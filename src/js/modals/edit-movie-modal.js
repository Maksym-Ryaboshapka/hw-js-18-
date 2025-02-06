import Modal from "./modal.js";
import { putMovie } from "../services/put-movie.js";
import { getMovies } from "../services/get-movies.js";

const modalEl = document.querySelector(".edit-modal");
export const editMovieModal = new Modal(modalEl);

function editingMovie(e) {
  if (e.target.classList.contains("edit-movie")) {
    editMovieModal.toggle();

    const id = e.target.closest(".movies__item").id;

    const editForm = document.querySelector(".edit-form");

    editForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const target = e.target.children;

      const title = target.title.value;
      const genre = target.genre.value;
      const director = target.director.value;
      const year = target.year.value;

      if (title && genre && director && year) {
        await putMovie(id, title, genre, director, year);

        location.reload();
      } else {
        const moviesFromDB = await getMovies();
        let currMovie;

        moviesFromDB.forEach(async (el) => {
          if (el.id === id) {
            currMovie = el;

            const updatedMovie = {
              title: title || currMovie.title,
              genre: genre || currMovie.genre,
              director: director || currMovie.director,
              year: year || currMovie.year,
            };

            await putMovie(
              id,
              updatedMovie.title,
              updatedMovie.genre,
              updatedMovie.director,
              updatedMovie.year
            );

            location.reload();
          }
        });
      }
    });
  }
}

document.addEventListener("click", editingMovie);

document.addEventListener("keydown", (e) => {
  if (
    !editMovieModal.modal.classList.contains("is-hidden") &&
    e.code === "Escape"
  ) {
    editMovieModal.toggle();
  }
});
