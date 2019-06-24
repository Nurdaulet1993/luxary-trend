import React from 'react';
import './App.css';

import Header from '../header';
import Footer from '../footer';
import Hero from '../hero';
import Goods from '../goods';
import Advantages from '../advantages';
import Profit from '../profit';
import CallToAction from '../call-to-action';
import ForWhom from '../for-whom';
import Family from '../family';
import Steps from '../steps';
import Testimonials from '../testimonials';
import PreFooter from '../pre-footer';
import Widgets from '../widgets';
import ModalWindow from '../modal-window';
import Arcticmodal from '../arcticmodal/';

function App() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Goods/>
        <Advantages/>
        <Profit/>
        <CallToAction/>
        <ForWhom/>
        <Family/>
        <Steps/>
        <CallToAction/>
        <Testimonials/>
        <PreFooter/>
        <Footer/>
        <Widgets/>
        <ModalWindow/>
        {/* <Arcticmodal/> */}
    </div>
   
  );
}

export default App;
