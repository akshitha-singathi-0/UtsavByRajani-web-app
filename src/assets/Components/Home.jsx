import React from 'react';
import TestimonialCard from './widgets/TestimonialCard';

const Home = (props) => {
    return (
        <div class="wrapper">
            <div class="homeLanding section-with-btn" >
                <h1 style={{fontFamily: "happyTime", fontSize: "700%", color:"white", paddingInline: "2%"}}>Designing Dreams, Decorating Experiences</h1>
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
                    float: "right", paddingLeft: "5%"}}>From intimate gathering to grand affairs, our custom decor solutions set the stage for unforgettable celebrations</h3></div>
            </div>

            <div class="section-with-btn" style={{backgroundColor: "grey", paddingTop: "5%", paddingBottom: "5%"}}>
                <h3 class="header-quote" style={{fontFamily: "happyTime", 
                    paddingInline: "5%"}}>"At Utsav by Rajani, we believe every moment deserves to be extraordinary--our team is passionate to ensure your memories are all the more magical."<br></br>- Rajani, Founder</h3>
                <button class="btn-bottom-right">Read More</button>
            </div>
            <div class="section-with-btn">
                <h4>Happy Clients!</h4>
                {
                    props.data.map((testimony) => {
                        return(
                        <TestimonialCard data={testimony}></TestimonialCard>
                        )
                    })
                }
                <button class="btn-bottom-right">Read More</button>
            </div>
        </div>
    );
}

export default Home;