import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    return (
        <>

<div className="contact-container">
      <h2>Contact Me</h2>
      <ul>
      <li>
  <FontAwesomeIcon icon={faPhone} /> <a href="tel:+46709492276">+46 70 949 22 76</a>
</li>

<li>
  <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000", marginRight: "8px" }} />
  <a href="mailto:teddie.finstrom@outlook.com">teddie.finstrom@outlook.com</a>
</li>
<li className="contact-item">
  <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077b5" }} />
  <a
    href="https://www.linkedin.com/in/teddie-finstrom"
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin.com/in/teddie-finstrom
  </a>
</li>

      </ul>
    </div>

        </>
    )
}

export default Contact;