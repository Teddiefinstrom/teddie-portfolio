import ListGroup from 'react-bootstrap/esm/ListGroup';
import JSOne from '../assets/images/JSOne.png';
import JSTwo from '../assets/images/JSTwo.png';

import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <>
      <div className="container-content">
        <div className='portfolio-cards'>
        <Card style={{ maxWidth: '18rem' }}>
          <Card.Body>
            <Card.Title>Guess The Student</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Made with: HTML, CSS, Javascript and Bootstrap
            </Card.Subtitle>
            <Card.Text>
              A JavaScript-based quiz game where players can choose the number
              of questions and try to guess which classmate is shown in each
              photo.
            </Card.Text>
            <Card.Link href="#">Github</Card.Link>
            <Card.Link href="https://sensational-semifreddo-02a02f.netlify.app/">
              Live Demo
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ maxWidth: '18rem' }}>
          <Card.Body>
            <Card.Title>Bortakväll</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Made with: HTML, CSS, TypeScript, Vite, Bootstrap
            </Card.Subtitle>
            <Card.Text>
              A JavaScript-based quiz game where players can choose the number
              of questions and try to guess which classmate is shown in each
              photo.
            </Card.Text>
            <Card.Link href="#">Github</Card.Link>
            <Card.Link href="https://sensational-semifreddo-02a02f.netlify.app/">
              Live Demo
            </Card.Link>
          </Card.Body>
        </Card>

        </div>
      </div>
    </>
  );
};

export default Projects;
