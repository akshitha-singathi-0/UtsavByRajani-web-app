import React from 'react';
import TestimonialCard from './widgets/TestimonialCard';

const Home = (props) => {
    return (
        <div>
            <div>
                <h1>Compelling Headline</h1>
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
                    props.data.map((testimony) => {
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