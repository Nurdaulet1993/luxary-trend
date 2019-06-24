import React from 'react';
import './goods.css';

const Goods = () => {
    return(
        <section id="goods-info" className="goods-info">
            <div className="container">
                <div className="title">
                    <h4 className="title__heading wow fadeInDown" data-wow-delay="0.2s">О продуктах</h4>
                </div>

                <div className="goods-info__content">
                    <div className="good wow slideInRight" data-wow-delay="0.7s">
                        <div className="good__view">
                            <img src="./assets/img/product-1.jfif" alt="product" className="good__image"/>
                        </div>
                        <div className="good__desc">
                            <h4 className="good__heading">PERFECTO LUX</h4>
                            <p className="good__text">
                                Nano balsam “PERFECTO LUX”- высококонцентрированный продукт, который представляет собой комплекс целебных природных ингредиентов. 
                                Полностью сохранены свойства натурального продукта. Оказывает омолаживающее, общеукрепляющее, 
                                тонизирующее действие. Нормализует обмен веществ и энергетический обмен. 
                                Повышает умственную и физическую активность. Оказывает положительное действие на состояние кожи и волос. 
                                Применяется как вспомогательное средство для предотвращения преждевременного старения организма, 
                                при истощении, слабости, после перенесенных заболеваний.
                            </p>

                            <div className="btn-group">
                                <a href="javascript:void(0)" className="btn-call more-info">Подробнее</a>
                                <a href="javascript:void(0)" className="btn-call">Заказать</a>
                            </div>
                        </div>
                    </div>
                    <div className="good wow slideInLeft " data-wow-delay="0.7s">
                        <div className="good__desc">
                            <h4 className="good__heading">PERFECTO LUX</h4>
                            <p className="good__text">
                                    Nano balsam “PERFECTO LUX”- высококонцентрированный продукт, который представляет собой комплекс целебных природных ингредиентов. 
                                    Полностью сохранены свойства натурального продукта. Оказывает омолаживающее, общеукрепляющее, 
                                    тонизирующее действие. Нормализует обмен веществ и энергетический обмен. 
                                    Повышает умственную и физическую активность. Оказывает положительное действие на состояние кожи и волос. 
                                    Применяется как вспомогательное средство для предотвращения преждевременного старения организма, 
                                    при истощении, слабости, после перенесенных заболеваний.
                            </p>

                            <div className="btn-group">
                                <a href="javascript:void(0)" className="btn-call more-info">Подробнее</a>
                                <a href="javascript:void(0)" className="btn-call">Заказать</a>
                            </div>
                        </div>

                        <div className="good__view">
                            <img src="./assets/img/product-2.jfif" alt="product" className="good__image"/>
                        </div>
                    </div>
                    <div className="good wow slideInRight" data-wow-delay="0.7s">
                        <div className="good__view">
                            <img src="./assets/img/product-3.jpg" alt="product" className="good__image"/>
                        </div>
                        <div className="good__desc">
                            <h4 className="good__heading">PERFECTO LUX</h4>
                            <p className="good__text">
                                Nano balsam “PERFECTO LUX”- высококонцентрированный продукт, который представляет собой комплекс целебных природных ингредиентов. 
                                Полностью сохранены свойства натурального продукта. Оказывает омолаживающее, общеукрепляющее, 
                                тонизирующее действие. Нормализует обмен веществ и энергетический обмен. 
                                Повышает умственную и физическую активность. Оказывает положительное действие на состояние кожи и волос. 
                                Применяется как вспомогательное средство для предотвращения преждевременного старения организма, 
                                при истощении, слабости, после перенесенных заболеваний.
                            </p>

                            <div className="btn-group">
                                <a href="javascript:void(0)" className="btn-call more-info">Подробнее</a>
                                <a href="javascript:void(0)" className="btn-call">Заказать</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src="./assets/img/tube-left.png" alt="tube" className="tube-left wow slideInLeft"/>
            <img src="./assets/img/tube-right.png" alt="tube" className="tube-right wow slideInRight"/>
        </section>
    );
}

export default Goods;