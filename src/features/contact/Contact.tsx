import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { styleGlobals } from '../../shared/consts/stylesGlobal'
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
    {
        nombre: 'Email',
        url: 'mailto:baezagian4@gmail.com?subject=Consulta&body=Hola%20Gian',
        subNombre: 'baezagian4@gmail.com',
        icon: <HiArrowUpRight size={11} />,
    },
]
export default function Contact() {
    const { rutaActual } = useContextoGlobal()
    const handleClick = () => {
        const subject = encodeURIComponent('Consulta desde el portfolio')
        const body = encodeURIComponent('Hola Gian, quería contactarte por...')
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=baezagian4@gmail.com&su=${subject}&body=${body}`
        window.open(gmailUrl, '_blank')
    }
    return (
        <Element
            name="/contacto"
            className="w-11/12 flex flex-col items-start justify-center pb-10 gap-5"
        >
            <span className="h-px bg-black w-full rounded-2xl"></span>

            <h1
                className={`${styleGlobals.h1} ${
                    rutaActual === '/contacto' ? 'text-shadow-lg ' : ''
                }`}
            >
                Contacto
            </h1>
            <ul className="flex items-center gap-2">
                {socialNetworks.map((red) => (
                    <li key={red.nombre} className="mb-4 ">
                        <a
                            href={red.url}
                            target="_blank"
                            onClick={
                                red.nombre === 'Email'
                                    ? () => handleClick()
                                    : undefined
                            }
                            rel="noopener noreferrer "
                            className={`hover:text-orange-500 ${styleGlobals.p} flex items-center gap-1`}
                        >
                            <span className="font-semibold">{red.nombre}</span>

                            {red.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </Element>
    )
}
