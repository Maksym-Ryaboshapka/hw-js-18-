export function getMovies() {
  return fetch("http://176.126.63.52:3000/movies").then((res) => res.json());
}
