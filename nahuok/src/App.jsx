import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePages';
import Profile from './pages/Profile';
import CreateProfile from './pages/CreateProfile';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />

          <Route element={<ProtectedRoute />}>
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/profile" element={<Profile />} />
          </Route>


        </Routes> 
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
