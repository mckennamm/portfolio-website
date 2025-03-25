import './Contact.css'

import mollyPhoto from '../assets/molly4.jpeg'

const Contact = () => {
    return (
        <section className="contact-section">
        <div className="contact-photo">
            <img src={mollyPhoto} alt="Molly" className="contact-photo" />
        </div>
        <div className="contact-info">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-subtext">
                Have a question or an idea? I’d love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <form action="#" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-input" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-input message-box" placeholder="Write your message here..." required></textarea>
                </div>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
            
        </section>
    )
}

export default Contact
