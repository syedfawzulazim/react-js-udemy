import React, { useState, useCallback } from 'react'
import { useEffect } from 'react';
import AddMovie from './components/AddMovie';
import MovieList from "./components/Movielist";


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true)
    setError(false)

    try {
      const response = await fetch('https://movies-98f87-default-rtdb.firebaseio.com/movies.json')
      if (!response.ok) {
        throw new Error('A response Error')
      }
      const data = await response.json()

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      setMovies(loadedMovies)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie) {
    const response = await fetch('https://movies-98f87-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }

  let content = <p>Found no Movies</p>

  if (error) {
    content = <p>{error}</p>;
  }
  if (loading) {
    content = <p>Loading...</p>
  }
  if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }

  return (
    <div className="App">
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;
