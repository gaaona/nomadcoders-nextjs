export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
  /* 위와 동일
  fetch(URL).then((response) => response.json()); */
}

export default async function Page() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
