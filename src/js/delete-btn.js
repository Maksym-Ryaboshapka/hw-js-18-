import { deleteMovie } from "./services/delete-movie";

async function deletingMovie(e) {
  if (e.target.classList.contains("delete-movie")) {
    const id = e.target.closest(".movies__item").id;

    await deleteMovie(id);
    
    location.reload();
  }
}

document.addEventListener("click", deletingMovie);
