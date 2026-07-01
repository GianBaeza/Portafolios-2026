import { styleGlobals } from '../../shared/consts/stylesGlobal'
import { Element } from 'react-scroll'
import { projectsData } from './consts/projectsData'
import CardProyectos from './components/Card/Card'
import { useContextoGlobal } from '../../context/ContextGlobal'

export default function Proyectos() {
    const { rutaActual } = useContextoGlobal()
    return (
        <Element
            name="/proyectos"
            className="w-11/12 h-full flex flex-col justify-center items-center gap-5 tiktok-sans-uniquifier pb-5 relative"
            aria-label="Proyectos"
        >
            <span className="w-full">
                <h1
                    className={`${styleGlobals.h1} ${
                        rutaActual === '/proyectos' ? 'text-shadow-lg ' : ''
                    }`}
                >
                    Proyectos
                </h1>
            </span>

            <section
                aria-label="Listado de proyectos"
                className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 w-full"
            >
                {projectsData.map((proyecto) => {
                    return (
                        <CardProyectos key={proyecto.id} proyecto={proyecto} />
                    )
                })}
            </section>
        </Element>
    )
}
