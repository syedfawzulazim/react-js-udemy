import Movie from "./Movie"

const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    )
}
export default MovieList