import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Conditional from './Hooks/Conditional/Conditional';
// import UseEffectApi from './Hooks/useEffect/UseEffectApi';
// import UseStateNo from './Hooks/useState/useStateNo';\
// import Start from './Hooks/useEffect/Start';
// import UseEffectCleanup from './Hooks/useEffect/UseEffectCleanup';
// import App from './App';
// import BookList from './Books/BookList';

// import Data from './Books/Data';

// import Advanced from './Hooks/useState/Advanced.jsx';
// import UseStateArray from './Hooks/useState/UseStateArray.jsx';
// import UseStateObject from './Hooks/useState/UseStateObject.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BookList Items={Data}/> */}
    {/* <Advanced/> */}
    {/* <UseStateArray/> */}
    {/* <UseStateObject/> */}
    {/* <UseStateNo/> */}
    {/* <Start/> */}
    {/* <UseEffectCleanup/> */}
    {/* <UseEffectApi/> */}
    <Conditional/>
  </React.StrictMode>
);


