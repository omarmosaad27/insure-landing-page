import React,{useState} from 'react';
import './App.css';
import { Navbar, Hero, About, Features, Footer } from './components';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero  />
      <Features />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
