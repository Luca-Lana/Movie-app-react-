import { useEffect, useState } from "react"

function MovieDetailPage(props) {

    const [movieDetail, setMovieDetail] = useState({})

    useEffect(() => {

        const imdbId = props.match.params.imdbId

        fetchMoviesDetailsById(imdbId)

    }, [])

    const fetchMoviesDetailsById = (imdbId) => {
        
        const movieDetailsURL = `https://www.omdbapi.com/?i=${imdbId}&apikey=5ff6e364`
        
        fetch(movieDetailsURL)
        .then(res => res.json())
        .then( result => {
            setMovieDetail(result)
        })
    }

    return (
        <div>
            <img src = {movieDetail.Poster}></img>
            <h5>{movieDetail.Title}</h5>
            <p>{movieDetail.Plot}</p>
            <p>Relesead: {movieDetail.Released}</p>
            <p>Director: {movieDetail.Director}</p>
            <p>Writer: {movieDetail.Writer}</p>
            <p>Actors: {movieDetail.Actors}</p>
            <p>Awards: {movieDetail.Awards}</p>
        </div>
    )
}

export default MovieDetailPage