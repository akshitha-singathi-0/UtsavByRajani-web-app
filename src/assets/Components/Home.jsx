import React from 'react';
import TestimonialCard from './widgets/TestimonialCard';

const Home = (props) => {
    return (
        <div>
            <div class="homeLanding section-with-btn" >
                <h1 style={{fontFamily: "happyTime", fontSize: "550%", color:"white"}}>Bring Your Dreams to Reality.</h1>
                <button class="btn-bottom-right">View Gallery</button>
            </div>

            
            <div class="displaySection" style={{
                display: "flex",
                alignItems: "center",
            }}>
                <div style={{  backgroundColor: "grey",
                    float: "left",
                    height: "30vh",
                    width: "30vw"}}></div>
                <div><h3 style={{fontFamily: "happyTime", 
                    float: "right"}}>Where creativity meets elegance</h3></div>
            </div>

            <div class="section-with-btn">
                <h3 class="header-quote" style={{fontFamily: "happyTime"}}>"Here is a quote from the founder" - Rajani, Founder</h3>
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