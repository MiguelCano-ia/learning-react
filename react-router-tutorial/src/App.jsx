import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFound';
import NavBar from './components/NavBar';
import UserPage from './pages/UserPage';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} /> {/* // En esta ruta, muestrame  esto (element) */}
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />}  />
        <Route path='/usuarios' element={<Navigate to='/users' />} /> {/* Redireccionar */}
        <Route path='/users/:id' element={<UserPage />} />
        {/*Rutas anhidadas*/}
        <Route path='/dashboard/' element={<DashBoard />}>
          <Route path='welcome'element={<p>Welcome!!</p>} />
          <Route path='goodbye' element={<p>Good bye</p>} />
        </Route>
        <Route path='*' element={<NotFoundPage />} /> {/* Astericos signfica cualquier otra ruta */}
      </Routes>
    </>
  )
}

export default App
