import { useState } from 'react'
import './Contact.css'
import mollyPhoto from '../assets/molly2.jpeg'

const Contact = () => {
    const [focused, setFocused] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        const form = e.target

        try {
            const response = await fetch('https://formspree.io/f/maqdarbr', {
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

                {/* Left: Photo */}
                <div className="contact-left">
                    <div className="contact-photo-wrapper">
                        <img src={mollyPhoto} alt="Molly" className="contact-photo" />
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-right">
                    <div className="contact-header">
                        <span className="contact-label">Contact</span>
                        <h2 className="contact-heading">Let's work together.</h2>
                        <p className="contact-subtext">
                            Tell me a little about your project and I'll be in touch within 1–2 business days.
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

                        <div className={`form-group ${focused === 'project' ? 'is-focused' : ''}`}>
                            <label htmlFor="project" className="form-label">What are you looking for?</label>
                            <select
                                id="project"
                                name="project"
                                className="form-input form-select"
                                required
                                onFocus={() => setFocused('project')}
                                onBlur={() => setFocused(null)}
                                defaultValue=""
                            >
                                <option value="" disabled>Select a service...</option>
                                <option value="starter">Starter — from $2,500</option>
                                <option value="studio">Studio — from $5,500</option>
                                <option value="signature">Signature — from $10,000</option>
                                <option value="illustration">Brand identity / illustration add-on</option>
                                <option value="unsure">Not sure yet</option>
                            </select>
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