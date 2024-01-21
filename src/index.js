import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import BookList from './Books/BookList';

// import Data from './Books/Data';
import Advanced from './Hooks/useState/Advanced.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BookList Items={Data}/> */}
    <Advanced/>
  </React.StrictMode>
);


