import { ProjectModel } from "../models/ProjectModel.ts";
import { FaCss3, FaReact, FaSass } from "react-icons/fa";
import { SiMantine, SiTypescript, SiVercel } from "react-icons/si";

export const PROJECTS: ProjectModel[] =
    [
        {
            id: "0",
            title: "My Portfolio",
            stackList: [
                {
                    name: "React",
                    icon: <FaReact></FaReact>
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript></SiTypescript>
                },
                {
                    name: "Mantine",
                    icon: <SiMantine></SiMantine>
                },
                {
                    name: "Sass",
                    icon: <FaSass></FaSass>
                },
                {
                    name: "Vercel",
                    icon: <SiVercel></SiVercel>
                }
            ],
            bgImgUrl: "/bg-portfolio.jpg",
            githubUrl: "https://github.com/MartincsekLevente/Portfolio",
            websiteUrl: "https://www.martincseklevente.hu"
        },
        {
            id: "1",
            title: "Mars Weather",
            stackList: [
                {
                    name: "React",
                    icon: <FaReact></FaReact>
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript></SiTypescript>
                },
                {
                    name: "CSS3",
                    icon: <FaCss3></FaCss3>
                }
            ],
            bgImgUrl: "/bg-mars-weather.png",
            githubUrl: "https://github.com/MartincsekLevente/React-MarsWeather",
            websiteUrl: "https://mars-weather-ml.vercel.app"
        },
        {
            id: "2",
            title: "Avatar Creator",
            stackList: [
                {
                    name: "React",
                    icon: <FaReact></FaReact>
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript></SiTypescript>
                },
                {
                    name: "Mantine",
                    icon: <SiMantine></SiMantine>
                },
                {
                    name: "CSS3",
                    icon: <FaCss3></FaCss3>
                },
                {
                    name: "Vercel",
                    icon: <SiVercel></SiVercel>
                }
            ],
            bgImgUrl: "/bg-avatar-creator.png",
            githubUrl: "https://github.com/MartincsekLevente/React-AvatarCreator",
            websiteUrl: "https://avatar-creator-ml.vercel.app"
        },
        {
            id: "3",
            title: "To-Do App",
            stackList: [
                {
                    name: "React",
                    icon: <FaReact></FaReact>
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript></SiTypescript>
                },
                {
                    name: "Mantine",
                    icon: <SiMantine></SiMantine>
                },
                {
                    name: "CSS3",
                    icon: <FaCss3></FaCss3>
                }
            ],
            bgImgUrl: "/bg-to-do-app.png",
            githubUrl: "https://github.com/MartincsekLevente/React-ToDoList",
            websiteUrl: "https://to-do-list-ml.vercel.app"
        }
    ]