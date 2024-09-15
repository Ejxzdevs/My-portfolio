import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillsSection";
import ContactSection from "./components/contactSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
        <main className="sectionContainer">
            <Navbar/>    
            <ProfileSection/>
            <AboutSection/>
            <SkillsSection/>
            <ContactSection/>
        </main>        
  );
}
