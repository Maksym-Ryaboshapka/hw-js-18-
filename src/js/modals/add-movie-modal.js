import Modal from "./modal.js";

const modalEl = document.querySelector(".add-modal");
export const addMovieModal = new Modal(modalEl);

const openBtn = document.querySelector("#add-movie");

openBtn.addEventListener("click", () => addMovieModal.toggle());

document.addEventListener("keydown", (e) => {
  if (
    !addMovieModal.modal.classList.contains("is-hidden") &&
    e.code === "Escape"
  ) {
    addMovieModal.toggle();
  }
});
