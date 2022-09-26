import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <ItemListContainer greeting='Las mejores zapatillas al mejor precio'/>
      </header>
    </div>
  );
}

export default App;
