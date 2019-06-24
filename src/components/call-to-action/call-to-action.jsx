import React from 'react';
import './call-to-action.css';

const CallToAction = () => {
    return(
        <section className="call-to-action">
            <div className="container">
                <div className="call-to-action__content wow zoomIn">
                    <h4 className="call-to-action__heading">
                        Получите консультацию специалиста, ответим на все интересующие вопросы
                    </h4>

                    <form autoComplete="off">
                        <div className="form-group">
                            <i className="fas fa-user-alt"></i>
                            <div className="form-group__wrap">
                                <input type="text" name="name" placeholder="Имя" className="form-group__input"/> 
                            </div>
                        </div>
                        <div className="form-group">
                            <i className="fas fa-envelope form-group__icon"></i>
                            <div className="form-group__wrap">
                                <input type="text" name="name" placeholder="Имя" className="form-group__input"/> 
                            </div>
                        </div>
                        <div className="form-group">
                            <i className="fas fa-phone"></i>
                            <div className="form-group__wrap">
                                <input type="text" name="name" placeholder="Имя" className="form-group__input"/> 
                            </div>
                        </div>
                        
                        <button className="btn-call">Получить консультацию</button>
                        
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;