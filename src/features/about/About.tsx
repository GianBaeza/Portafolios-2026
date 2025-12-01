import { styleGlobals } from '../../shared/consts/stylesGlobal'
import Imagen from './components/Imagen'
import { text_about } from './const/text'
import { HiArrowUpRight } from 'react-icons/hi2'
import type { Redes, AboutProps, AboutData } from './inteface/about'
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
    const aboutData: AboutData = {
        personalInfo: {
            name: 'Gian Franco Baeza',
            location: 'Buenos Aires, La Plata',
            role: 'Frontend Developer',
        },
        textContent: text_about,
        socialNetworks,
    }
    const { rutaActual } = useContextoGlobal()

    const { personalInfo, textContent, socialNetworks: redes } = aboutData

    return (
        <Element
            name="/sobre-mi"
            className={`w-11/12  flex flex-col items-center justify-center ${className} h-full`}
        >
            <div className="w-full  bg-transparent flex gap-2 md:gap-10  rounded-lg pt-10 ">
                <Imagen />
                <div className="tiktok-sans-uniquifier flex flex-col justify-center">
                    <h2 className={styleGlobals.h3}>{personalInfo.name}</h2>
                    <h3 className={styleGlobals.h3}>{personalInfo.location}</h3>
                    <h1 className={styleGlobals.h1}>{personalInfo.role}</h1>
                </div>
            </div>

            <main className="bg-transparent w-full h-full tiktok-sans-uniquifier pt-20 flex flex-col items-center justify-start gap-5">
                <h1
                    className={`${styleGlobals.h1} ${
                        rutaActual === '/sobre-mi' ? 'text-shadow-lg ' : ''
                    }`}
                >
                    {textContent.title}
                </h1>
                <p className={styleGlobals.p}>{textContent.description}</p>

                <ul className="w-full pt-3 space-y-2">
                    {redes.map((red: Redes, index: number) => (
                        <li
                            key={`${red.nombre}-${index}`}
                            className="text-base flex items-center gap-40"
                        >
                            <span className={styleGlobals.p}>{red.nombre}</span>
                            <a
                                href={red.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styleGlobals.p} text-gray-500 flex items-start gap-1 underline hover:text-orange-500 text-sm`}
                            >
                                {red.subNombre}
                                {red.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </Element>
    )
}
