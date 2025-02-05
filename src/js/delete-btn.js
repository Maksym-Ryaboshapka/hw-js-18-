import { deleteMovie } from "./services/delete-movie";

function deletingMovie(e) {
  if (e.target.classList.contains("delete-movie")) {
    const id = e.target.closest(".movies__item").id;

    deleteMovie(id).then((data) => location.reload());
  }
}

document.addEventListener("click", deletingMovie);
