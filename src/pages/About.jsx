import Header from '../components/Header';
import './About.css';
import molly from '../assets/molly2.jpeg';    

const About = () => {   
    return (
        <div className="about">
            <a href="https://www.instagram.com/studio.molly.designs/">
            <img src={molly} alt="Molly" className="about-image"/>
            </a>

            <h2 className="about-title">About Me</h2>
            <p className="about-title-text">Hey! I'm Molly, a web developer who loves to create beautiful and functional websites. <br /> <br /> My path to web design wasn’t linear, but rather a winding trail through the wilderness—literally. With a background in Wilderness & Outdoor Therapy and Psychology, I’ve spent years helping people navigate their inner landscapes. Now, I bring that same sense of exploration, curiosity, and care to crafting digital spaces where stories unfold, ideas take root, and people feel at home. <br /><br />

I believe that websites, much like the best adventures, should be thoughtfully designed—inviting users to pause, explore, and experience a journey. Whether it’s breathing life into a brand’s vision or building an intuitive platform where communities thrive, I’m passionate about creating digital experiences that feel both playful and purposeful. <br /> <br /> When I’m not immersed in code or pixel-perfect layouts, you’ll likely find me soaking up sunshine on a trail, singing along to my favorite tunes, or dreaming up future adventures with my fiancé and our two mischievous cats. <br /> Let’s create something beautiful together—where creativity meets heart, and every click tells a story.</p>
            
            

            <h3 className="about-subtitle">My Journey</h3>
            <p className="about-text">
            The transition from guiding people through nature to navigating the digital landscape might seem like a leap, but for me, it felt like a natural next step. I’ve always been drawn to spaces where curiosity meets creativity, where challenges spark growth, and where thoughtful design can make people feel seen and understood. <br /> <br /> When I first dipped my toes into web design, I was captivated by the balance of structure and imagination. How numbers and symbols could build something both functional and beautiful, much like a well-marked trail that invites exploration. What began as a quiet curiosity quickly grew into excitement. I immersed myself in learning HTML, CSS, JavaScript, and React, and discovered that designing websites brings me the same joy I felt watching someone find their confidence in the wilderness: the magic of guiding someone toward something meaningful.<br /><br />Now, I’m dedicated to crafting digital spaces that are not only visually captivating but also intuitive and inviting... places where stories unfold, ideas flourish, and connection thrives. Each project is an opportunity to bring heart and intention to the digital world, and I’m excited to continue exploring this path with creativity and purpose.
            </p>

            <h3 className="about-subtitle">My Approach to Web Design</h3>
            <p className="about-text">At the heart of my process is a user-centered mindset. I design and build with empathy and careful thought, ensuring that every project I work on is not only visually appealing but also easy to navigate and meaningful to the people who interact with it. I thrive in collaborative environments where ideas flow, feedback is valued, and teamwork leads to solutions that are greater than the sum of their parts. <br /> <br /> Whether I’m refining a design, solving a tricky bug, or brainstorming creative solutions, I bring a blend of technical skill and thoughtful intention to every project. I believe that great websites tell a story—and I’m here to help make sure that story is told beautifully and with purpose.</p>
            

            <h3 className="about-subtitle">Skills & Expertise</h3>
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
       


            
            
            <h3 className="about-subtitle">What I'm looking for</h3>
                    <p className="about-text">I am currently looking for opportunities to work on exciting projects and collaborate with other developers. I am open to both remote and in-person positions.</p>
                    <p className="about-text">If you are looking for a passionate and dedicated web developer to join your team, please feel free to reach out to me. I would love to hear from you!</p>
                    <p className="about-text">Thank you for taking the time to read my about me page. I hope to connect with you soon!</p>


            <ul className="about-facts">
            <h3 className="about-subtitle">Fun Facts!</h3>
                <li>I have two gray cats named Ducky and Cosmo.</li>
                <li>I love photography and capturing moments.</li>
                <li>I enjoy learning new languages.</li>
                <li>I enjoy listening to music.</li>
                <li>I paint and create art.</li>
                <li>I love spending time with my family and friends.</li>
                <li>I am a big fan of puzzles and enjoy solving them.</li>
            </ul>
        </div>
    );
}

export default About;
