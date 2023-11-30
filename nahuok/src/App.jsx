import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePages';
import ProfilePage from './pages/ProfilePage';
import CreateProfile from './pages/CreateProfile';
import ProtectedRoute from './ProtectedRoute';
import { ProfileProvide } from './context/ProfileContext';

const App = () => {
  return (
    <AuthProvider>
      <ProfileProvide>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />

          <Route element={<ProtectedRoute />}>
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/getProfiles" element={<ProfilePage />} />
          </Route>


        </Routes> 
    </BrowserRouter>
    </ProfileProvide>
    </AuthProvider>
  )
}

export default App
