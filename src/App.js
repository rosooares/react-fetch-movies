import React from 'react';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1> Encontre o cinema pertinho da sua casa!</h1>
      <Search />
    </div>
  );
}

export default App;
