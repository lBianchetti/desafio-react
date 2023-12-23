import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { useState } from 'react';


function App() {

  return (
    <CartContextProvider >

    <BrowserRouter className="App">

      <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} /> {/*fazer CategoriaListContainer (copia do ItemListContainer mas com filtro de categoria como no ItemDetailContainer*/}
          <Route path='/:string'  element={<ItemDetailContainer />} />
          <Route path='/carrinho' element={<h1>Carrinho</h1>} />

          <Route path='*' element={<h2>Página não encontrada</h2>} />
        </Routes>
    </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
