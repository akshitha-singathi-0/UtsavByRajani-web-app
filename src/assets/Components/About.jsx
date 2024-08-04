import React from 'react';

const About = (props) => {
    return (
        <div>
            <h3>Our Story</h3>
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