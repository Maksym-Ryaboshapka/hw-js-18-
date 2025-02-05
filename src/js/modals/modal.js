export default class Modal {
  constructor(modal) {
    this.modal = modal;
  }

  toggle() {
    this.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
}