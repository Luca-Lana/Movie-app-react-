import { useState } from "react"
import { NavLink } from 'react-router-dom'

function MovieListPage () {

    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const fetchMovies = (movieName) => {

        const searchURL = `http://www.omdbapi.com/?s=${movieName}&page=2&apikey=5ff6e364`

        fetch(searchURL)
        .then( res => res.json())
        .then( result => {
            setMovies(result.Search)
        })

    }

    const movieItems = movies.map( movie => {
        return (
            <div key = {movie.imdbID}>
                <h3>{ movie.Title }</h3>
                <img src = { movie.Poster } />
                <NavLink to = {`/${movie.imdbID}`}> 
                    <button>Details</button> 
                </NavLink>
            </div> 
        )
    })

    return (
        <div>
            <h1> Movie List Page</h1>
            <label>Pesquisar: </label>
            <input type = "text" onChange = { handleSearchTermChange } />
            <button onClick = { () => fetchMovies(searchTerm) } >Pesquisar</button>

            {movieItems}
        </div>
    )

}

export default MovieListPage