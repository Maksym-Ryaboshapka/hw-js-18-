function e(){return fetch("http://176.126.63.52:3000/movies").then(e=>e.json())}class t{constructor(e,t,n,o){this.title=e,this.genre=t,this.director=n,this.year=o}}class n{constructor(e){this.modal=e}toggle(){this.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}}const o=new n(document.querySelector(".add-modal"));document.querySelector("#add-movie").addEventListener("click",()=>o.toggle()),document.addEventListener("keydown",e=>{o.modal.classList.contains("is-hidden")||"Escape"!==e.code||o.toggle()});const i=new class{constructor(){this.list=document.querySelector(".movies")}createMarkup(e){let t=document.createElement("li");t.classList.add("movies__item"),t.id=e.id;let n=document.createElement("h2");n.classList.add("movies__title"),n.textContent=e.title;let o=document.createElement("p");o.classList.add("movies__genre"),o.textContent=e.genre;let i=document.createElement("p");i.classList.add("movies__director"),i.textContent=e.director;let d=document.createElement("p");d.classList.add("movies__year"),d.textContent=e.year;let s=document.createElement("button");s.textContent="Edit",s.classList.add("edit-movie"),s.id=e.id;let r=document.createElement("button");r.textContent="Delete",r.classList.add("delete-movie"),r.id=e.id,this.list.append(t),t.append(n,o,i,d,s,r)}renderMovies(){e().then(e=>{e.forEach(e=>{this.createMarkup(e)})})}renderAddedMovie(e,n,i,d){fetch("http://176.126.63.52:3000/movies",{method:"POST",body:JSON.stringify(new t(e,n,i,d)),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{o.toggle(),this.createMarkup(e)})}};function d(e,n,o,i,d){return fetch(`http://176.126.63.52:3000/movies/${e}`,{method:"PATCH",body:JSON.stringify(new t(n,o,i,d)),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())}i.renderMovies(),document.querySelector(".add-form").addEventListener("submit",e=>{e.preventDefault();let t=e.target.children;i.renderAddedMovie(t.title.value,t.genre.value,t.director.value,t.year.value)});const s=new n(document.querySelector(".edit-modal"));document.addEventListener("click",function(t){if(t.target.classList.contains("edit-movie")){s.toggle();let n=t.target.closest(".movies__item").id;document.querySelector(".edit-form").addEventListener("submit",t=>{t.preventDefault();let o=t.target.children,i=o.title.value,s=o.genre.value,r=o.director.value,c=o.year.value;i&&s&&r&&c?d(n,i,s,r,c).then(e=>{location.reload()}):e().then(e=>{let t;e.forEach(e=>{if(e.id===n){t=e;let o={title:i||t.title,genre:s||t.genre,director:r||t.director,year:c||t.year};d(n,o.title,o.genre,o.director,o.year).then(()=>{location.reload()})}})})})}}),document.addEventListener("keydown",e=>{s.modal.classList.contains("is-hidden")||"Escape"!==e.code||s.toggle()}),document.addEventListener("click",function(e){if(e.target.classList.contains("delete-movie")){var t;(t=e.target.closest(".movies__item").id,fetch(`http://176.126.63.52:3000/movies/${t}`,{method:"DELETE"}).then(e=>e.json())).then(e=>location.reload())}});
//# sourceMappingURL=index.d1ee910e.js.map
