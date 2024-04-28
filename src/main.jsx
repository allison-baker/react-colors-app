// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './pages/Search'
import Error from './pages/Error'
import Favorites from './pages/Favorites'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/search/:type',
				element: <Search />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
