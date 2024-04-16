import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<>
			<nav className='flex flex-row items-center justify-between'>
				<a href='/'>
					<div className='flex gap-4 items-center ml-4'>
						<img src='/logo1.svg' alt='logo placeholder' width='75' height='75' />
						<h1 className='text-3xl'>Paletter</h1>
					</div>
				</a>
				<ul className='flex gap-4'>
					<li>
						<a
							href='/search/colors'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-primary-content hover:bg-primary text-primary hover:rounded-full'
						>
							Colors
						</a>
					</li>
					<li>
						<a
							href='/search/palettes'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-secondary-content hover:bg-secondary text-secondary hover:rounded-full'
						>
							Palettes
						</a>
					</li>
					<li>
						<a
							href='/search/patterns'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-success-content hover:bg-success text-success hover:rounded-full'
						>
							Patterns
						</a>
					</li>
					<li>
						<a
							href='/favorites'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-warning-content hover:bg-warning text-warning hover:rounded-full'
						>
							Favorites
						</a>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}

export default App
