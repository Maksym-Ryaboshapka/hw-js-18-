export function getMovies() {
  return fetch("http://localhost:3000/movies").then((res) => res.json());
}
