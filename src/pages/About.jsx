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
                        
            

            <h2 className="about-title">My Background</h2>
            <h3 className="about-subtitle">🍃 My Journey 🍃</h3>
            <p className="about-text">
            The transition from guiding people through nature to navigating the digital landscape might seem like a leap, but for me, it felt like a natural next step. I’ve always been drawn to spaces where curiosity meets creativity, where challenges spark growth, and where thoughtful design can make people feel seen and understood. <br /> <br /> When I first dipped my toes into web design, I was captivated by the balance of structure and imagination. How numbers and symbols could build something both functional and beautiful, much like a well-marked trail that invites exploration. What began as a quiet curiosity quickly grew into excitement. I immersed myself in learning HTML, CSS, JavaScript, and React, and discovered that designing websites brings me the same joy I felt watching someone find their confidence in the wilderness: the magic of guiding someone toward something meaningful.<br /><br />Now, I’m dedicated to crafting digital spaces that are not only visually captivating but also intuitive and inviting... places where stories unfold, ideas flourish, and connection thrives. Each project is an opportunity to bring heart and intention to the digital world, and I’m excited to continue exploring this path with creativity and purpose.
            </p>

            <h3 className="about-subtitle">🌱 My Approach to Web Design 🌱</h3>
            <p className="about-text">At the heart of my process is a user-centered mindset. I design and build with empathy and careful thought, ensuring that every project I work on is not only visually appealing but also easy to navigate and meaningful to the people who interact with it. I thrive in collaborative environments where ideas flow, feedback is valued, and teamwork leads to solutions that are greater than the sum of their parts. <br /> <br /> Whether I’m refining a design, solving a tricky bug, or brainstorming creative solutions, I bring a blend of technical skill and thoughtful intention to every project. I believe that great websites tell a story—and I’m here to help make sure that story is told beautifully and with purpose.</p>
            

            <h3 className="about-subtitle"> 🌿 Skills & Expertise 🌿</h3>
            <p className="about-text">I have experience with a variety of technologies and frameworks, including:</p>
            <ul className="about-skills">
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Redux, Vite, Tailwind CSS, Bootstrap</li>
                <li><strong>Version Control & Collaboration:</strong> Git, GitHub</li>
                <li><strong>Backend & Tools</strong> Firebase, Node.js, Vercel (deploying websites)</li>
            </ul>

            <p className="about-text">For me, web development is about more than just tools and frameworks—it’s about creating digital experiences that feel intuitive, engaging, and accessible. I’m always eager to expand my skill set and stay curious about emerging technologies, believing that continuous learning keeps my work fresh and inspired.</p>






            
            <h2 className="about-title">🪴 Future-Minded 🪴</h2>
            <h3 className="about-subtitle">What I'm looking for</h3>
                    <p className="about-text">I am currently looking for opportunities to work on exciting projects and collaborate with other developers. I am open to both remote and in-person positions.</p>
                    <p className="about-text">If you are looking for a passionate and dedicated web developer to join your team, please feel free to reach out to me. I would love to hear from you!</p>
                    <p className="about-text">Thank you for taking the time to read my about me page. I hope to connect with you soon!</p>

            <h2 className="about-title">Things I love:</h2>
            <ul className="about-facts">
                <li>My two gray cats named Ducky and Cosmo.</li>
                <li>Photography & capturing moments.</li>
                <li>Learning new languages.</li>
                <li>Listening to music.</li>
                <li>Painting & creating art</li>
                <li>Spending time with my family & friends.</li>
                <li>Puzzles & problem solving.</li>
                <li>Grdening & growing things.</li>
                <li>Hiking & exploring nature.</li>

            </ul>
        </div>
    );
}

export default About;
