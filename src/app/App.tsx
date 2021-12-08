import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from '../theme';
import { Route, Routes } from 'react-router';
import NoScreen from '../screens/no-screen/NoScreen';
import Products from '../screens/products/Products';
import ProductDetails from '../screens/product-details/ProductDetail';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState<any>([]);

  const addItemToCart = (item) => {
    const itemFoundInCart = cart.find((cartItem) => {
      return cartItem.name === item.name;
    });

    if (itemFoundInCart) {
      // El item ya está dentro del carrito. Filtramos nuestro carrito para que tenga todos los elementos menos el que hemos encontrado.
      const filteredCart = cart.filter((cartItem) => cartItem.name !== itemFoundInCart.name);

      setCart([...filteredCart, { ...item, units: itemFoundInCart.units + 1 }]);
    } else {
      // El item aún no ha sido añadido, lo anadimos y ponemos su valor de units a 1
      setCart([...cart, { ...item, units: 1 }]);
    }
  };

  console.log('my carrito', cart);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Products onAddItemToCart={addItemToCart} />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="*" element={<NoScreen />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;