"use client"
import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillsSection";
import ContactSection from "./components/contactSection";
import ProjectSection from "./components/projectSection";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return (
      <main className="sectionContainer" >
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
