import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Genres from './pages/genres'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/genres" element={<Genres/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App

