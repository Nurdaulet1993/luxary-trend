import React from 'react';
import './modal-window.css';

const ModalWindow = () => {
    return(
        <div id="modal-1" className="modal-window">
            <div className="modal-window__content slideInDown">
                <h4 className="modal-window__heading">Получите консультацию специалиста, ответим на все интересующие вопросы</h4>
                <form autoComplete="off">

                    <div className="modal-group">
                        <i className="fas fa-user-alt"></i>
                        <div className="modal-group__wrap">
                            <input type="text" name="name" placeholder="Имя" className="modal-group__input"/> 
                        </div>
                    </div>

                    <div className="modal-group">
                        <i className="fas fa-envelope form-group__icon"></i>
                        <div className="modal-group__wrap">
                            <input type="text" name="name" placeholder="Email" className="modal-group__input"/> 
                        </div>
                    </div>

                    <div className="modal-group">
                        <i className="fas fa-phone"></i>
                        <div className="modal-group__wrap">
                            <input type="text" name="name" placeholder="Телефон" className="modal-group__input"/> 
                        </div>
                    </div>

                    <div className="modal-group">
                        <i className="fas fa-align-justify"></i>
                        <div className="modal-group__wrap">
                            <textarea name="text" id="" className="modal-group__text" placeholder="Введите текст сообщения"></textarea>
                        </div>
                    </div>
                    
                    
                        
                    <div className="modal-window__btn">
                        <button className="btn-call">Получить консультацию</button>
                    </div>
                </form>     
            </div>
        </div>
    );
}

export default ModalWindow;