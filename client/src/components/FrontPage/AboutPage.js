import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1 id="heading">About Us</h1>
            <div className="marquee-container">
                <marquee behavior="" direction="up" scrollamount="4">
                    <p>Welcome to Crimson Connect, a platform dedicated to connecting blood donors with those in urgent need. Our mission is to bridge the gap between blood donors and recipients by providing a seamless, secure, and efficient system for blood donation.</p>
                    <h4>Our Vision</h4>
                    <p>We aim to ensure that no one struggles to find life-saving blood in times of emergency. By leveraging technology, we make blood donation more accessible and convenient for both donors and recipients.</p>
                    <h4>How It Works?</h4>
                    <p>1-Easy Registration: Users can create an account and specify their blood type and location.</p>
                    <p>2-Find & Request Blood: Recipients can search for nearby donors or blood banks based on availability.</p>
                    <p>3-Secure & Verified: We ensure the authenticity of all users to create a safe and trustworthy network.</p>
                    <h4>Why Choose Us?</h4>
                    <p>✔ User-Friendly Interface – A simple and intuitive design for a seamless experience.</p>
                    <p>✔ Community-Driven – We empower individuals to make a difference in someone’s life.</p>
                    <h5>Join us in our mission to save lives—one donation at a time. Together, we can make a difference!</h5>
                </marquee>
            </div>
        </div>
    );
};

export default AboutPage;
