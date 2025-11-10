import type { Experience } from '../interface/experience'

/**
 * Formatea el rango de fechas de experiencia laboral
 */
export const formatExperienceDateRange = (
    startDate: string,
    endDate: string | null,
): string => {
    return endDate ? `${startDate} - ${endDate}` : `${startDate} - Presente`
}

/**
 * Calcula la duración de la experiencia laboral
 */
export const calculateExperienceDuration = (
    startDate: string,
    endDate: string | null,
): string => {
    // Esta función podría expandirse para calcular años y meses exactos
    const end = endDate || 'Presente'
    return `${startDate} - ${end}`
}

/**
 * Filtra experiencias por tecnología
 */
export const filterExperiencesByTechnology = (
    experiences: Experience[],
    technology: string,
): Experience[] => {
    return experiences.filter((exp) =>
        exp.technologies?.some((tech) =>
            tech.toLowerCase().includes(technology.toLowerCase()),
        ),
    )
}

/**
 * Obtiene todas las tecnologías únicas de las experiencias
 */
export const getAllTechnologies = (experiences: Experience[]): string[] => {
    const allTechs = experiences.flatMap((exp) => exp.technologies || [])
    return [...new Set(allTechs)].sort()
}
