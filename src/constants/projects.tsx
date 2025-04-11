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
            ]
        },
        {
            id: "1",
            title: "Mars Weather",
            stackListIcons: [
                <FaReact></FaReact>,
                <SiTypescript></SiTypescript>,
                <FaCss3></FaCss3>
            ]
        },
        {
            id: "2",
            title: "Avatar Creator",
            stackListIcons: [
                <FaReact></FaReact>,
                <SiTypescript></SiTypescript>,
                <SiMantine></SiMantine>,
                <FaCss3></FaCss3>
            ]
        }
    ]