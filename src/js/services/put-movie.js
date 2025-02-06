import Movie from "../movie";

export async function putMovie(id, title, genre, director, year) {
  return await fetch(`http://localhost:3000/movies/${id}`, {
    method: "PATCH",
    body: JSON.stringify(new Movie(title, genre, director, year)),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  }).then((res) => res.json());
}
