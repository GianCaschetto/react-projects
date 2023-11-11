import { useRef, useState } from "react";

export default function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const prevSearch = useRef(search);
  const searchMovie = () => {
    if (search) {
      if (prevSearch.current === search) return;
      prevSearch.current = search;
      //   console.log("searchMovie", search);
      fetch(`https://www.omdbapi.com/?apikey=e41d72dc&s=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            setResponseMovies(data.Search);
          } else {
            setResponseMovies([]);
          }
        });
    }
  };
  return { movies: responseMovies, searchMovie };
}
