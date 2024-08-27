import React from 'react';
import HomePage from "./components/HomePageDesktop"; 
import {ProductCard} from "./components/ProductCard"
import './App.css';
import { Button } from "@/components/ui/button"
function App() {
  return (
      <div className="App">
          <HomePage/> 
          
          <div className='px-30'>
          
          <Button>Click me</Button>
          <ProductCard/>
          </div>
      </div>
  );
}

export default App;