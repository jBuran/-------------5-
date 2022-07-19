import React from 'react';
import './index.scss'

import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Present from './components/Present'
import News from './components/News';
import Back from './components/Back';
import Recom from './components/Recom';
import Sales from './components/Sales';
import Our from './components/Our';
import Choose from './components/Choose';

import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
        <Header />
       <Hero />
       <Products />
      <Present />
      <News />
      <Back />
      <Recom />
      <Sales />
      <Our />
      <Choose />
       <Footer />
    </div>
  )
}

export default App
