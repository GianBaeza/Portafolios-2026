export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    repositorio: string
    backgroundImage?: string
    backgroundColor: string
    textColor: string
    tagColor: string
}

// Paleta de colores - actualizar con los colores de tu imagen
export const colorPalette = {
    primary: '#3B82F6', // Azul - actualizar con tu paleta
    secondary: '#10B981', // Verde - actualizar con tu paleta
    accent: '#8B5CF6', // Púrpura - actualizar con tu paleta
    neutral: '#6B7280', // Gris - actualizar con tu paleta
    text: '#FFFFFF', // Blanco para texto
    tagBackground: '#1F2937', // Fondo oscuro para tags
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Tecnagent',
        description:
            'Nos dedicamos al equipamiento y maquinaria agroindustrial, minería y petróleo.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        repositorio: 'https://github.com/GianBaeza/Tecnagent-Web',
        backgroundImage: '/public/tecnagent.png', // Ejemplo - cambiar por tu imagen
        backgroundColor: colorPalette.primary,
        textColor: colorPalette.text,
        tagColor: colorPalette.tagBackground,
    },
    {
        id: 2,
        title: "C'estifni Cerveza",
        description:
            'Plataforma de comercio electrónico para una cervecería artesanal, con catálogo de productos.',
        technologies: ['Vue.js', 'Firebase', 'TypeScript'],
        repositorio: 'https://github.com/GianBaeza/CestifniCerveza',
        backgroundImage: '/public/cerveceria.png', // Ejemplo - cambiar por tu imagen
        backgroundColor: colorPalette.secondary,
        textColor: colorPalette.text,
        tagColor: colorPalette.tagBackground,
    },
    {
        id: 3,
        title: 'Next.js Optimizer MCP Server',
        description:
            'API RESTful para pronósticos meteorológicos con integración de múltiples fuentes de datos y sistema de caché inteligente.',
        technologies: ['TypeScript', 'Docker', 'PostgreSQL'],
        repositorio:
            'https://github.com/GianBaeza/Next.js-Optimizer-MCP-Server',
        backgroundImage: '/public/mcp.png', // Ejemplo - cambiar por tu imagen
        backgroundColor: colorPalette.accent,
        textColor: colorPalette.text,
        tagColor: colorPalette.tagBackground,
    },
]
