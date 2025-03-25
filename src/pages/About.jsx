import Header from '../components/Header';  

import './About.css';

import molly from '../assets/molly2.jpeg';    

const About = () => {   
    return (
        <div className="about">
            <img src={molly} alt="Molly" className="about-image"/>
            <h2 className="about-title">About Me</h2>
            <p className="about-text">I am a web developer who loves to create beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and Node.js. I am excited to continue learning and growing as a developer.</p>
        </div>
    );
}   

export default About;