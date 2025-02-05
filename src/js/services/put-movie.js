import Movie from "../movie";

export function putMovie(id, title, genre, director, year) {
  return fetch(`http://176.126.63.52:3000/movies/${id}`, {
    method: "PATCH",
    body: JSON.stringify(new Movie(title, genre, director, year)),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  }).then((res) => res.json());
}
