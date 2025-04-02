import './App.scss'
import Navbar from "./components/navbar/Navbar.tsx";
import HomeSection from "./sections/home/HomeSection.tsx";
import AboutSection from "./sections/about/AboutSection.tsx";
import SkillsSection from "./sections/skills/SkillsSection.tsx";

export default function App() {

    return (
        <>
            <div className="page-bg"></div>
            <Navbar></Navbar>
            <div className="page-container">
                <HomeSection></HomeSection>
                <AboutSection></AboutSection>
                <SkillsSection></SkillsSection>
            </div>
        </>
    )
}

