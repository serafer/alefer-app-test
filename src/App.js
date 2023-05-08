import Navbar from './components/Navbar/Navbar';
import SuperiorNavbar from './components/SuperiorNavbar/SuperiorNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <BrowserRouter>
        <CartProvider>
          <SuperiorNavbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Andes Drink Co | E-Commerce'} />} />
            <Route path="/category/:category" element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer  greeting={'Cart'}/> } />
            <Route path="/Checkout" element={<Checkout  greeting={'Checkout'}/> } />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
