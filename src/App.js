import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import {CartProvider} from './components/context/CartContext';



function App() {
    return (
        <CartProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:categoryName"
                    element={<ItemListContainer />}
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/checkout' element={<Form />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </CartProvider>
    );
}

export default App;