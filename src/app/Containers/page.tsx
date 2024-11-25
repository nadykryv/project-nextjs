import React from 'react';
import getMovies from "@/services/api.movies";
import {getSeries} from "@/services/api.service";

import MovieGridComponent from "@/app/components/MovieGridComponent/MovieGridComponent";
import SeriesGridComponent from "@/app/components/SeriesGridComponent/SeriesGridComponent";

import './home.css';



const HomePage = async () => {

    const popularMovies = await getMovies.getAllMovies();
    const popularSeries = await getSeries.getPopularSeries();


    return (
        <div className="homepage">
            <section className="homepage-section movie-section">
                <h2>Popular Movies</h2>
                <MovieGridComponent movies={popularMovies.slice(0, 6)} />
            </section>

            <section className="homepage-section series-section">
                <h2>Popular Series</h2>
                <SeriesGridComponent series={popularSeries.slice(0, 6)} />
            </section>




        </div>
    );
};

export default HomePage;