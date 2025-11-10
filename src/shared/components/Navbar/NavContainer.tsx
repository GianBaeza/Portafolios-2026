import { Component, ContactRound, HomeIcon, Package } from 'lucide-react'
import {
    VerticalDock,
    VerticalDockItem,
    VerticalDockLabel,
    VerticalDockIcon,
} from '../motion-primitives/vertical-dock'
import { Link, Element } from 'react-scroll'
import { useContext, useState } from 'react'
import { useContextoGlobal, type rutas } from '../../../context/ContextGlobal'
const navigationData = [
    {
        title: 'Sobre mí',
        icon: <HomeIcon size={20} />,
        href: '/sobre-mi',
    },
    {
        title: 'Experiencias',
        icon: <Package size={20} />,
        href: '/experiencias',
    },
    {
        title: 'Proyectos',
        icon: <Component size={20} />,
        href: '/proyectos',
    },
    {
        title: 'Contacto',
        icon: <ContactRound size={20} />,
        href: '/contacto',
    },
]

export default function NavContainer() {
    const { rutaActual, setRuta } = useContextoGlobal()

    return (
        <div className="bg-red-600 absolute w-screen">
            <nav className="fixed hidden md:block left-1 lg:left-1/9 top-[55%]  transform -translate-y-1/2 z-50">
                <VerticalDock className="flex flex-col items-center  justify-center gap-4  min-h-[220px] w-11  bg-gray-500/10 backdrop-filter backdrop-blur-3xl   p-2 rounded-xl shadow-lg">
                    {navigationData.map((item, idx) => (
                        <Link
                            to={item.href}
                            smooth={true}
                            spy={true}
                            offset={0}
                            duration={500}
                            key={idx}
                            onClick={() => setRuta(item.href as rutas)}
                        >
                            <VerticalDockItem
                                className={` scale-100 hover:scale-110 transition-all duration-100 rounded-full ${
                                    rutaActual === item.href
                                        ? 'bg-orange-500 text-white'
                                        : ''
                                } hover:bg-orange-500 *: hover:text-white   `}
                            >
                                <VerticalDockLabel>
                                    {item.title}
                                </VerticalDockLabel>
                                <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                            </VerticalDockItem>
                        </Link>
                    ))}
                </VerticalDock>
            </nav>
            <nav className="fixed bottom-0 flex justify-center w-full z-50 md:hidden  bg-gray-500/10 backdrop-filter backdrop-blur-2xl">
                <VerticalDock className="flex flex-row my-0  bg-gray-500/10 backdrop-filter backdrop-blur-3xl min-w-[220px]  p-2 rounded-xl shadow-lg">
                    {navigationData.map((item, idx) => (
                        <Link
                            to={item.href}
                            smooth={true}
                            spy={true}
                            offset={0}
                            duration={500}
                            key={idx}
                            onClick={() => setRuta(item.href as rutas)}
                        >
                            <VerticalDockItem
                                className={` scale-100 hover:scale-110 transition-all duration-100 rounded-full flex ${
                                    rutaActual === item.href
                                        ? 'bg-orange-500 text-white'
                                        : ''
                                } hover:bg-orange-500 *: hover:text-white   `}
                            >
                                <VerticalDockLabel className="-top-5 -left-5">
                                    {item.title}
                                </VerticalDockLabel>
                                <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                            </VerticalDockItem>
                        </Link>
                    ))}
                </VerticalDock>
            </nav>
        </div>
    )
}
