export function deleteMovie(id) {
  return fetch(`http://176.126.63.52:3000/movies/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
