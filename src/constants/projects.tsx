import { ProjectModel } from "../models/ProjectModel.ts";
import { FaGithub, FaJava, FaPython, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const PROJECTS: ProjectModel[] =
    [
        {
            id: "0",
            title: "My Portfolio",
            stackListIcons: [
                <FaGithub></FaGithub>,
                <FaReact></FaReact>,
                <FaSass></FaSass>,
                <SiTypescript></SiTypescript>
            ]
        },
        {
            id: "1",
            title: "Mars Weather",
            stackListIcons: [
                <FaGithub></FaGithub>,
                <FaPython></FaPython>
            ]
        },
        {
            id: "2",
            title: "Avatar Creator",
            stackListIcons: [
                <FaJava></FaJava>,
                <FaReact></FaReact>
            ]
        }
    ]