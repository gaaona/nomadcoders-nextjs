"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true); // 기본값이 true
  const [movies, setMovies] = useState([]); // 기본값이 빈 배열
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
