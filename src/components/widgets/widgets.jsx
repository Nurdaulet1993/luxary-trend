import React from 'react';

const Widgets = () => {
    return(
        <div className="widgets  wow slideInLeft">
            <div className="widget phone wow slideInRight">
                <div className="widget__icon">
                    <i className="fas fa-phone-volume"></i>
                </div>
                <a href="tel:+77784097967" className="widget__label">+7 (778) 409 79 67</a>
            </div>
            <div className="widget whatsapp wow slideInLeft">
                <div className="widget__icon">
                    <i className="fab fa-whatsapp"></i>
                </div>
                <a href="https://wa.me/77784097967" className="widget__label">Напиши мне</a>
            </div>
        </div>
    );
}

export default Widgets;