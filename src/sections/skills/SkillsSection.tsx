import './SkillsSection.scss';
import Badge from "../../components/badge/Badge.tsx";
import {
    FaAngular,
    FaCss3Alt,
    FaDocker,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJenkins,
    FaJs, FaNodeJs, FaPython,
    FaReact, FaSass, FaTrello
} from "react-icons/fa";
import {
    SiGodotengine,
    SiJirasoftware,
    SiKotlin,
    SiMantine,
    SiRedux,
    SiTypescript,
    SiUnrealengine
} from "react-icons/si";
import { FaMasksTheater } from "react-icons/fa6";
import { DiScrum } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoBlender } from "react-icons/bi";

export default function SkillsSection() {
    return (
        <section id="skills">
            <div className="skills-section-container">
                <div className="skills-section-title-overlay">
                    <div className="skills-section-title">
                        My Skills
                    </div>
                </div>
                <div className="skill-tree-lines-container">
                    <svg className="skill-tree-lines" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                        <line x1="12" y1="0" x2="12" y2="30" stroke="#1b2047" strokeWidth="1.5"></line>
                        <line x1="12.8" y1="30" x2="-70" y2="30" stroke="#1b2047" strokeWidth="1.5"></line>
                        <line x1="-70" y1="29.2" x2="-70" y2="45" stroke="#1b2047" strokeWidth="1.5"></line>
                        <line x1="50" y1="0" x2="50" y2="100" stroke="#1b2047" strokeWidth="1.5"></line>
                        <line x1="88" y1="0" x2="88" y2="30" stroke="#1b2047" strokeWidth="1.5"></line>
                        <line x1="87.2" y1="30" x2="170" y2="30" stroke="#1b2047" strokeWidth="1.5"></line>
                        <line x1="170" y1="29.2" x2="170" y2="45" stroke="#1b2047" strokeWidth="1.5"></line>
                    </svg>
                </div>
                <div className="badge-anchor-left">
                    <div className="badge-wrapper-left">
                        <Badge
                            text="HTML"
                            icon={<FaHtml5></FaHtml5>}>
                        </Badge>
                        <Badge
                            text="CSS"
                            icon={<FaCss3Alt></FaCss3Alt>}>
                        </Badge>
                        <Badge
                            text="JAVASCRIPT"
                            icon={<FaJs></FaJs>}>
                        </Badge>
                        <Badge
                            text="TYPESCRIPT"
                            icon={<SiTypescript></SiTypescript>}>
                        </Badge>
                        <Badge
                            text="ANGULAR"
                            icon={<FaAngular></FaAngular>}>
                        </Badge>
                        <Badge
                            text="REACT"
                            icon={<FaReact></FaReact>}>
                        </Badge>
                        <Badge
                            text="REDUX"
                            icon={<SiRedux></SiRedux>}>
                        </Badge>
                        <Badge
                            text="MANTINE"
                            icon={<SiMantine></SiMantine>}>
                        </Badge>
                        <Badge
                            text="SASS"
                            icon={<FaSass></FaSass>}>
                        </Badge>
                    </div>
                </div>
                <div className="badge-anchor-middle">
                    <div className="badge-wrapper-middle">
                        <Badge
                            text="DOCKER"
                            icon={<FaDocker></FaDocker>}>
                        </Badge>
                        <Badge
                            text="JENKINS"
                            icon={<FaJenkins></FaJenkins>}>
                        </Badge>
                        <Badge
                            text="PLAYWRIGHT"
                            icon={<FaMasksTheater></FaMasksTheater>}>
                        </Badge>
                        <Badge
                            text="GIT"
                            icon={<FaGithub></FaGithub>}>
                        </Badge>
                        <Badge
                            text="JIRA"
                            icon={<SiJirasoftware></SiJirasoftware>}>
                        </Badge>
                        <Badge
                            text="TRELLO"
                            icon={<FaTrello></FaTrello>}>
                        </Badge>
                        <Badge
                            text="GODOT"
                            icon={<SiGodotengine></SiGodotengine>}>
                        </Badge>
                        <Badge
                            text="UNREAL ENGINE"
                            icon={<SiUnrealengine></SiUnrealengine>}>
                        </Badge>
                        <Badge
                            text="BLENDER"
                            icon={<BiLogoBlender></BiLogoBlender>}>
                        </Badge>
                        <Badge
                            text="SCRUM"
                            icon={<DiScrum></DiScrum>}>
                        </Badge>
                    </div>
                </div>
                <div className="badge-anchor-right">
                    <div className="badge-wrapper-right">
                        <Badge
                            text="JAVA"
                            icon={<FaJava></FaJava>}>
                        </Badge>
                        <Badge
                            text="NODE.JS"
                            icon={<FaNodeJs></FaNodeJs>}>
                        </Badge>
                        <Badge
                            text="KOTLIN"
                            icon={<SiKotlin></SiKotlin>}>
                        </Badge>
                        <Badge
                            text="PYTHON"
                            icon={<FaPython></FaPython>}>
                        </Badge>
                        <Badge
                            text="FIREBASE"
                            icon={<IoLogoFirebase></IoLogoFirebase>}>
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}
