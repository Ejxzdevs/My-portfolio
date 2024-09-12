import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
      <main className={`mainContainer`}>
          <div className="navContainer">
            <Navbar/>
          </div>
          <div id="A" className="profileContainer">
            <ProfileSection/>
          </div>
          <div id="B" className="aboutContainer">
            <AboutSection/>
          </div>
          <div id="C" className="projectsContainer">
         
          </div>
          <div id="D" className="contactContainer">
       
          </div>
      </main>
  );
}
