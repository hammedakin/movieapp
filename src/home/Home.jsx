import React, { useEffect, useState } from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import Movie from '../components/movie/Movie';
import axios from 'axios';
import './home.css';
import { apiKey, endpoint, token } from '../assets/data';

function Home() {

    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState('the flash');
    const [loading, setloading] = useState(false);
    const [page, setPage] = useState(1);
    const [year, setYear] = useState('');
    const [sort, setSort] = useState('popularity.desc');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handlePageChange = (event) => {
        setPage(event.target.value);
    };
    const handleSortChange = (event) => {
        setSort(event.target.value);
    };



    function fetchMovies(e) {
        e?.preventDefault();
        setloading(true);

        axios.get(`${ endpoint }/discover/movie?api_key=${ apiKey }&page=${ page }&with_keywords=${ search }&sort_by=${ sort }&year=${ year }`, {
            headers: {
                'Authorization': `Bearer ${ token }`
            },
        })

            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setloading(false);
                } else {
                    console.log(res.data);
                    setMovieData(res.data.results);
                    // setMovieData((prevMovies) => [...prevMovies, ...res.data.results]);
                    setloading(false);
                }
            })
            .catch((error) => {

                alert('Error fetching movies:', error);
                setloading(false);
            });
    }

    // useEffect to call the function whenever the search input changes
    useEffect(() => {
        fetchMovies();

    }, [page, year, sort]);


    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1);
    };


    return (
        <div>
            {/* Showcase Section  */}
            <div className="home">
                <div className="home-inner">
                    <h1>Watch something incredible.</h1>
                </div>
            </div>
            {/* Search Section  */}
            <Searchbar value={search} onChange={(e) => setSearch(e.target.value)}
                fetchMovies={(e) => fetchMovies(e)}
                year={year} handleYearChange={handleYearChange}
                page={page} handlePageChange={handlePageChange}
                sort={sort} handleSortChange={handleSortChange}
            />

            {/* Movie Section  */}
            {loading ?
                <h4 className="text-center">
                    Loading ...
                </h4> :
                <>
                    <Movie movieData={movieData} />
                    <div className="text-center">
                        <button onClick={() => loadMoreMovies()} className='btn btn-success btn-lg'>Load More</button>
                    </div>
                </>
            }



        </div>

    );
}

export default Home;