import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider'


ReactDOM.render(
  <>
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />}/>
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();