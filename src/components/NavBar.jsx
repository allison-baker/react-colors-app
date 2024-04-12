export default function NavBar() {
	return (
		<>
			<nav className='bg-base-200 flex flex-row items-center justify-between'>
				<a href='/'>
					<div className='flex gap-4 items-center ml-4'>
						<img src='https://placehold.co/75x75' alt='logo placeholder' width='75' height='75' />
						<h1 className='text-3xl'>Paletter</h1>
					</div>
				</a>
				<ul className='flex gap-4'>
					<li>
						<a
							href='/?type=colors'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-neutral hover:bg-base-300 text-primary'
						>
							Colors
						</a>
					</li>
					<li>
						<a
							href='/?type=palettes'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-neutral hover:bg-base-300 text-secondary'
						>
							Palettes
						</a>
					</li>
					<li>
						<a
							href='/?type=patterns'
							className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-neutral hover:bg-base-300 text-success'
						>
							Patterns
						</a>
					</li>
					<li>
						<a href='/favorites' className='block px-8 py-10 uppercase tracking-widest font-bold hover:text-neutral hover:bg-base-300 text-warning'>
							Favorites
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
