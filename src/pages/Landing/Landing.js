import { useState, useEffect } from 'react';
import MovieBox from '../../components/MovieBox/MovieBox';
import Header from '../../components/Header/Header';
import { getApi, searchMovie } from '../../services/getApi';
import './Landing.css';

const Landing = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		functionGet();
	}, []);

	const functionGet = () => {
		getApi().then((movies) => setMovies(movies));
	};

	const search = (e) => {
		e.preventDefault();
		searchMovie(query).then((movies) => setMovies(movies));
	};

	const handlechangeMovies = (e) => {
		setQuery(e.target.value);
	};

	const home = () => {
		functionGet();
	};
	return (
		<div className='containerMovie'>
			<Header
				value={query}
				onSubmit={search}
				onChange={handlechangeMovies}
				onClickApp={home}
				valueApp={movies}
			/>

			{movies.length ? (
				<div className='grid '>
					{movies
						.filter((movie) => movie.poster_path && movie.backdrop_path)
						.map((movie) => (
							<MovieBox key={movie.id} {...movie} />
						))}
				</div>
			) : (
				<div>
					<div className='text-center'>
						<div className='spinner-border' role='status'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					</div>
					<h2>Sorry !! No Movies Found</h2>
				</div>
			)}
		</div>
	);
};

export default Landing;
