import './App.css';
import Catalogue from './Components/Catalouge';
import MovieDetails from './Components/MovieDetails';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
    <Routes>
      <Route path='/' element={<Catalogue />}/>

      <Route path="/movie/:movieID" element={ <MovieDetails /> } />
    </Routes>
    </div>
  );
}

export default App;
