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
        >
            <span className="w-full">
                <h1
                    className={`${styleGlobals.h1} ${
                        rutaActual === '/proyectos' ? 'text-shadow-lg ' : ''
                    }`}
                >
                    Proyectos
                </h1>
                <p className={`${styleGlobals.p}`}></p>
            </span>

            <section className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 space-x-10 space-y-5">
                {projectsData.map((proyecto) => {
                    return (
                        <CardProyectos key={proyecto.id} proyecto={proyecto} />
                    )
                })}
            </section>
        </Element>
    )
}
