import { styleGlobals } from '../../shared/consts/stylesGlobal'
import Imagen from './components/Imagen'
import { text_about } from './const/text'
import { PERSONAL_INFO } from './const/personalData'
import { HiArrowUpRight } from 'react-icons/hi2'
import type { Redes, AboutProps } from './inteface/about'
import { Element } from 'react-scroll'
import { useContextoGlobal } from '../../context/ContextGlobal'
const socialNetworks: Redes[] = [
    {
        nombre: 'GitHub',
        url: 'https://github.com/gianbaeza',
        subNombre: 'github.com/gianbaeza',
        icon: <HiArrowUpRight size={11} />,
    },
    {
        nombre: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gianbaeza/',
        subNombre: 'in/gianfrancobaeza',
        icon: <HiArrowUpRight size={11} />,
    },
]

export default function About({ className = '' }: AboutProps) {
    const { rutaActual } = useContextoGlobal()

    return (
        <Element
            name="/sobre-mi"
            className={`w-11/12  flex flex-col items-center justify-center ${className} h-full`}
            aria-label="Sobre mí"
        >
            <div className="w-full  bg-transparent flex gap-4 md:gap-10  rounded-lg pt-10 ">
                <Imagen />
                <div className="tiktok-sans-uniquifier flex flex-col justify-center">
                    <h2 className={styleGlobals.h3}>{PERSONAL_INFO.name}</h2>
                    <h3 className={styleGlobals.h3}>{PERSONAL_INFO.location}</h3>
                    <h1 className={styleGlobals.h1}>{PERSONAL_INFO.role}</h1>
                </div>
            </div>

            <section
                aria-labelledby="about-title"
                className="bg-transparent w-full h-full tiktok-sans-uniquifier pt-20 flex flex-col items-center justify-start gap-5"
            >
                <h1
                    id="about-title"
                    className={`${styleGlobals.h1} ${
                        rutaActual === '/sobre-mi' ? 'text-shadow-lg ' : ''
                    }`}
                >
                    {text_about.title}
                </h1>
                <p className={`${styleGlobals.p} whitespace-pre-line`}>
                    {text_about.description}
                </p>

                <ul className="w-full pt-3 space-y-2" aria-label="Redes sociales">
                    {socialNetworks.map((red: Redes, index: number) => (
                        <li
                            key={`${red.nombre}-${index}`}
                            className="text-base flex items-center justify-between gap-4"
                        >
                            <span className={styleGlobals.p}>{red.nombre}</span>
                            <a
                                href={red.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${red.nombre} — abrir en nueva ventana`}
                                className={`${styleGlobals.p} text-gray-500 dark:text-gray-400 flex items-center gap-1 underline hover:text-orange-500 text-sm focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 rounded-sm transition-colors`}
                            >
                                {red.subNombre}
                                {red.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </Element>
    )
}
