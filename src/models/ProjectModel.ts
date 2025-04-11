import { ReactNode } from "react";

export interface ProjectModel {
    id: string,
    title: string,
    stackListIcons: ReactNode[],
    bgImgUrl: string,
    githubUrl: string,
    websiteUrl: string | null
}

