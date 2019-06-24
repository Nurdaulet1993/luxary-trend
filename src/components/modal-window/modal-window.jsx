import React from 'react';
import './modal-window.css';

const ModalWindow = () => {
    return(
        <div id="modal-1" class="modal-window">
            <div class="modal-window__content slideInDown">
                <h4 class="modal-window__heading">Получите консультацию специалиста, ответим на все интересующие вопросы</h4>
                <form autocomplete="off">

                    <div class="modal-group">
                        <i class="fas fa-user-alt"></i>
                        <div class="modal-group__wrap">
                            <input type="text" name="name" placeholder="Имя" class="modal-group__input"/> 
                        </div>
                    </div>

                    <div class="modal-group">
                        <i class="fas fa-envelope form-group__icon"></i>
                        <div class="modal-group__wrap">
                            <input type="text" name="name" placeholder="Email" class="modal-group__input"/> 
                        </div>
                    </div>

                    <div class="modal-group">
                        <i class="fas fa-phone"></i>
                        <div class="modal-group__wrap">
                            <input type="text" name="name" placeholder="Телефон" class="modal-group__input"/> 
                        </div>
                    </div>

                    <div class="modal-group">
                        <i class="fas fa-align-justify"></i>
                        <div class="modal-group__wrap">
                            <textarea name="" id="" class="modal-group__text" placeholder="Введите текст сообщения"></textarea>
                        </div>
                    </div>
                    
                    
                        
                    <div class="modal-window__btn">
                        <button class="btn-call">Получить консультацию</button>
                    </div>
                </form>     
            </div>
        </div>
    );
}

export default ModalWindow;