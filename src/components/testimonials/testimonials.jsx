import React from 'react';
import './testimonials.css';

const Testimonials = () => {
    return(
        <section id="testimonial" className="testimonials">
            <div className="container">
                <div className="title">
                    <h4 className="title__heading wow fadeInDown">
                        Что говорят о продукте
                    </h4>
                </div>
                <div className="testimonials__content wow zoomIn" data-wow-delay="0.7s">
                
                    

                    <div className="owl-carousel testimonials__carousel">
                        <div> 
                            <div className="testimonial">
                                <div className="testimonial__icon">
                                    <img src="./assets/img/person.jpg" alt="avatar"/>
                                </div>
                                <div className="testimonial__text">
                                    <span>
                                        У меня самой хороший результат. 6 декабря 2017 года прооперирована в 
                                        Караганде в кардиоцентре, замена двух клапанов митрального и трипуспидального. 
                                        Употребляем бальзамы всей семьей две недели. Сегодня была на УЗИ сердца и аритмолога - 
                                        ритм сердца восстановился, вставлять кардиосимулятор сказали нет необходимости. 
                                        Отдышка прошла, легкость в дыхании чуствую. Дети стали активно учиться. 
                                        Младшая дочь говорит: - Мама, я стала лучше запоминать после твоих бальзамов. 
                                        Всем желаю успеха!
                                    </span>
                                </div>
                                <div className="testimonial__author">
                                    <span>Кононов Александр</span>
                                </div>
                                <div className="testimonial__location">
                                    <span>г Астана</span>
                                </div>
                                <div className="testimonial__raiting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div> 
                            <div className="testimonial">
                                <div className="testimonial__icon">
                                    <img src="./assets/img/person.jpg" alt="avatar"/>
                                </div>
                                <div className="testimonial__text">
                                    <span>
                                        У меня самой хороший результат. 6 декабря 2017 года прооперирована в 
                                        Караганде в кардиоцентре, замена двух клапанов митрального и трипуспидального. 
                                        Употребляем бальзамы всей семьей две недели. Сегодня была на УЗИ сердца и аритмолога - 
                                        ритм сердца восстановился, вставлять кардиосимулятор сказали нет необходимости. 
                                        Отдышка прошла, легкость в дыхании чуствую. Дети стали активно учиться. 
                                        Младшая дочь говорит: - Мама, я стала лучше запоминать после твоих бальзамов. 
                                        Всем желаю успеха!
                                    </span>
                                </div>
                                <div className="testimonial__author">
                                    <span>Кононов Александр</span>
                                </div>
                                <div className="testimonial__location">
                                    <span>г Астана</span>
                                </div>
                                <div className="testimonial__raiting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div> 
                            <div className="testimonial">
                                <div className="testimonial__icon">
                                    <img src="./assets/img/person.jpg" alt="avatar"/>
                                </div>
                                <div className="testimonial__text">
                                    <span>
                                        У меня самой хороший результат. 6 декабря 2017 года прооперирована в 
                                        Караганде в кардиоцентре, замена двух клапанов митрального и трипуспидального. 
                                        Употребляем бальзамы всей семьей две недели. Сегодня была на УЗИ сердца и аритмолога - 
                                        ритм сердца восстановился, вставлять кардиосимулятор сказали нет необходимости. 
                                        Отдышка прошла, легкость в дыхании чуствую. Дети стали активно учиться. 
                                        Младшая дочь говорит: - Мама, я стала лучше запоминать после твоих бальзамов. 
                                        Всем желаю успеха!
                                    </span>
                                </div>
                                <div className="testimonial__author">
                                    <span>Кононов Александр</span>
                                </div>
                                <div className="testimonial__location">
                                    <span>г Астана</span>
                                </div>
                                <div className="testimonial__raiting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
}

export default Testimonials;