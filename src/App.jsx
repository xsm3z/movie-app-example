import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
