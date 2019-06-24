import React from 'react';
import './profit.css';

const Profit = () => {
    return(
        <section id="profit" className="profit">
            <div className="container">
                <div className="title">
                    <h4 className="title__heading wow fadeInDown">ДОКАЗАННАЯ ПОЛЬЗА</h4>
                </div>
                <div className="profit_content">
                    <img src="./assets/img/doctors2.png" alt="doctor" className="profit__image wow fadeInLeft" data-wow-delay="0.7s"/>

                    <div className="profit__desc wow fadeInRight" data-wow-delay="0.7s">
                        <h4 className="profit__heading">Доктор Леонгард Л. М.</h4>
                        <span className="profit__subtitle">Доктор медецины</span>

                        <p className="profit__text">
                            О результатах применения nano balsam на аппарате «ОМЕГА-М»
                            после диагностики на аппарате «ОМЕГА–М» восьми пациентов, 
                            которые  nano balsam обнаружилась следующая картина: 
                            все показатели функционального состояния повысились, 
                            то есть организм запустил программу омоложения.                     
                        </p>
                        <p className="profit__text">
                            Этот бальзам улучшает функциональное состояние организма за счет улучшения работы головного мозга, 
                            центрального отдела нервной системы, вегетативной регуляции органов. 
                            Происходит повышение компенсаторных возможностей и саморегуляции, 
                            увеличение энергетического обеспечения  организма, улучшение состояния иммунной системы, 
                            приостановление процесса старения и перепрограммирование организма на омоложение.                                      
                        </p>
                    </div>
                </div>
            </div>
        </section> 
    ); 
}

export default Profit;