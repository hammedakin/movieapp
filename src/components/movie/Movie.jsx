import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieItem from '../movieItem/MovieItem';
import 'swiper/css/effect-fade';
import './movie.css';
function Movie({ movieData}) {
    // console.log(movieData);


    return (
        <div>
            <div className="movieContainer">
                <div className="container">
                    {/* Code that maps through movies   */}
                    <div className="row justify-content-around">
                        {movieData.map((movie, i) =>
                            <div className="col-md-4 mb-3" key={i}>
                                <div className=''>
                                    <MovieItem movie={movie} />
                                </div>
                            </div>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Movie;