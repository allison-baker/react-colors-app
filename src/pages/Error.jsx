import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

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
			<div className='flex items-center justify-center min-h-[70vh]'>
				<div className='flex flex-col gap-4 items-center bg-base-100 p-8 rounded-md'>
					<h1 className='text-3xl text-error'>Oops!</h1>
					<p className='font-bold'>Sorry, an unexpected error has occurred.</p>
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
					<p className='text-center'>...but please don&apos;t panic! The COLOURlovers API server might be down.<br/>Come back and try again later!</p>
				</div>
			</div>
			<footer>
				<p className='text-center text-sm py-8'>Al Baker &bull; &copy; 2024 &bull; Utah Valley University</p>
			</footer>
		</>
	)
}
