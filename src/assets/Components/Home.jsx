import React from 'react';
import TestimonialCard from './widgets/TestimonialCard';

const Home = (props) => {
    return (
        <div>
            <div class="homeLanding section-with-btn" >
                <h1 style={{fontFamily: "bethElingston"}}>Bringing Your Dreams to Reality.</h1>
                <button class="btn-bottom-right">View Gallery</button>
            </div>
            <div class="displaySection">
                <h3 style={{fontFamily: "bethElingston"}}>Where creativity meets elegance</h3>
            </div>
            <div class="section-with-btn">
                <h3 class="header-quote" style={{fontFamily: "bethElingston"}}>"Here is a quote from the founder" - Rajani, Founder</h3>
                <button class="btn-bottom-right">Read More</button>
            </div>
            <div class="section-with-btn">
                {
                    props.data.map((testimony) => {
                        return(
                        <TestimonialCard data={testimony}></TestimonialCard>
                        )
                    })
                }
                <button class="btn-bottom-right">Read More</button>
            </div>
            <div>Social Media Link</div>
        </div>
    );
}

export default Home;