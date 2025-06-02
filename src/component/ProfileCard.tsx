import teddiepic from "../assets/images/teddie_finstrom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

function ProfileCard() {

  return (

    <>

    <img src={teddiepic} alt="TeddieProfilePic" className='profile-img'/>

    <div className="documents-links">
    <a href="/CV-Teddie.pdf" download="TeddieCV" target="_blank">
      <Button className="btn-CV">
        <FontAwesomeIcon icon={faDownload} />
        Download Cv
      </Button>
    </a>

    <a
      href="/Personligt-Brev-Teddie.pdf"
      download="TeddiePL"
      target="_blank"
    >
      <Button className="btn-PL">
        <FontAwesomeIcon icon={faDownload} />
        Personal Letter
      </Button>
    </a>
 
  </div>

  </>
  );
}

export default ProfileCard;