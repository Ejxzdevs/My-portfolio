import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillsSection";
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
          <div id="C" className="skillsContainer">
            <SkillsSection/>
          </div>
          <div id="D" className="projectsContainer">
            project
          </div>
          <div id="D" className="contactContainer">
            contact
          </div>
      </main>
  );
}
