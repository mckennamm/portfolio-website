import Topper from '../components/Topper';  

import './About.css';


const About = () => {   
    return (
        <div className="about">
            <Topper />
            <h2 className="about-title">About Me</h2>
            <p className="about-text">I am a web developer who loves to create beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and Node.js. I am excited to continue learning and growing as a developer.</p>
        </div>
    );
}   

export default About;