import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Singup from './routes/Singup';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={< Singup/>} />
          {/* <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>ERROR 404 PAGE NOT FOUND</h1>}/> */}
        </Routes> 
         {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />  */}
         {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
