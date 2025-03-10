

export interface IMovie {
    id: number;
    title: string;
    description: string;
    category: 'comedy' | 'fantasy';
    createdAt: string;
    updatedAt: string;
    likesAmount: number;
    poster_path: string;
    vote_average: number;
    overview: string;
    genre_ids: number[];
    badges:number[];
    origin_country: string;
    original_title: string;
    popularity: number;
    name: string;
    original_language;
    release_date: number;
    runtime: number;
    spoken_languages: string;
    status: string;
    tagline: string;
    vote_count: number;
    production_companies: string
}
export interface IGenre {
    id: number;
    name: string;
}

export interface IProps {
    movies: IMovie[];
    genres: IGenre[];
    movie: string;
    genre: string;
    overview: string;
    description: string;
    badges: number[];
}

export interface IMovieData {
    poster_path: string;
    genres: IGenre[];
    title: string;
    overview: string;
    vote_average: number;
    runtime: number;
    release_date: string;
}
export interface IPerson {
    id: number;
    name: string;
    popularity: number;
    profile_path: string;
    known_for: object[];
}

type MovieInfoProps = {
    description: string;
    badges: number[];
};
export interface IPeople {
    id: number;
    name: string;
    popularity: number;
    profile_path: string;
    known_for: object[];
    "known_for_department": string;
}
export interface IPerson {
    id: number;
    name: string;
    popularity: number;
    profile_path: string;
    known_for: object[];
    "known_for_department": string;
}
export interface IActor {
    id: number;
    name: string;
    popularity: number;
    profile_path: string;
    known_for: object[];
    "known_for_department": string;
}
export interface ISeries {
    id: number;
    title: string;
    description: string;
    category: 'comedy' | 'fantasy';
    createdAt: string;
    updatedAt: string;
    likesAmount: number;
    poster_path: string;
    vote_average: number;
    overview: string;
    genre_ids: number[];
    badges:number[];
    origin_country: string;
    original_title: string;
    popularity: number;
    name: string;
    original_language;
    release_date: number;
    runtime: number;
    spoken_languages: string;
    status: string;
    tagline: string;
    vote_count: number;
    production_companies: string
}


