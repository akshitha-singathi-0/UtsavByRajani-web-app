import React from 'react';
import Carousel from './widgets/Carousel';
import TestimonialCard from './widgets/TestimonialCard';

import testimony_data from '../data/testimonies.json'

const Home = () => {
    return (
        <div>
            <div>
                <h1>Compelling Headline</h1>
                <Carousel></Carousel>
                <button>View Gallery</button>
            </div>
            <div>
                <h3>Engaging Subheading</h3>
            </div>
            <div>
                <p>Here is a mini paragraph that tells our story.</p>
                <button>Read More</button>
            </div>
            <div>
                {
                    testimony_data.map((testimony) => {
                        return(
                        <TestimonialCard data={testimony}></TestimonialCard>
                        )
                    })
                }
                <button>Read More</button>
            </div>
            <div>Social Media Link</div>
        </div>
    );
}

export default Home;