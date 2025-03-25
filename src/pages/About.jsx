import Header from '../components/Header';
import './About.css';
import molly from '../assets/molly2.jpeg';    

const About = () => {   
    return (
        <div className="about">
            <img src={molly} alt="Molly" className="about-image"/>
            <h2 className="about-title">About Me</h2>
            <p className="about-text">Hey! I'm Molly, a web developer who loves to create beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and Node.js. I am excited to continue learning and growing as a developer.</p>
            <p className="about-text">In my free time, I enjoy hiking, reading, and spending time with my dog. I am always looking for new challenges and opportunities to expand my skills.</p>

            <h3 className="about-subtitle">My Journey</h3>
            <p className="about-text">I started my journey in web development a few years ago when I decided to take a coding bootcamp. Since then, I have been working on various projects and continuously learning new technologies.</p>
            <p className="about-text">I have a passion for creating user-friendly and accessible websites that provide a great experience for users. I believe that good design and functionality go hand in hand, and I strive to achieve both in my work.</p>
            <p className="about-text">I am currently looking for opportunities to work on exciting projects and collaborate with other developers. I am open to both remote and in-person positions.</p>

            <h3 className="about-subtitle">Skills & Approach</h3>
            <p className="about-text">I have experience with a variety of technologies and frameworks, including:</p>
            <ul className="about-skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Node.js</li>
            </ul>

            <p className="about-text">I am always eager to learn new technologies and improve my skills. I enjoy working in a collaborative environment and believe that teamwork is essential for success.</p>
            <p className="about-text">My approach to web development is user-centered, meaning that I always keep the end user in mind when designing and building websites. I believe that a good user experience is key to the success of any website.</p>

            <h3 className="about-subtitle">What I'm looking for</h3>
            <p className="about-text">I am currently looking for opportunities to work on exciting projects and collaborate with other developers. I am open to both remote and in-person positions.</p>
            <p className="about-text">If you are looking for a passionate and dedicated web developer to join your team, please feel free to reach out to me. I would love to hear from you!</p>
            <p className="about-text">Thank you for taking the time to read my about me page. I hope to connect with you soon!</p>

            <h3 className="about-subtitle">Fun Facts!</h3>
            <ul className="about-facts">
                <li>I love hiking and exploring the outdoors.</li>
                <li>I am a huge fan of sci-fi movies and books.</li>
                <li>I have two cats named Ducky and Cosmo who are my best friends.</li>
                <li>I enjoy cooking and trying out new recipes.</li>
                <li>I am a coffee enthusiast and love trying out different coffee shops.</li>
                <li>I have a passion for photography and love capturing moments.</li>
                <li>I enjoy traveling and exploring new places.</li>
                <li>I enjoy learning new languages. I've taken years of Japanese language lessons, French lessons, and some Italian.</li>
                <li>I am a big fan of board games and love playing with friends.</li>
                <li>I enjoy listening to music and discovering new artists.</li>
                <li>I love learning new things and expanding my knowledge.</li>
                <li>I am a huge fan of animals and love spending time with them.</li>
                <li>I enjoy painting and creating art in my free time.</li>
                <li>I love spending time with my family and friends.</li>
                <li>I am a big fan of puzzles and enjoy solving them.</li>
            </ul>
        </div>
    );
}

export default About;
