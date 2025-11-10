import type { ReactNode } from 'react'

export interface Experience {
    position: string
    date: string
    description: string | ReactNode
}

export interface ExperienceData {
    title: string

    experiences: Experience[]
}

export interface ExperienceProps {
    className?: string
}
