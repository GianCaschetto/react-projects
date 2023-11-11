import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import { useDebounce } from "use-debounce";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [debouncedSearch] = useDebounce(search, 500);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    setSearch(newSearch);
    if (newSearch === "") {
      setError("Please enter a movie name");
      return;
    }
    if (newSearch.length < 3) {
      setError("Please enter at least 3 characters");
      return;
    }
    setError(null);
  };

  return { debouncedSearch, error, handleChange };
}

function App() {
  const { debouncedSearch: search, error, handleChange } = useSearch();
  const { movies, searchMovie } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovie();
  };

  // useEffect(() => {
  //   searchMovie();
  // }, [searchMovie]);

  return (
    <>
      <header>
        <h1>Search movies</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            name="movieName"
            type="text"
          />
          <button type="submit">Search movie 🔎</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
