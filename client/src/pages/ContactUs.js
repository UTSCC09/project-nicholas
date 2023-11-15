import "../css/ContactUs.css"

function ContactUs(){
    return(
        <div className="contactus_div">
            <h1>
                Contact Us
            </h1>
            <form className="contact_form">
                <div className="contact_item">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="contact_item">
                    <textarea
                        placeholder="Suggestions/Concerns"
                    />
                </div>
                <input
                    type="submit"
                />
            </form>
        </div>
        
    )
}

export default ContactUs;