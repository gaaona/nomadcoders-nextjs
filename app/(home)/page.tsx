export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 5초 동안 멈춤(백엔드 단에서)
  const response = await fetch(URL); // 첫 fetch만 진짜 api를 가져오고 나머지는 JS가 기억하고 있다가 캐싱 데이터를 가져오는거
  const json = await response.json();
  return json;
  /* 위와 동일
  fetch(URL).then((response) => response.json()); */
}

export default async function Page() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
