import React from 'react';

const About = (props) => {
    return (
        <div>
            <h1 class="pageHeader">Our Story</h1>
            <div>
                <div style={{  backgroundColor: "grey",
                    float: "left",
                    height: "50vh",
                    width: "20vw"}}>
                </div>
                <div>
                    <p>{props.data.ourStory}</p>
                </div>
            </div>
        </div>
    );
}

export default About;