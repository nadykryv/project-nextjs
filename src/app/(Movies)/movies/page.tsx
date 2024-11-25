import React from 'react';
import getMovies from "@/services/api.movies";
import {IMovie} from "../../../../types";
import MovieDetails from "@/app/(Movies)/movies/MoviesDetails/MovieDetails";

interface MoviesPageProps {
    searchParams: { search?: string }; // Per gestire i parametri di query
}

const MoviesPage = async ({ searchParams }: MoviesPageProps) => {
    const searchQuery = searchParams.search || ''; // Legge il parametro di ricerca
    const movies = searchQuery
        ? await getMovies.searchMovies(searchQuery) // Cerca i film in base al titolo
        : await getMovies.getAllMovies(); // Mostra tutti i film se non c'è ricerca

    return (
        <div>
            <ul className="movie-grid">
                {Array.isArray(movies) && movies.length > 0
                    ? movies.map((movie: IMovie) => (
                        <MovieDetails key={movie.id} movie={movie} />
                    ))
                    : <p>No movies available</p>
                }
            </ul>
        </div>
    );
};

export default MoviesPage;


