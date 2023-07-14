import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Searchbar from '../components/searchbar/Searchbar';
import Movie from '../components/movie/Movie';
import axios from 'axios';
import './search.css';

function Search() {

      const [movieData, setMovieData] = useState([]);
      const [search, setSearch] = useState('the flash');
      const api_key = 'e9ef3768';


      //Function to fetch movies
      const fetchMovies = async () => {
            try {
                  const res = await axios.get(`https://www.omdbapi.com/?s=${ search }&apikey=${ api_key }`);
                  // console.log(res.data.Response)
                  if (res.data.Response === 'True') {
                        setMovieData(res.data.Search);
                  }
            } catch (error) {
                  alert(error.message);
            }
      };

      // useEffect to call the function whenever the search input changes
      useEffect(() => {
            fetchMovies();
      }, [search]);


      return (
            <div>
                  {/* Navbar Component  */}
                  <Navbar />
                  {/* Showcase Section  */}
                  <div className="home">
                        <div className="home-inner">
                              <h1>Search Page</h1>
                        </div>
                  </div>
                  {/* Search Section  */}
                  <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />

                  {/* Movie Section  */}
                  <Movie movieData={movieData} />

                  {/* Footer  */}
                  <div className="footer">
                        © 2022 Copyright MyTestApp. All Rights Reserved.
                  </div>
            </div>

      );
}

export default Search;