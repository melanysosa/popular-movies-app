import './Header.css';
import Icon from './Icon';
const Header = ({ value, onSubmit, onChange, onClickApp, valueApp }) => {
	return (
		<>
			<nav className='navbar header'>
				<div className='container-fluid text-light'>
					<div
						className='d-flex justify-content-start align-items-center'
						onClick={onClickApp}
						value={valueApp}
					>
						<Icon />
						<label>Home</label>
					</div>
					<form className='d-flex' autoComplete='off' onSubmit={onSubmit}>
						<input
							type='search'
							placeholder='Movie Search'
							className='input_search  me-2'
							aria-label='search'
							name='query'
							value={value}
							onChange={onChange}
						/>

						<button className='btn ' type='submit'>
							<span>Search</span>
						</button>
					</form>
				</div>
			</nav>
		</>
	);
};

export default Header;
