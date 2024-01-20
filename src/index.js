import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import BookList from './Books/BookList';

const Items =[{
  id:1,
  img:'./Images/future.jpg',
  name:'Ways of the future',
  rating:'fa fa-star checked'
},{
  id:2,
  img:'./Images/future.jpg',
  name:'Ways of the future',
  rating:'fa fa-star checked'
},
  {
  id:3,
    img:'./Images/future.jpg',
  name:'Ways of the future',
  rating:'fa fa-star checked'
}]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList Items={Items}/>
  </React.StrictMode>
);


