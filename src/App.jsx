import React from 'react';
import HomePage from "./components/HomePageDesktop"; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
          <HomePage/> 
          
          <div className='px-30'>
          
         
          <Footer />
          </div>
      </div>
  );
}

export default App;