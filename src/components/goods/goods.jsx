import React from 'react';
import './goods.css';

import GoodsItem from './goods-item';

const Goods = ({goods, deleteGoods}) => {
    
    const elements = goods.map((item, i) => {
        
        const side = (i % 2) ? 'left' : 'right';
        const {id, ...properties} = item;

        return(
            <React.Fragment key = {id}>
                <GoodsItem {...properties} side={side}  deleteGoods={() => deleteGoods(id)}/>
            </React.Fragment>
        );
    }) 

    return(
        <section id="goods-info" className="goods-info">
            <div className="container">
                <div className="title">
                    <h4 className="title__heading wow fadeInDown" data-wow-delay="0.2s">О продуктах</h4>
                </div>

                <div className="goods-info__content">
                    {elements}
                </div>
            </div>

            <img src="./assets/img/tube-left.png" alt="tube" className="tube-left wow slideInLeft"/>
            <img src="./assets/img/tube-right.png" alt="tube" className="tube-right wow slideInRight"/>
        </section>
    );
}

export default Goods;