import ItemListContainer from "./components/ItemListContainer";
import NavbarExample from "./components/Navbar";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proyecto from "./components/Proyecto";
import Objetivos from "./components/Objetivos";
import Usuarios from "./components/Usuarios";
import Diagrama from "./components/Diagrama";
import Conclusiones from "./components/Conclusiones";


function App() {
  return (
    <>
    <BrowserRouter>
     <NavbarExample /> 
     <Routes>
      <Route path='/' element={<Proyecto/>}/>
      <Route path='/objetivo' element={<Objetivos/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/>
      <Route path='/diagrama' element={<Diagrama/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      <Route path='/conclusiones' element={<Conclusiones/>}/>             
                  
      </Routes>      
    
    </BrowserRouter>
   
    </> 
  );
}

export default App;
