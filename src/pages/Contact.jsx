import { useState } from 'react'
import './Contact.css'
import mollyPhoto from '../assets/molly4.jpeg'

const Contact = () => {
    const [focused, setFocused] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        const form = e.target

        try {
            const response = await fetch('https://formspree.io/f/maqdarbr', {  // ← replace xxxxxxxx with your Formspree ID
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })

            if (response.ok) {
                setSubmitted(true)
                form.reset()
                setTimeout(() => setSubmitted(false), 4000)
            } else {
                setError('Something went wrong. Please try again.')
            }
        } catch {
            setError('Something went wrong. Please try again.')
        }
    }

    return (
        <section className="contact-section">
            <div className="contact-inner">

                {/* Left: Photo + caption */}
                <div className="contact-left">
                    <div className="contact-photo-wrapper">
                        <img src={mollyPhoto} alt="Molly" className="contact-photo" />  
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-right">
                    <div className="contact-header">
                        <span className="contact-label">Contact</span>
                        <h2 className="contact-heading">Get In Touch</h2>
                        <p className="contact-subtext">
                            Have a question or an idea? I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
                        </p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className={`form-group ${focused === 'name' ? 'is-focused' : ''}`}>
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Your name"
                                required
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused(null)}
                            />
                            <span className="form-line" />
                        </div>

                        <div className={`form-group ${focused === 'email' ? 'is-focused' : ''}`}>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="your@email.com"
                                required
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                            />
                            <span className="form-line" />
                        </div>

                        <div className={`form-group ${focused === 'message' ? 'is-focused' : ''}`}>
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-input message-box"
                                placeholder="Tell me about your project..."
                                required
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused(null)}
                            />
                            <span className="form-line" />
                        </div>

                        <button type="submit" className={`contact-button ${submitted ? 'is-sent' : ''}`}>
                            <span className="btn-text">{submitted ? 'Message Sent ✓' : 'Send Message'}</span>
                            <span className="btn-arrow">→</span>
                        </button>

                        {error && <p className="form-error">{error}</p>}
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact