import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter,Routes,Route } from 'react-router';
import Navigitor from './Componnets/Navigitor.jsx';
import Fotter from './Componnets/Fotter.jsx';
import Login from './Componnets/Login.jsx';
import Contact from './Componnets/Contact.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Navigitor/>
    <Routes>
      <Route index element= {<App/>} />
      <Route path='login' element={<Login/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
    </Routes>
    <Fotter/>
  </BrowserRouter>,
)
