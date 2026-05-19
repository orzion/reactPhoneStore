function Contact(){
    return(
        <main className="main-contact">
            <form className="form-contact">
                <label for="name">Name <span className="req">*</span></label>
                <input className="contact-input" type="text" id="name" name="name" required=""></input>
                <label for="email">Email <span className="req">*</span></label>
                <input className="contact-input" type="email" id="email" name="email" required=""></input>
                <label for="message">Message <span className="req">*</span></label>
                <textarea className="contact-input" id="message" name="message" rows="5" required=""></textarea>
                <button type="submit" className="contact-sub">Submit</button>
            </form>
        </main>
    
    );
}

export default Contact;