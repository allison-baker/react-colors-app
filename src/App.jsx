import './App.css'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import NavBar from './components/NavBar'

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Search />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</>
	)
}

export default App
