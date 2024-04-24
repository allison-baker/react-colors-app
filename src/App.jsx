import './App.css'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
	const path = useLocation().pathname

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
							className={
								path === '/search/colors'
									? 'block border-b-4 border-primary px-8 py-10 uppercase tracking-widest font-bold text-primary'
									: 'block border-b-4 border-base-100 px-8 py-10 uppercase tracking-widest font-bold text-primary hover:border-primary'
							}
						>
							Colors
						</a>
					</li>
					<li>
						<a
							href='/search/palettes'
							className={
								path === '/search/palettes'
									? 'block border-b-4 border-secondary px-8 py-10 uppercase tracking-widest font-bold text-secondary'
									: 'block border-b-4 border-base-100 px-8 py-10 uppercase tracking-widest font-bold text-secondary hover:border-secondary'
							}
						>
							Palettes
						</a>
					</li>
					<li>
						<a
							href='/search/patterns'
							className={
								path === '/search/patterns'
									? 'block border-b-4 border-success px-8 py-10 uppercase tracking-widest font-bold text-success'
									: 'block border-b-4 border-base-100 px-8 py-10 uppercase tracking-widest font-bold text-success hover:border-success'
							}
						>
							Patterns
						</a>
					</li>
					<li>
						<a
							href='/favorites'
							className={
								path === '/favorites'
									? 'block border-b-4 border-warning px-8 py-10 uppercase tracking-widest font-bold text-warning'
									: 'block border-b-4 border-base-100 px-8 py-10 uppercase tracking-widest font-bold text-warning hover:border-warning'
							}
						>
							Favorites
						</a>
					</li>
				</ul>
			</nav>
			{path === '/' ? (
				<>
					<div className='min-h-[70vh] flex flex-col items-center justify-center'>
						<h1 className='text-3xl'>Welcome to Paletter</h1>
						<p className='mt-8'>Search by color, palette, or pattern! Save your favorites to view later.</p>
						<p className='mt-2'>
							Powered by the{' '}
							<a href='https://www.colourlovers.com/api' target='_blank'>
								COLOURlovers API
							</a>
							.
						</p>
						<section className='flex flex-row items-center mt-10 gap-4'>
							<a className='btn rounded-full btn-primary' href='/search/colors'>
								Search by Color
							</a>
							<a className='btn rounded-full btn-secondary' href='/search/palettes'>
								Search by Palette
							</a>
							<a className='btn rounded-full btn-success' href='/search/patterns'>
								Search by Pattern
							</a>
						</section>
					</div>
				</>
			) : (
				<Outlet />
			)}
			<footer>
				<p className='text-center text-sm py-8'>Al Baker &bull; &copy; 2024 &bull; Utah Valley University</p>
			</footer>
		</>
	)
}

export default App
