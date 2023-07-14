import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './movieitem.css';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // console.log(movie);
    return (
        <>
            <Link to={`/${movie?.id}`}>
                <div className="movieItem px-3" onClick={handleShow} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w200/${ movie?.poster_path })`
                }}>
                </div>
                <h5 className='mt-3 text-black'>
                    Title: {movie?.title}
                </h5>
            </Link>
        </>
    );
}

export default MovieItem;