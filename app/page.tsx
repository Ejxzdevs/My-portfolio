import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillsSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
        <main className="sectionContainer">
            <Navbar/>    
            <ProfileSection/>
            <AboutSection/>
            <SkillsSection/>
        </main>        
  );
}
