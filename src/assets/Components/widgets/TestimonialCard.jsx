import React from 'react';

const TestimonialCard = (props) => {
    return (
        <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
            <h5 class="card-title">{props.data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{props.data.eventType}, {props.data.year}</h6>
            <p class="card-text">{props.data.testimony}</p>
        </div>
        </div>
    );
}

export default TestimonialCard;