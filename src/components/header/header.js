import React, {Component} from 'react';
import './header.css';

import NavLink from './nav-link';

export default class Header extends Component {
    render () {

        const {navLinks} = this.props;

        const elements = navLinks.map(item => {
            const {id, ...properties} = item;

            return(
                <React.Fragment key={id}>
                    <NavLink {...properties}/>
                </React.Fragment>
                
            );
        })
    
        return(
            <header className="header ">
                <div className="container">
                    <div className="header__navbar">
                        <a href="javascript:void(0)" className="logo header__logo">
                            <img src="./assets/img/logo-origin.svg" alt="logotype" width="200"/>
                        </a>
            
                        <nav>
                            <ul className="nav header__nav">
                                {/* <li className="nav__item"><a href="#hero" className="nav__link active">Главная</a></li>
                                <li className="nav__item"><a href="#goods-info" className="nav__link">О продукте</a></li>
                                <li className="nav__item"><a href="#profit" className="nav__link">Польза</a></li>
                                <li className="nav__item"><a href="#testimonial" className="nav__link">Отзывы</a></li>
                                <li className="nav__item"><a href="javascript:void(0)" className="nav__link">Контакты</a></li> */}
                                {elements}
                                <li className="nav__item">
                                    <div className="social-group">
                                        <div className="social social-facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </div>
                                        <div className="social social-insta">
                                            <i className="fab fa-instagram"></i>
                                        </div>
                                        <div className="social social-vk">
                                            <i className="fab fa-vk"></i>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </nav>
            
                        <div className="header__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    
                </div>
        </header>
        );
    }
}