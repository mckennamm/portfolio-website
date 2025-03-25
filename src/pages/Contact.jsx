import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-section">
            <h2 className="contact-heading">Contact Me</h2>
            <form action="#" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-input message-box"></textarea>
                </div>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </section>
    )
}

export default Contact
