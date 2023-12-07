import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePages';
import ProfilePage from './pages/ProfilePage';
import CreateProfile from './pages/CreateProfile';
import ProtectedRoute from './ProtectedRoute';
import { ProfileProvide } from './context/ProfileContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import axios from 'axios';

const App = () => {

  if (window.location.hostname === 'localhost') {
    axios.defaults.baseURL = 'http://localhost:3000';
  } else {
    axios.defaults.baseURL = 'https://red-social-psi.vercel.app/';
  }

  return (
    <AuthProvider>
      <ProfileProvide>
    <BrowserRouter>
    <div className="flex">
    <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />

          <Route element={<ProtectedRoute />}>
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/getProfiles" element={<ProfilePage />} />
          <Route path="/getProfile/:id" element={<CreateProfile />} />
          </Route>

        </Routes> 
        </div>
    </BrowserRouter>
    </ProfileProvide>
    </AuthProvider>
  )
}

export default App
