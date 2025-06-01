import teddiepic from "../assets/images/teddie_finstrom.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <h1>Hello I'm Teddie Finström</h1>

        <img src={teddiepic} alt="TeddieProfilePic" />

        <p>
          I am an aspiring frontend developer currently studying at
          Medieinstitutet in Malmö, and I am currently looking for an
          internship.
        </p>

	
        <div className="documents-links">
		<a href="/CV-Teddie.pdf" download className="btn">
  <FontAwesomeIcon icon={faDownload} /> Download CV
</a>

          <div className="documents-links">
            <a
              href="/Personligt-Brev-Teddie.pdf"
			  download
              className="btn"
            >
               <FontAwesomeIcon icon={faDownload} /> Personal Letter (PDF)
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
