import './App.css';
import Home from './screens/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';     // it will be for notification(toast)
import 'react-toastify/dist/ReactToastify.css';             // it will be for notification(toast)

import Login from './screens/Login.jsx';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.jsx';
import { CartProvider } from './Components/ContextReducer.jsx';
import MyOrder from './screens/MyOrder.jsx';


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


