import React from 'react';
import './searchbar.css';

function Searchbar({ value, onChange, fetchMovies, year, handleYearChange, page, handlePageChange, sort, handleSortChange }) {

    const popularity = [
        'popularity.asc', 'popularity.desc', 'vote_average.asc', 'vote_average.desc', 'vote_count.asc', 'vote_count.desc'
    ];


    return (
        <div className='searchBar'>
            <div className="searchCase">
                <label htmlFor="search">Search</label>
                <form onSubmit={fetchMovies} className='w-100'>
                    <input type="text" id='search' name='search' placeholder='Search for a movie' value={value} onChange={onChange} />
                    <div className="text-center">
                        <button type='submit' className="btn btn-success mt-2">
                            Search
                        </button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="yearSelect">Year:</label>
                        <select id="yearSelect" value={year} onChange={handleYearChange}>
                            <option value="">Select a year</option>
                            {Array.from({ length: 121 }, (_, index) => {
                                const currentYear = new Date().getFullYear();
                                const yearValue = currentYear - 120 + index;
                                return (
                                    <option key={index} value={yearValue}>
                                        {yearValue}
                                    </option>
                                );
                            }).reverse()}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="pageSelect">Page:</label>
                        <select id="pageSelect" value={page} onChange={handlePageChange}>
                            <option value="">Select a Page</option>
                            {Array.from({ length: 200 }, (_, index) => {
                                const pageValue = index + 1;
                                return (
                                    <option key={index} value={pageValue}>
                                        {pageValue}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="sortSelect">Popularity:</label>
                        <select id="sortSelect" value={sort} onChange={handleSortChange}>
                            <option value="">Select a Sort</option>
                            {popularity.map((item, i) => {
                                return (
                                    <option key={i} value={item}>
                                        {item}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;