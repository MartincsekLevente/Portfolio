import './App.scss'
import Navbar from "./components/navbar/Navbar.tsx";
import HomeSection from "./sections/home/HomeSection.tsx";
import AboutSection from "./sections/about/AboutSection.tsx";
import SkillsSection from "./sections/skills/SkillsSection.tsx";
import ExperienceSection from "./sections/experience/ExperienceSection.tsx";
import ProjectsSection from "./sections/projects/ProjectsSection.tsx";
import ContactSection from "./sections/contact/ContactSection.tsx";

export default function App() {

    return (
        <>
            <div className="page-bg"></div>
            <Navbar/>
            <div className="page-container">
                <HomeSection/>
                <AboutSection/>
                <SkillsSection/>
                <ExperienceSection/>
                <ProjectsSection/>
                <ContactSection/>
            </div>
        </>
    )
}

