import React, {Component} from 'react';
import './main-page.css';

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

  state = {
    testimonials: [
      {
        id: 1,
        img: './assets/img/person.jpg', 
        text: 'У меня самой хороший результат. 6 декабря 2017 года прооперирована в Караганде в кардиоцентре, замена двух клапанов митрального и трипуспидального.',
        auth: 'Кононов Александр',
        from: 'Астана',
        stars: 4
      },
      {
        id: 2,
        img: './assets/img/person.jpg', 
        text: `
              Употребляем бальзамы всей семьей две недели. Сегодня была на УЗИ сердца и аритмолога - 
              ритм сердца восстановился, вставлять кардиосимулятор сказали нет необходимости. 
              Отдышка прошла, легкость в дыхании чуствую. Дети стали активно учиться',
              auth: 'Кононов Александр`,
        auth: 'Сатберген Нурдаулет',
        from: 'Астана',
        stars: 5
      },
      {
        id: 3,
        img: './assets/img/person.jpg', 
        text: `
              Младшая дочь говорит: - Мама, я стала лучше запоминать после твоих бальзамов. 
              Всем желаю успеха!`,
        auth: 'Кононов Александр',
        from: 'Астана',
        stars: 3
      },
    ],
    family: [
      {id: 1, text: `Не имеет ограничений по возрасту`},
      {id: 2, text: `Не имеет противопоказаний`},
      {id: 3, text: `Совместим с любым лекарственным препаратом`},
      {id: 4, text: `Не является БАД-ом и лекарством`},
      {id: 5, text: `Передозировка отсутствует`},
      {id: 6, text: `Натуральный продукт, не содержит ГМО`},
      {id: 7, text: `Полезные для организма элементы из 189 природных компонентов`},
      {id: 8, text: `Не имеет побочных действий`},
    ],
    navLinks: [
      {id: 1, href: '#hero', text: 'Главная', active: true},
      {id: 2, href: '#goods-info', text: 'О продукте', active: false},
      {id: 3, href: '#profit', text: 'Польза', active: false},
      {id: 4, href: '#testimonial', text: 'Отзывы', active: false},
      {id: 5, href: '#pre-footer', text: 'Контакты', active: false},
    ],
    goods: [
      {
        id: 1, 
        img: "./assets/img/product-3.jpg", 
        name: "PERFECTO LUX", 
        text: `
              Nano balsam “PERFECTO LUX”- высококонцентрированный продукт, который представляет собой комплекс целебных природных ингредиентов. 
              Полностью сохранены свойства натурального продукта. Оказывает омолаживающее, общеукрепляющее, 
              тонизирующее действие. Нормализует обмен веществ и энергетический обмен. 
              Повышает умственную и физическую активность. Оказывает положительное действие на состояние кожи и волос. 
              Применяется как вспомогательное средство для предотвращения преждевременного старения организма, 
              при истощении, слабости, после перенесенных заболеваний.`
      },
      {
        id: 2, 
        img: "./assets/img/product-3.jpg", 
        name: "PERFECTO LUX", 
        text: `
              Nano balsam “PERFECTO LUX”- высококонцентрированный продукт, который представляет собой комплекс целебных природных ингредиентов. 
              Полностью сохранены свойства натурального продукта. Оказывает омолаживающее, общеукрепляющее, 
              тонизирующее действие. Нормализует обмен веществ и энергетический обмен. 
              Повышает умственную и физическую активность. Оказывает положительное действие на состояние кожи и волос. 
              Применяется как вспомогательное средство для предотвращения преждевременного старения организма, 
              при истощении, слабости, после перенесенных заболеваний.`
      },
      {
        id: 3, 
        img: "./assets/img/product-3.jpg", 
        name: "PERFECTO LUX", 
        text: `
              Nano balsam “PERFECTO LUX”- высококонцентрированный продукт, который представляет собой комплекс целебных природных ингредиентов. 
              Полностью сохранены свойства натурального продукта. Оказывает омолаживающее, общеукрепляющее, 
              тонизирующее действие. Нормализует обмен веществ и энергетический обмен. 
              Повышает умственную и физическую активность. Оказывает положительное действие на состояние кожи и волос. 
              Применяется как вспомогательное средство для предотвращения преждевременного старения организма, 
              при истощении, слабости, после перенесенных заболеваний.`
      },
    ]
  }
  
  deleteGoods = (id) => {
    this.setState(({goods}) => {
        const idx = goods.findIndex((item) => id === item.id);
        return {
          goods: [...goods.slice(0, idx), ...goods.slice(idx + 1)]
        }
    });
  }

  render(){
    return (
      <div>
          <Header navLinks={this.state.navLinks}/>
          <Hero/>
          <Goods goods={this.state.goods} deleteGoods={this.deleteGoods}/>
          <Advantages/>
          <Profit/>
          <CallToAction/>
          <ForWhom/>
          <Family family={this.state.family}/>
          <Steps/>
          <CallToAction/>
          <Testimonials testimonials = {this.state.testimonials}/>
          <PreFooter/>
          <Footer/>
          <Widgets/>
          <ModalWindow/>
        </div>
    );
  }
  
}

