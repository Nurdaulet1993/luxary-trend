import React, {Component} from 'react';
import './main-page.css';

import Service from '../../service';

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

export default class MainPage extends Component {
  service = new Service();

  state = {
    testimonials: null,
    goods: null,
    navLinks: null,
    family: null
  }


  componentDidMount() {
    this.updateData();
  }

  updateData = () => {
    this.service.getData('db.json')
                .then(body => {
                  this.setState({
                    testimonials: body.testimonials,
                    goods: body.goods,
                    navLinks: body.navLinks,
                    family: body.family
                  });
                  
                });
  };
  
  deleteGoods = (id) => {
    this.setState(({goods}) => {
        const idx = goods.findIndex((item) => id === item.id);
        return {
          goods: [...goods.slice(0, idx), ...goods.slice(idx + 1)]
        }
    });
  }

  render(){

    const {navLinks} = this.state;

    return (
      <div>
          <Header navLinks={navLinks}/>
          <Hero/>
          {/* <Goods goods={this.state.goods} deleteGoods={this.deleteGoods}/> */}
          <Advantages/>
          <Profit/>
          <CallToAction/>
          <ForWhom/>
          {/* <Family family={this.state.family}/> */}
          <Steps/>
          <CallToAction/>
          {/* <Testimonials testimonials = {this.state.testimonials}/> */}
          <PreFooter/>
          <Footer/>
          <Widgets/>
          <ModalWindow/>
        </div>
    );
  }
  
}

