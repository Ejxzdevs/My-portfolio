import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillsSection";
import ContactSection from "./components/contactSection";
import ProjectSection from "./components/projectSection";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
        <main className="sectionContainer">
            <Navbar/>    
            <ProfileSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
            <Footer/>    
        </main>        
  );
}
