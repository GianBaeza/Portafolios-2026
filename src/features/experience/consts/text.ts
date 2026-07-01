import type { ExperienceData } from '../interface/experience'

export const text_experience: ExperienceData = {
    title: 'Experiencia',
    experiences: [
        {
            position: 'Desarrollador Frontend',
            date: 'Enero 2024 - Presente',
            description:
                'Desarrollador frontend en el Ministerio de Desarrollo de la Comunidad de la Provincia de Buenos Aires. Desarrollo aplicaciones web de gestión con Docker, Next.js, React y TypeScript, aplicando Clean Architecture, Screaming Architecture y patrones de diseño para construir interfaces accesibles, eficientes y escalables.\n\nColaboro estrechamente con el equipo backend en debates técnicos para alinear criterios y optimizar flujos de desarrollo. Usamos entornos dockerizados, GitLab para control de versiones e integración continua.',
            subsections: [
                {
                    label: 'Proyecto paralelo',
                    title: 'AI-Augmented Development Ecosystem',
                    description:
                        'Diseñé e implementé un sistema orquestado de desarrollo asistido por IA que integra OpenCode (IDE terminal AI-native), Spec-Driven Development (SDD) y Engram (memoria persistente cross-session). El sistema coordina 13+ agentes especializados mediante un pipeline completo: exploración, propuesta, especificación, diseño, implementación, verificación y archivado de cambios — con quality gates automáticos y revisión adversarial paralela (Judgment Day) con 2 jueces ciegos independientes.\n\nConstruí un Skill Resolver con 93 skills inyectados contextualmente según el archivo y la tarea, y un sistema de delegación asíncrona con persistencia a disco, timeouts y notificaciones batch. La memoria del sistema (Engram) mantiene contexto a través de sesiones usando SQLite + FTS5, con más de 169 sesiones y 182 observaciones persistentes.\n\nEl ecosistema fue aplicado sobre 13+ proyectos reales, desde templates hasta aplicaciones corporativas con Next.js, Zustand, Server Actions y Design Systems.',
                },
            ],
        },
    ],
}
