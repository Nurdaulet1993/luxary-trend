import React from 'react';
import './hero.css';

const Hero = () => {
    return(
        <section id="hero" className="hero">
            <div className="hero__wrap">
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__heading wow slideInLeft" data-wow-delay="0.3s">Ваш новый уровень заботы</h1>
                        <p className="hero__subtitle wow slideInLeft" data-wow-delay="0.1s">Система активного построения здоровья на клеточном уровне</p>
                        <a href="#modal-1" className="btn-hero modal wow slideInLeft" >Подробнее</a>
                    </div>
                </div>
            </div>
            <div className="hero__images">
                <img src="./assets/img/gr/gr.png" alt="gr" className="hero__gr-0 wow bounceInRight animate"/>
                <img src="./assets/img/gr/5bd8c4196e18148d3d407987_2.png" alt="gr" className="hero__gr-1 animate  wow bounceInLeft"/>
                <img src="./assets/img/gr/5bd8ca71ea13a9fbf9931b7b_4.png" alt="gr" className="hero__gr-3 animate  wow bounceInDown"/>
                <img src="./assets/img/gr/5bd8cab951cc3dc9afee8542_1.png" alt="gr" className="hero__gr-4 animate  wow bounceInUp"/>
            </div>
        </section>
    );
}

export default Hero;