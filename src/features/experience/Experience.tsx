import { text_experience } from './consts/text'
import { styleGlobals } from '../../shared/consts/stylesGlobal'
import { Element } from 'react-scroll'
import { useContextoGlobal } from '../../context/ContextGlobal'

export default function Experience() {
    const { rutaActual } = useContextoGlobal()
    return (
        <Element
            name="/experiencias"
            aria-label="Experiencia"
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
                            className="bg-transparent flex flex-col items-start gap-4"
                        >
                            <span className="flex items-center gap-3 w-full">
                                <p
                                    className={`${styleGlobals.date} bg-transparent min-w-fit h-fit text-center text-sm`}
                                >
                                    {exp.date}
                                </p>
                                <h3
                                    className={`${styleGlobals.h3} text-orange-500 w-full`}
                                >
                                    {exp.position + '.'}
                                </h3>
                            </span>
                            <p
                                className={`${styleGlobals.p} text-sm bg-transparent whitespace-pre-line`}
                            >
                                {exp.description}
                            </p>

                            {exp.subsections?.map((sub, j) => (
                                <div
                                    key={j}
                                    className="border-l-2 border-orange-300/50 dark:border-orange-700/50 pl-3 md:pl-4 ml-1 md:ml-2 flex flex-col gap-2 w-full"
                                >
                                    <span className="flex flex-wrap items-center gap-2">
                                        <span className="text-[10px] md:text-xs font-medium text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded-full uppercase tracking-wide">
                                            {sub.label}
                                        </span>
                                        <h4 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {sub.title}
                                        </h4>
                                    </span>
                                    <p
                                        className={`${styleGlobals.p} text-xs md:text-sm bg-transparent whitespace-pre-line`}
                                    >
                                        {sub.description}
                                    </p>
                                </div>
                            ))}
                        </li>
                    )
                })}
            </ul>
        </Element>
    )
}
