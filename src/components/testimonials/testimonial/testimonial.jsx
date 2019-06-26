import React from 'react';

const Testimonial = ({img, text, auth, from, stars}) => {

    const testimonialStars = [];

    for(let i = 0; i < stars; i++) {
        testimonialStars.push(
            <i key= {i} className="fas fa-star"></i>
        );
    }

    return(
        <div className="testimonial">
            <div className="testimonial__icon">
                <img src={ img } alt="avatar"/>
            </div>
            <div className="testimonial__text">
                <span>
                    { text }
                </span>
            </div>
            <div className="testimonial__author">
                <span>{ auth }</span>
            </div>
            <div className="testimonial__location">
                <span>{ from }</span>
            </div>
            <div className="testimonial__raiting">
                {testimonialStars}
            </div>
        </div>
    );
}

export default Testimonial;