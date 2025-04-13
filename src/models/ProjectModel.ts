import { ReactNode } from "react";

interface Stack {
    name: string,
    icon: ReactNode
}

export interface ProjectModel {
    id: string,
    title: string,
    stackList: Stack[],
    bgImgUrl: string,
    githubUrl: string,
    websiteUrl: string | null
}

