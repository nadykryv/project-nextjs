
import React, { FC } from "react";

type MovieInfoProps = {
    description: string;
    badges: number[];
};

const MovieInfo: FC<MovieInfoProps> = ({ description, badges }) => {
    console.log("Badges:", badges);

    return (
        <div className="movie-info">
            <p>{description}</p>
            <div className="genre-badges">
                {Array.isArray(badges) && badges.length > 0 ? (
                    badges.map((badge, index) => (
                        <span key={index} className="badge">
                            {badge}
                        </span>
                    ))
                ) : (
                    <span>No badges available</span>
                )}
            </div>
        </div>
    );
};

export default MovieInfo;

