import type { JSX } from 'react'

export interface Redes {
    nombre: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Instagram' | 'Email'
    url: string
    subNombre: string
    icon: JSX.Element
}

export interface AboutProps {
    className?: string
}

export interface PersonalInfo {
    name: string
    location: string
    role: string
}

export interface TextContent {
    title: string
    description: string
}

export interface AboutData {
    personalInfo: PersonalInfo
    textContent: TextContent
    socialNetworks: Redes[]
}
