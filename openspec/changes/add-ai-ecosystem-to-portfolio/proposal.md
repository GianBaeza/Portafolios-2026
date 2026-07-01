## Why

El portfolio muestra perfil únicamente como "Frontend Developer" con proyectos tradicionales, sin reflejar el trabajo más diferencial: el ecosistema de desarrollo asistido por IA que el autor diseñó e implementó (OpenCode + SDD + Engram + 13+ agentes). Esto es una omisión que subrepresenta sus capacidades reales. Además, las descripciones existentes son extensas y pueden simplificarse.

## What Changes

- **About**: Actualizar texto de descripción y rol para incluir el ecosistema de desarrollo con IA. Simplificar descripción existente.
- **Projects**: Agregar un 4to proyecto que describa el ecosistema AI-Augmented Development con tecnologías relevantes.
- **Experience**: Agregar entrada de experiencia que documente el diseño e implementación del sistema orquestado de desarrollo asistido por IA.
- **Clean-up**: Simplificar descripciones existentes en About y Experience para que sean más concisas y directas.

## Capabilities

### New Capabilities

- `ai-ecosystem-content`: Descripción del ecosistema AI-Augmented Development (OpenCode + SDD + Engram + agentes) como contenido del portfolio, abarcando la entrada de proyecto, la experiencia laboral y la actualización del perfil personal. No modifica interfaces ni componentes — solo datos (constantes y archivos de texto).

### Modified Capabilities

_(No existing specs to modify — this is a net-new addition)_

## Impact

- `src/features/about/const/text.ts` — descripción de about a simplificar y actualizar
- `src/features/about/const/personalData.ts` — rol a actualizar de "Frontend Developer"
- `src/features/projects/consts/projectsData.ts` — agregar 4to proyecto (ecosistema AI)
- `src/features/experience/consts/text.ts` — agregar experiencia de desarrollo del ecosistema, simplificar descripción existente
- No se modifican componentes, interfaces, ni infraestructura UI
