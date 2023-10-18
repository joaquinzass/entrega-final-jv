import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la primera pre-entrega de ReactJS"/>
    </div>
  );
}

export default App;
