import React from 'react';
import './family.css';

import FamilyItem from './family-item';

const Family = ({family}) => {
    
    const elements = family.map(item => {
        const {id, ...properties} = item;

        return(
            <React.Fragment key={id}>
                 <FamilyItem {...properties}/>
            </React.Fragment>
        );
    })

    return(
        <section className="family">
            <div className="container">
                <div className="title title-light">
                    <h4 className="title__heading wow fadeInDown">ДОКАЗАННАЯ ПОЛЬЗА</h4>
                </div>

                <div className="family__content">
                    <ul className="family__list">
                        {/* <li className="wow jackInTheBox">
                            Не имеет ограничений по возрасту
                        </li>
                        <li className="wow jackInTheBox">
                            Не имеет противопоказаний
                        </li>
                        <li className="wow jackInTheBox">
                            Совместим с любым лекарственным препаратом
                        </li>
                        <li className="wow jackInTheBox">
                            Не является БАД-ом и лекарством
                        </li>
                        <li className="wow jackInTheBox">
                            Передозировка отсутствует
                        </li>
                        <li className="wow jackInTheBox">
                            Натуральный продукт, не содержит ГМО
                        </li>
                        <li className="wow jackInTheBox">
                            Полезные для организма элементы из 189 природных компонентов
                        </li>
                        <li className="wow jackInTheBox">
                            Не имеет побочных действий
                        </li>
                        <li className="wow jackInTheBox">
                            Не имеет ограничений по возрасту
                        </li>
                        <li>
                            <FamilyItem/>
                        </li> */}

                        {elements}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Family;