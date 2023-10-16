import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';     // it will be for notification(toast)
import 'react-toastify/dist/ReactToastify.css';             // it will be for notification(toast)

import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './Components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <div >
            <Routes>

              <Route excat path='/' element={<Home />} />
              <Route excat path='/login' element={<Login />} />
              <Route excat path='/createuser' element={<Signup />} />
              <Route excat path='/myOrder' element={<MyOrder />} />

            </Routes>
          </div>
        </BrowserRouter>

      </CartProvider>
     <ToastContainer />
    </>
  );
}

export default App;
