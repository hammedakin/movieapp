import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import Navbar from './components/navbar/Navbar';
import MoviePage from './pages/moviepage/MoviePage';

function App() {

  return (
    <div>

      {/* Navbar Component  */}
      <Navbar/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/:id" element={<MoviePage />} />

      </Routes>
      </BrowserRouter>
      {/* Footer  */}
      <div className="footer">
        © 2022 Copyright MyTestApp. All Rights Reserved.
      </div>
    </div>
  )
}

export default App
