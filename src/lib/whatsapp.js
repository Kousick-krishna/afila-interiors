const OWNER_WHATSAPP = "919003835891";

export function validateEnquiry(data) {
  const errors = {};

  const name = data.name?.trim() || "";
  const phone = data.phone?.trim() || "";
  const email = data.email?.trim() || "";
  const project = data.project?.trim() || "";
  const message = data.message?.trim() || "";

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  const cleanPhone = phone.replace(/[\s()-]/g, "");

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^(\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
    errors.phone = "Please enter a valid Indian phone number.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!project) {
    errors.project = "Please select a project type.";
  }

  if (!message) {
    errors.message = "Please tell us about your project.";
  } else if (message.length < 10) {
    errors.message =
      "Please provide a little more information.";
  }

  return errors;
}


export function sendEnquiryToWhatsApp(data) {
  const message = `
Hello Afila Interiors,

New Website Enquiry

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Project Type: ${data.project}

Project Details:
${data.message}

Sent from Afila Interiors website.
`.trim();

  const whatsappUrl =
    `https://wa.me/${OWNER_WHATSAPP}?text=` +
    encodeURIComponent(message);

  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
}