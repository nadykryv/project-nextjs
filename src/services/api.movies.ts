import {IMovie} from "../../types";
import {IActor} from "../../types";


const getMovies = {

    getAllMovies: async (): Promise<IMovie[]> => {
        const movies = await fetch( `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(movies);

        return movies.results;
    },
    getMovieById: async (id: string | number): Promise<IMovie | null> => {
        const movie = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(movie);
        return movie;
    },
    getMovieByGenre: async (id: string | number): Promise<IMovie | null> => {
        const movie = await fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${id}`)
            .then(value => value.json());
        console.log(movie);
        return movie.results;
    },
    searchMovies: async (query: string): Promise<IMovie[]> => {
        if (!query) return [];
        const movies = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(
                query
            )}`
        ).then((value) => value.json());
        console.log(movies);
        return movies.results || [];
    },
    getTrendingActors: async (): Promise<IActor[]> => {
        const actors = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((value) => value.json());
        return actors.results
    },
    getMoviesByActor: async (actorId: number): Promise<IActor | null> => {
        const actor = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((value) => value.json());
        return actor.results;
    },
    getMovieCast: async (movieId: string | number): Promise<[]> => {
        const cast = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((value) => value.json());
        return cast.results
    },
}

export default getMovies