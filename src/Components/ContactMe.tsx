

const ContactMe = () => {
  return (
    <section className="contact-me" id="contact">
        <div className='inner-wrapper'>

    
        <div className="text w-50">

        <h2 className='hero-title'>Contact <span>Me</span></h2>
        <p>If you have any questions, feel free to reach out!</p>
            <form className="auth-form m--unset">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <br />
            <button type="submit">Send</button>
        </form>
</div>
<div className="touch-msg w-50">
    <h2 className='hero-title flip-item text--lg'>Get in <span>Touch</span></h2>
</div>
        </div>
    </section>
  )
}

export default ContactMe