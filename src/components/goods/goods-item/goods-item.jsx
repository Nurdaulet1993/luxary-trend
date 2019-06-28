import React, {Component} from 'react';
import { tsConstructorType } from '@babel/types';


export default class GoodsItem extends Component {
    constructor() {
        super()

        this.state = {
            order: false,
            info: false
        }
    }

    onInfoShow = () => {
        this.setState(({order, info}) => {
            return {
                info: true,
                order: false
            }
        })
    }

    onOrderShow = () => {
        this.setState(({order, info}) => {
            return {
                order: true,
                info: false
            }
        })
    }

    render() {
        const {order, info} = this.state;
        const {img, name, text, side, deleteGoods} = this.props;

        const view = (
            <div className="good__view">
                <img src={img} alt="product" className="good__image"/>
            </div>
        );

        const desc = (
            <div className="good__desc">
                <h4 className="good__heading">{name}</h4>
                <p className="good__text">
                    {text}
                </p>

                <div className="btn-group">
                    <span className="btn-call more-info" onClick={deleteGoods}>Подробнее</span>
                    <span className="btn-call" onClick = {this.onOrderShow}>Заказать</span>
                </div>
            </div>
        );

        const content = (side ==='left') 
                            ? [<React.Fragment key="1">{desc}</React.Fragment>, <React.Fragment key="2">{view}</React.Fragment>] 
                            : [<React.Fragment key="1">{view}</React.Fragment>, <React.Fragment key="2">{desc}</React.Fragment>];

        if(info) {
            alert('Information');
        }

        if(order) {
            alert('Order')
        }

        return(
            <div className="good wow slideInRight" data-wow-delay="0.7s">
                {content}
            </div>
        );
    }
}