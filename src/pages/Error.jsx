import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div className='flex items-center justify-center h-screen bg-base-200'>
			<div className='flex flex-col gap-4 items-center bg-base-100 p-8 rounded-md'>
				<h1 className='text-3xl text-error'>Oops!</h1>
				<p className='font-bold'>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</div>
	)
}
