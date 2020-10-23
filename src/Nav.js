import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = ({name, price}) => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div>
        <h3>Marta List of things!</h3>
        <p>List of movies: {movies.length}</p>
        </div>
    );
};

export default Nav;
