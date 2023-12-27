import React from 'react';
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import Sneaker from '../Assets/Sneaker.png';
import './Landingpage.css';

const LandingPage = () => {
    return <div class='bg-emerald-300'>
        <Navbar />
        <div className='hero-container'>
            <div className='text-container'>
                <div class='text-10xl mx-10 font-bebas'>A POWER THAT<br /> RUNS YOU</div>
                <div class='text-5xl font-thin mx-10 font-arquitecta'>Our reputatuin shines as brightly as our shoes.<br />Fashionable, quality, durable and the best shoes you <br /> will find for everyone</div>
                <Button />
            </div>
            <div className='image-container'>
                <img src={Sneaker} alt='sneaker' />
            </div>

        </div>
    </div>
}

export default LandingPage;