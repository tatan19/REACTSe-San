import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ind from './pages/principal/principal';
import Form from './pages/login/Login';
import Das from './pages/dash/Dash';
import Reghbt from './pages/Regh/Regh'
import Error from './pages/error404/error'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ind />} />
          <Route path='/login' element={<Form />} />
          <Route path='/dashboard' element={<Das />} />
          <Route path='/registrar' element={<Reghbt />} />
          <Route path='/Error404' element={<Error />} />
          {/* <Route path='/Form' element={<Formulario />} /> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
