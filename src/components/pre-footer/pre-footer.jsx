import React from 'react';
import './pre-footer.css';

const PreFooter = () => {
    return(
        <section class="pre-footer">
            <div class="container">
                <a href="javascript:void(0)" class="pre-footer__social">
                    <i class="fab fa-facebook-square"></i>
                </a> 
                <a href="javascript:void(0)" class="pre-footer__social">
                    <i class="fab fa-instagram"></i>
                </a> 
                <a href="javascript:void(0)" class="pre-footer__social">
                    <i class="fab fa-twitter"></i>
                </a> 
                <a href="javascript:void(0)" class="pre-footer__social">
                    <i class="fab fa-vk"></i>
                </a> 
            </div>
        </section>
    );
}

export default PreFooter;