export async function getMovies() {
  return await fetch("http://localhost:3000/movies").then((res) => res.json());
}
