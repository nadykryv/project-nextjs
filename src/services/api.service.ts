import { IPeople} from "../../types";
import {ISeries} from "../../types";

// IPkey = NEXT_PUBLIC_API_KEY =  dfdcb732cf0e31129b8baf2eda85d4e7


export const base = {
    baseURL:'https://api.themoviedb.org/3',
}

export const getPeople = {
    getTrendingPeople: async (): Promise<IPeople[]> => {
        const people = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(people);
        return people.results;
    },
};

export const getSeries = {
    getPopularSeries: async (): Promise<ISeries[]> => {
        const series = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(series)
        return series.results;
    },
};