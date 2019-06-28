import React from 'react';

const Footer = () => {

    const data = new Date().getFullYear();

    return(
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <a href="#hero" className="footer__logo">
                        <img src="./assets/img/logo-light.svg" alt="logotype" width="200"/>
                    </a>

                    <div className="footer-info">
                        <div className="footer-info__item">
                            <i className="fas fa-map-marked-alt"></i>
                            <span>Адресс</span>
                            <span>г. Алматы, ул. Каргалинская 162а</span>
                        </div>
                        <div className="footer-info__item">
                            <i className="fas fa-phone"></i>
                            <span>Телефон</span>
                            <span>+7 (778) 409 79 67</span>
                        </div>
                        <div className="footer-info__item">
                            <i className="fas fa-envelope form-group__icon"></i>
                            <span>Почта</span>
                            <span>nurik93sat@gmail.com</span>
                        </div>
                    </div>

                    <div className="footer__author">
                        <div>
                            <span>Copyright ©</span>
                            {data}   
                            <span> by Satbergen Nurdaulet</span> 
                        </div>
                    </div>
                </div>
            </footer>

            

        </React.Fragment>
    );
}

export default Footer;