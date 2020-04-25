import React from 'react';
import './style.css'
import BannerImage from '../../../assets/images/banner.jpg'

const Banner = (props) => {
    return (
        <div className="col s12 l12">
            <div className="parallax-container">
                <div className="parallax"><img src={BannerImage} /></div>
                <div className="container">
                    <div className="col s12 l12 textParallax">
                        <h3>Juba's Barbearia</h3>
                        <p>texto texto texto texto texto texto texto texto texto texto texto texto texto </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner;
