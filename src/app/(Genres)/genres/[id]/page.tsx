import React from 'react';
import getMovies from "@/services/api.movies";
import {IMovie} from "../../../../../types";
import MovieDetails from "@/app/(Movies)/movies/MoviesDetails/MovieDetails";


type Params = {id: string, title: string, description: string}
const MoviesPage = async ({params}: {params: Params}) => {
    const allMovies = await getMovies.getMovieByGenre(params.id);

    return (

        <div >
            <ul className="movie-grid">
                {Array.isArray(allMovies) && allMovies.length > 0
                    ? allMovies.map((movie: IMovie) => (
                        <li key={movie.id} className="movie-item">
                            <MovieDetails movie={movie}/>
                        </li>
                    ))
                    : <p>No movies available</p>
                }
            </ul>

        </div>
    );
};

export default MoviesPage;