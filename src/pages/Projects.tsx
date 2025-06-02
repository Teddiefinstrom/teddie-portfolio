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
            <Card.Link href="https://github.com/the-hive-resistance/fed24-js1-uppgift-1-Teddiefinstrom.git">Github</Card.Link>
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
            A group project for an online candy store where we fetched product data from an external API. Users can browse candy, add items to a shopping cart, and complete their purchase by filling out an order form. I was mainly responsible for developing the form functionality, ensuring users could enter their information and receive an order confirmation number.
            </Card.Text>
            <Card.Link href="https://github.com/the-hive-resistance/fed24-js1-uppgift-2-fed24-js1-inlamningsuppgift-2-grupp-9.git">Github</Card.Link>
            <Card.Link href="https://bortakvallgrupp9.netlify.app/">
              Live Demo
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ maxWidth: '18rem' }}>
          <Card.Body>
            <Card.Title>Star Wars Encyclopedia</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Made with: HTML, CSS, TypeScript, React, Vite and Bootstrap
            </Card.Subtitle>
            <Card.Text>
            A web application that lets users explore detailed information about Star Wars characters and movies. The app fetches data from an external API, allowing users to scroll through and discover facts about their favorite Star Wars universe elements.            </Card.Text>
            <Card.Link href="https://github.com/the-hive-resistance/fed24-js2-uppgift-1-Teddiefinstrom.git">Github</Card.Link>
            <Card.Link href="https://lustrous-mousse-dbde84.netlify.app/">
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
