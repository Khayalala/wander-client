import React from "react";
import "../styles/_contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Me</h1>
        <p>
          If you’d like to reach out, here’s how you can get in touch with me:
        </p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:khayala.jafar@gmail.com">khayala.jafar@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/khayala-jafarova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/khayala-jafarova
            </a>
          </li>
          <li>
            <strong>Discord:</strong> khayalajafarova
          </li>
        </ul>
        <p>
          I look forward to hearing from you! Whether you have questions,
          feedback, or just want to say hello, don’t hesitate to reach out.
        </p>
      </div>
    </div>
  );
};

export default Contact;
