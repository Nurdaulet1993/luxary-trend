import React from 'react';

const Widgets = () => {
    return(
        <div class="widgets  wow slideInLeft">
            <div class="widget phone wow slideInRight" onclick="">
                <div class="widget__icon">
                    <i class="fas fa-phone-volume"></i>
                </div>
                <a href="tel:+77784097967" class="widget__label">+7 (778) 409 79 67</a>
            </div>
            <div class="widget whatsapp wow slideInLeft" onclick="">
                <div class="widget__icon">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <a href="https://wa.me/77784097967" class="widget__label">Напиши мне</a>
            </div>
        </div>
    );
}

export default Widgets;