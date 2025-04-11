import { ProjectModel } from "../models/ProjectModel.ts";
import { FaCss3, FaReact, FaSass } from "react-icons/fa";
import { SiMantine, SiTypescript } from "react-icons/si";

export const PROJECTS: ProjectModel[] =
    [
        {
            id: "0",
            title: "My Portfolio",
            stackListIcons: [
                <FaReact></FaReact>,
                <SiTypescript></SiTypescript>,
                <FaSass></FaSass>
            ],
            bgImgUrl: "/bg-avatar-creator.png",
            githubUrl: "https://github.com/MartincsekLevente/Portfolio",
            websiteUrl: "ates"
        },
        {
            id: "1",
            title: "Mars Weather",
            stackListIcons: [
                <FaReact></FaReact>,
                <SiTypescript></SiTypescript>,
                <FaCss3></FaCss3>
            ],
            bgImgUrl: "/bg-mars-weather.png",
            githubUrl: "https://github.com/MartincsekLevente/React-MarsWeather",
            websiteUrl: null
        },
        {
            id: "2",
            title: "Avatar Creator",
            stackListIcons: [
                <FaReact></FaReact>,
                <SiTypescript></SiTypescript>,
                <SiMantine></SiMantine>,
                <FaCss3></FaCss3>
            ],
            bgImgUrl: "/bg-avatar-creator.png",
            githubUrl: "https://github.com/MartincsekLevente/React-AvatarCreator",
            websiteUrl: null
        }
    ]