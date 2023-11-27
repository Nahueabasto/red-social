//import './App.css'
//import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';


const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/createProfile" element={<h1>CrearProfile</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes> 
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
