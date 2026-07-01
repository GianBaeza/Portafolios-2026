import type { ReactNode } from 'react'

export interface ExperienceSubsection {
    label: string
    title: string
    description: string
}

export interface Experience {
    position: string
    date: string
    description: string | ReactNode
    subsections?: ExperienceSubsection[]
}

export interface ExperienceData {
    title: string
    experiences: Experience[]
}

export interface ExperienceProps {
    className?: string
}
