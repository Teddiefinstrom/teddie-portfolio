import ProfileCard from "../component/ProfileCard";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="container-content">
          <div className="right-side">
            <h1>Hello I'm Teddie Finström</h1>

            <p className="intro-text">
              I’m an aspiring frontend developer studying at Medieinstitutet in
              Malmö. I’m currently looking for an internship where I can develop
              my skills further. 
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
