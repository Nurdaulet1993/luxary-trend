import React from 'react';

const Footer = () => {

    const data = new Date().getFullYear();

    return(
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <a href="javascript:void(0)" className="footer__logo">
                        <img src="./assets/img/logo-light.svg" alt="logotype" width="200"/>
                    </a>

                    <div className="footer-info">
                        <a href="javascript:void(0)" className="footer-info__item">
                            <i className="fas fa-map-marked-alt"></i>
                            <span>Адресс</span>
                            <span>г. Алматы, ул. Каргалинская 162а</span>
                        </a>
                        <a href="javascript:void(0)" className="footer-info__item">
                            <i className="fas fa-phone"></i>
                            <span>Телефон</span>
                            <span>+7 (778) 409 79 67</span>
                        </a>
                        <a href="javascript:void(0)" className="footer-info__item">
                            <i className="fas fa-envelope form-group__icon"></i>
                            <span>Почта</span>
                            <span>nurik93sat@gmail.com</span>
                        </a>
                    </div>

                    <div className="footer__author">
                        <a href="javascript:void(0)">
                            <span>Copyright ©</span>
                            {data}   
                            <span> by Satbergen Nurdaulet</span> 
                        </a>
                    </div>
                </div>
            </footer>

            

        </React.Fragment>
    );
}

export default Footer;