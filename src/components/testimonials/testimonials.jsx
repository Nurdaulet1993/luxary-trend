import React from 'react';
import './testimonials.css';

import Testimonial from './testimonial';

const Testimonials = ({testimonials}) => {

    const elements = testimonials.map( item => {

        const {id, ...properties} = item;

        return(
            // <Testimonial key={item.key} img={item.img} text={item.text} auth={item.auth} from={item.from} stars = {item.stars} />
            <React.Fragment key={id}>
                <Testimonial {...properties}/>
            </React.Fragment>
        );
    })
    
    return(
        <section id="testimonial" className="testimonials">
            <div className="container">
                <div className="title">
                    <h4 className="title__heading wow fadeInDown">
                        Что говорят о продукте
                    </h4>
                </div>
                <div className="testimonials__content wow zoomIn" data-wow-delay="0.7s">
                    <div className="owl-carousel testimonials__carousel">
                        {elements}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Testimonials;