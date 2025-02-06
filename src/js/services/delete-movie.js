export async function deleteMovie(id) {
  return await fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
