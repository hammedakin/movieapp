import React, { useEffect, useState } from 'react';
import './moviepage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { endpoint, token } from '../../assets/data';
import axios from 'axios';


const MoviePage = () => {

      const [loading, setloading] = useState(false);
      const [movieData, setMovieData] = useState('');
      const params = useParams();
      const navigate = useNavigate();

      function fetchMovies(e) {
            setloading(true);
            axios.get(`${ endpoint }/movie/${ params?.id }?language=en-US`, {
                  headers: {
                        'Authorization': `Bearer ${ token }`
                  },
            })
                  .then((res) => {
                        if (res.data.success === false) {
                              toast.warn(res.data.msg);
                              setloading(false);
                        } else {
                              setMovieData(res.data);
                              setloading(false);
                        }
                  })
                  .catch((error) => {
                        setloading(false);
                  });
      }
      // useEffect to call the function whenever the search input changes
      useEffect(() => {
            fetchMovies();
      }, []);


      return (
            <>
                  {/* Showcase Section  */}
                  <div className="moviepage"
                        style={{
                              background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.493)), url(https://image.tmdb.org/t/p/w200/${ movieData?.backdrop_path })`
                        }}
                  >
                        <div className="moviepage-inner">
                              <h1>{movieData?.title}</h1>
                              <h4>Released: {movieData?.release_date} </h4>
                        </div>

                  </div>


                  <div className="container">
                        {
                              loading ?
                                    <h4 className="text-center mt-5">
                                          Loading ...
                                    </h4> :
                                    <>
                                          <button className='btn btn-primary mt-5'
                                                onClick={() => navigate(-1)}
                                          >
                                                Back
                                          </button>
                                          <h3 className='mt-5'>
                                                Overview: <br /> {movieData?.overview}
                                          </h3>
                                          <h3 className='mt-5'>
                                                Runtime: <br /> {movieData?.runtime} mins
                                          </h3>
                                          <h3 className='mt-5'>
                                                Release Date: <br /> {movieData?.release_date}
                                          </h3>
                                          <h3 className='mt-5'>
                                                Genres: <br />
                                                {movieData?.genres?.map((item) => <span key={item?.id} className='me-2'>
                                                      {item?.name},
                                                </span>)}
                                          </h3>
                                          <h3 className='mt-5'>
                                                Average Votes: <br />
                                                {movieData?.vote_average} / 10
                                                <span className="h5 ms-2">
                                                      ( {movieData?.vote_count} votes)
                                                </span>
                                          </h3>
                                    </>
                        }
                  </div>

            </>
      );
};

export default MoviePage;