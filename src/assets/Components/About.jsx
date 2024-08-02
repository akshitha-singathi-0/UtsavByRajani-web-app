import React from 'react';

const About = (props) => {
    return (
        <div>
            <h3>Our Story</h3>
            <p>{props.data.ourStory}</p>
        </div>
    );
}

export default About;