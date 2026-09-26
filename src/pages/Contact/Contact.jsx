import { useState } from "react";
import {
  validateEnquiry,
  sendEnquiryToWhatsApp,
} from "../../lib/whatsapp";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  project: "",
  message: "",
});

const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
  const { name, value } = event.target;

  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }));

  setErrors((previous) => ({
    ...previous,
    [name]: "",
  }));
};


const handleSubmit = (event) => {
  event.preventDefault();

  const validationErrors =
    validateEnquiry(formData);

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  sendEnquiryToWhatsApp(formData);
};

  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">
        <div className="container">

          <p className="contact-eyebrow">
            GET IN TOUCH
          </p>

          <div className="contact-hero-content">

            <h1>
              Let's talk about
              <br />
              <em>your space.</em>
            </h1>

            <p>
              Tell us a little about your project and
              we'll get back to you to discuss the next step.
            </p>

          </div>

        </div>
      </section>


      {/* CONTACT CONTENT */}

      <section className="contact-main">

        <div className="container">

          <div className="contact-grid">

            {/* DETAILS */}

            <div className="contact-details">

              <div className="contact-detail">

                <span>EMAIL</span>

                <a href="mailto:hello@afilainteriors.com">
                  hello@afilainteriors.com
                </a>

              </div>


              <div className="contact-detail">

                <span>PHONE</span>

                <a href="tel:+919003835891">
                  +91 90038 35891
                </a>

              </div>


              <div className="contact-detail">

                <span>STUDIO</span>

                <p>
                  Chennai,
                  <br />
                  Tamil Nadu, India
                </p>

              </div>


              <div className="contact-detail">

                <span>FOLLOW</span>

                <a href="#">
                  Instagram →
                </a>

              </div>

            </div>


            {/* FORM */}

            <div className="contact-form-wrapper">

              <p className="contact-form-label">
                START A CONVERSATION
              </p>

              {submitted ? (

                <div className="contact-success">

                  <span>THANK YOU</span>

                  <h2>
                    Your enquiry
                    <br />
                    has been received.
                  </h2>

                  <p>
                    We'll get back to you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Enquiry
                  </button>

                </div>

              ) : (

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form-row">

                    <div className="contact-field">

                      <label htmlFor="name">
                        Your Name
                      </label>

                      <input
  id="name"
  name="name"
  type="text"
  placeholder="Enter your name"
  value={formData.name}
  onChange={handleChange}
/>

{errors.name && (
  <span className="contact-error">
    {errors.name}
  </span>
)}

                    </div>


                    <div className="contact-field">

                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <input
  id="phone"
  name="phone"
  type="tel"
  placeholder="+91 9876543210"
  value={formData.phone}
  onChange={handleChange}
/>

{errors.phone && (
  <span className="contact-error">
    {errors.phone}
  </span>
)}

                    </div>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
  id="email"
  name="email"
  type="email"
  placeholder="you@example.com"
  value={formData.email}
  onChange={handleChange}
/>

{errors.email && (
  <span className="contact-error">
    {errors.email}
  </span>
)}

                  </div>


                  <div className="contact-field">

                    <label htmlFor="project">
                      Project Type
                    </label>

                    <select
  id="project"
  name="project"
  value={formData.project}
  onChange={handleChange}
>
  <option value="" disabled>
    Select project type
  </option>

  <option value="Residential Interiors">
    Residential Interiors
  </option>

  <option value="Apartment Interiors">
    Apartment Interiors
  </option>

  <option value="Villa Interiors">
    Villa Interiors
  </option>

  <option value="Modular Kitchen">
    Modular Kitchen
  </option>

  <option value="Commercial Interiors">
    Commercial Interiors
  </option>

  <option value="Other">
    Other
  </option>
</select>

{errors.project && (
  <span className="contact-error">
    {errors.project}
  </span>
)}

                  </div>


                  <div className="contact-field">

                    <label htmlFor="message">
                      Tell Us About Your Project
                    </label>

                    <textarea
  id="message"
  name="message"
  rows="5"
  placeholder="Tell us about your space, requirements and ideas..."
  value={formData.message}
  onChange={handleChange}
/>

{errors.message && (
  <span className="contact-error">
    {errors.message}
  </span>
)}

                  </div>


                  <button
  type="submit"
  className="contact-submit"
>
  Send Enquiry
  <span>→</span>
</button>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* MAP */}

      <section className="contact-map-section">

        <div className="container">

          <div className="contact-map-header">

            <div>

              <span>
                VISIT OUR STUDIO
              </span>

              <h2>
                Come say
                <br />
                <em>hello.</em>
              </h2>

            </div>

            <p>
              Our studio location will be added
              once the final address is provided.
            </p>

          </div>


          <div className="contact-map">

            <div className="contact-map-placeholder">

              <span>GOOGLE MAPS</span>

              <p>
                Studio location will be added here
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;