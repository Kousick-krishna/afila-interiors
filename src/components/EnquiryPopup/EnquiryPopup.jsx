import { useEffect, useState } from "react";
import {
  validateEnquiry,
  sendEnquiryToWhatsApp,
} from "../../lib/whatsapp";
import "./EnquiryPopup.css";

function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [showClose, setShowClose] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
  const alreadyShown = sessionStorage.getItem(
    "afila-enquiry-popup-shown"
  );

  if (alreadyShown) {
    return;
  }

  const openTimer = setTimeout(() => {
    setOpen(true);

    sessionStorage.setItem(
      "afila-enquiry-popup-shown",
      "true"
    );
  }, 4000);

  return () => clearTimeout(openTimer);
}, []);

  useEffect(() => {
    if (!open) {
      setShowClose(false);
      return;
    }

    const closeTimer = setTimeout(() => {
      setShowClose(true);
    }, 5000);

    return () => clearTimeout(closeTimer);
  }, [open]);

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

  if (!open) {
    return null;
  }

  return (
    <div className="enquiry-overlay">

      <div className="enquiry-popup">

        {showClose && (
          <button
            className="enquiry-close"
            onClick={() => setOpen(false)}
            aria-label="Close enquiry form"
          >
            ×
          </button>
        )}

        <div className="enquiry-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
            alt="Afila Interiors"
          />
        </div>

        <div className="enquiry-content">

          <p className="enquiry-eyebrow">
            START YOUR PROJECT
          </p>

          <h2>
            Let's talk about
            <br />
            <em>your space.</em>
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="enquiry-row">

              <div className="enquiry-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <span>{errors.name}</span>
                )}
              </div>

              <div className="enquiry-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <span>{errors.phone}</span>
                )}
              </div>

            </div>


            <div className="enquiry-field">

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span>{errors.email}</span>
              )}

            </div>


            <div className="enquiry-field">

              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
              >
                <option value="">
                  Project Type
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
                <span>{errors.project}</span>
              )}

            </div>


            <div className="enquiry-field">

              <textarea
                name="message"
                rows="3"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <span>{errors.message}</span>
              )}

            </div>


            <button
              type="submit"
              className="enquiry-submit"
            >
              Send Enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EnquiryPopup;