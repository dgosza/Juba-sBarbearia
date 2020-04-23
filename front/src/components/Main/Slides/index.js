import React from 'react';

const Slides = () => {
    return (
        <div className="slider">
            <ul className="slides">
                <li>
                    <img src="#!" />
                    <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="#!" />
                    <div className="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="#!" /> 
                    <div className="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="#!" /> 
                    <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Slides