import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting = "Bienvenido a nuestra tienda online de electrónica, donde encontrarás todo lo relacionado con tecnología que seguramente necesitas!"/>
    </div>
  );
}

export default App;
