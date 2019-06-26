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
// import Arcticmodal from '../arcticmodal/';

function App() {
  const testimonials = [
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
  ];

  const family = [
    {id: 1, text: `Не имеет ограничений по возрасту`},
    {id: 2, text: `Не имеет противопоказаний`},
    {id: 3, text: `Совместим с любым лекарственным препаратом`},
    {id: 4, text: `Не является БАД-ом и лекарством`},
    {id: 5, text: `Передозировка отсутствует`},
    {id: 6, text: `Натуральный продукт, не содержит ГМО`},
    {id: 7, text: `Полезные для организма элементы из 189 природных компонентов`},
    {id: 8, text: `Не имеет побочных действий`},
  ];

  const navLinks = [
    {id: 1, href: '#hero', text: 'Главная', active: true},
    {id: 2, href: '#goods-info', text: 'О продукте', active: false},
    {id: 3, href: '#profit', text: 'Польза', active: false},
    {id: 4, href: '#testimonial', text: 'Отзывы', active: false},
    {id: 5, href: '#pre-footer', text: 'Контакты', active: false},
  ];

  return (
    <div>
        <Header navLinks={navLinks}/>
        <Hero/>
        <Goods/>
        <Advantages/>
        <Profit/>
        <CallToAction/>
        <ForWhom/>
        <Family family={family}/>
        <Steps/>
        <CallToAction/>
        <Testimonials testimonials = {testimonials}/>
        <PreFooter/>
        <Footer/>
        <Widgets/>
        <ModalWindow/>
        {/* <Arcticmodal/> */}
    </div>
   
  );
}

export default App;
