import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter className="App">

      <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} /> {/*fazer CategoriaListContainer (copia do ItemListContainer mas com filtro de categoria como no ItemDetailContainer*/}
          <Route path='/:string' element={<ItemDetailContainer />} />

          <Route path='*' element={<h2>Página não encontrada</h2>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
