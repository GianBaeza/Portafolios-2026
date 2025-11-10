import { text_experience } from './consts/text'
import { styleGlobals } from '../../shared/consts/stylesGlobal'
import { Element } from 'react-scroll'
import { useContextoGlobal } from '../../context/ContextGlobal'

export default function Experience() {
    const { rutaActual } = useContextoGlobal()
    return (
        <Element
            name="/experiencias"
            className="w-11/12 h-full flex flex-col gap-5 tiktok-sans-uniquifier pb-5"
        >
            <h1
                className={`${styleGlobals.h1} ${
                    rutaActual === '/experiencias' ? 'text-shadow-lg ' : ''
                }`}
            >
                Experiencias
            </h1>
            <ul className="space-y-2">
                {text_experience.experiences.map((exp, i) => {
                    return (
                        <li
                            key={i}
                            className="bg-transparent flex flex-col  items-start gap-4"
                        >
                            <span className="flex items-center gap-3 w-full">
                                <p
                                    className={`${styleGlobals.date}  bg-transparent min-w-fit h-fit text-center text-sm`}
                                >
                                    {exp.date}
                                </p>
                                <h3
                                    className={`${styleGlobals.h3} text-orange-500  w-full`}
                                >
                                    {exp.position + '.'}
                                </h3>
                            </span>
                            <p
                                className={`${styleGlobals.p} text-sm bg-transparent`}
                            >
                                {exp.description}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </Element>
    )
}
