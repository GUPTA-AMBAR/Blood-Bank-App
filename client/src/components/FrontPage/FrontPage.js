import React from 'react';
import HeaderForFrontPage from './HeaderForFrontPage';
import CarouselComponent from './Carousel';
import Footer from './Footer';
import Cards from './Cards';
import AboutPage from './AboutPage';
import BloodDonationChart from './BloodDonationChart';
import LivesLostChart from './BloodLost';

const FrontPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderForFrontPage />
            <div style={{ flex: 1, textAlign: "center", marginTop: '80px' }}>
                <h3 id='move'>
                    <marquee behavior="" direction="right">Be the reason someone gets a second chance at life. 🏥</marquee>
                </h3>
            </div>
            <div>
                <CarouselComponent />
            </div>
            <AboutPage />
            <hr />
            <Cards />
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ezafVzfJw60?si=6Hls5BjjmPrYxzz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                <BloodDonationChart />
            </div>
            <div>
                <LivesLostChart/>
            </div>
            <Footer />
        </div>
    );
};

export default FrontPage;
