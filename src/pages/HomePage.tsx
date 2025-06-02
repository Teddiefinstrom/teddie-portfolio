import ProfileCard from '../component/ProfileCard';

const HomePage = () => {
  return (
    <>
      <div className="home-container">
	  <div className="container-content">
	  <div className="right-side">

        <h1>Hello I'm Teddie Finström</h1>

		<p className="intro-text">
          I am an aspiring frontend developer currently studying at
          Medieinstitutet in Malmö, and I am currently looking for an
          internship.
        </p>

		</div>

		<div className="left-side">
		<ProfileCard />
		</div>
      </div>
	  </div>
    </>
  );
};

export default HomePage;