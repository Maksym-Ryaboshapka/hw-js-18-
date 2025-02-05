export function deleteMovie(id) {
  return fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
