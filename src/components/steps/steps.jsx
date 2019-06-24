import React from 'react';
import './steps.css';

const Steps = () => {
    return(
        <section className="steps">
            <div className="container">
                <div className="title">
                    <h4 className="title__heading wow fadeInDown">
                        Всего 4 шага для улучшения здоровья
                    </h4>
                </div>

                <div className="steps__content">
                    <div className="steps__view">
                        <img src="./assets/img/steps.svg" alt="steps"/>
                    </div>
                    <ul className="steps__list">
                        <li>
                            <div className="steps__item wow fadeInRight" data-wow-delay="0.2s">
                                <div className="steps__num">
                                    <span>1.</span>
                                </div>
                                <div className="steps__desc">
                                    <h4 className="steps__heading">Заявка на сайте.</h4>
                                    <span>
                                        Оставляете заявку на сайте и затем мы с вами связываемся для уточнения деталей и консультации
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="steps__item wow fadeInRight" data-wow-delay="0.4s">
                                <div className="steps__num">
                                    <span>2.</span>
                                </div>    
                                <div className="steps__desc">
                                    <h4 className="steps__heading">Оплата удобным способом.</h4>
                                    <span>
                                        Оплачиваете удобным для вас способом
                                    </span>  
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="steps__item wow fadeInRight" data-wow-delay="0.6s">
                                <div className="steps__num">
                                    <span>3.</span>
                                </div>
                                <div className="steps__desc">
                                    <h4 className="steps__heading">Доставка по адресу.</h4>
                                    <span>
                                        Доставим ваш заказ в целости и сохранности
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="steps__item wow fadeInRight" data-wow-delay="0.8s">
                                <div className="steps__num">
                                    <span>4.</span>
                                </div>
                                <div className="steps__desc">
                                    <h4 className="steps__heading">Употребление по курсу.</h4>
                                    <span>
                                        Ваш консультант сопроваждает Вас в течение всего курса приема
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Steps;