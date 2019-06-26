import React from 'react';
import './pre-footer.css';

const PreFooter = () => {
    return(
        <section id="pre-footer" className="pre-footer">
            <div className="container">
                <a href="javascript:void(0)" className="pre-footer__social">
                    <i className="fab fa-facebook-square"></i>
                </a> 
                <a href="javascript:void(0)" className="pre-footer__social">
                    <i className="fab fa-instagram"></i>
                </a> 
                <a href="javascript:void(0)" className="pre-footer__social">
                    <i className="fab fa-twitter"></i>
                </a> 
                <a href="javascript:void(0)" className="pre-footer__social">
                    <i className="fab fa-vk"></i>
                </a> 
            </div>
        </section>
    );
}

export default PreFooter;