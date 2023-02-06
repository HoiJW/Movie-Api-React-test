import './App.css';
import Catalogue from './Components/Catalouge';

const App = () => {
  
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
        <Catalogue />
      </header>
    </div>
  );
}

export default App;
