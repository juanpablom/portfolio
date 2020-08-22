import React from 'react'
import './App.css'
import Background from './Components/Background'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'

function App() {
  return (
    <div className="App">  
      <Background />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
