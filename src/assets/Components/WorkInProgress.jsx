import React from 'react';

const combinedStyle = {
    display: "flex",
    justifyContent: "center",
};

const WorkInProgress = () => {
    return(
        <div style={combinedStyle}>
            <p>Oops...this webpage is still under construction.</p>
        </div>
    );
}

export default WorkInProgress;