import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import CategoryListContainer from './components/CategoryListContainer';




function App() {
  
  useEffect(() => {
    const database = getFirestore()

    const ref = doc(database, "cookies", "OeUPkMPSnB2WaT1IRGNr")
    
    getDoc(ref).then((snapshot) => {
      if(snapshot.exists()){
        console.log(snapshot)
      }
    })
  }, [])
  
  return (
    <CartContextProvider >

    <BrowserRouter className="App">

      <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<CategoryListContainer />} /> {/*fazer CategoriaListContainer (copia do ItemListContainer mas com filtro de categoria como no ItemDetailContainer*/}
          <Route path='/:string'  element={<ItemDetailContainer />} />
          <Route path='/carrinho' element={<Cart />} />

          <Route path='*' element={<h2>Página não encontrada</h2>} />
        </Routes>
    </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
