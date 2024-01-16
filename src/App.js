
import React from 'react'

import Button from './components/Button'

import Linked from './components/Linked';

import Propex from './components/Propex';

import List from './components/List';

const People =[
  {id:1,name:'Emma', age:23},
  {id:2,name:'Ekaka', age:24},
  {id:3,name:'Simon', age:23},
  {id:4,name:'Collin', age:24},
  {id:5,name:'John', age:21},
]

const name = 'satoshi';
const App = () => {
  return (
    <div>
      <h1>React Restart</h1>
      <Button/>
      <Linked/>
      <Propex name = {name}/>
      <List People={People}/>
    </div>
  )
}

export default App

