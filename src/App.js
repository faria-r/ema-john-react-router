import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { ProductsandCartLoader } from './Loaders/ProductsandCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader:()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/order',
          loader:ProductsandCartLoader,
          element:<Orders></Orders>
        },
        {
          path:'/Inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
              }
      ]
    },

  ]);
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
