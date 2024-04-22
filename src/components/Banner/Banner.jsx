import React from 'react';
import User from '../../images/user.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h1>One Step <br /> Closer To Your <br />
                 <span className='purple'>Dream Job</span>
                </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button>Get Started</button>
            </div>
            <img src={User} alt="" />
        </div>
    );
};

export default Banner;