import { Component, ContactRound, HomeIcon, Moon, Package, Sun } from 'lucide-react'
import {
    VerticalDock,
    VerticalDockItem,
    VerticalDockLabel,
    VerticalDockIcon,
} from '../motion-primitives/vertical-dock'
import { Link } from 'react-scroll'
import { useContextoGlobal, type rutas } from '../../../context/ContextGlobal'
import { useTheme } from '../../../context/ThemeContext'
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
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="absolute w-screen" role="navigation" aria-label="Navegación principal">
            <nav className="fixed hidden md:block left-1 lg:left-1/9 top-[55%]  transform -translate-y-1/2 z-50">
                <VerticalDock className="flex flex-col items-center justify-center gap-4 min-h-[260px] w-11 bg-white/40 dark:bg-gray-900/40 backdrop-filter backdrop-blur-3xl p-2 rounded-xl shadow-lg dark:shadow-gray-900/50">
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
                                className={`scale-100 hover:scale-110 transition-all duration-100 rounded-full ${
                                    rutaActual === item.href
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-orange-500 hover:text-white`}
                            >
                                <VerticalDockLabel>
                                    {item.title}
                                </VerticalDockLabel>
                                <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                            </VerticalDockItem>
                        </Link>
                    ))}

                    {/* Theme toggle desktop */}
                    <VerticalDockItem
                        onClick={toggleTheme}
                        className={`scale-100 hover:scale-110 transition-all duration-100 rounded-full text-gray-600 dark:text-gray-400 hover:bg-orange-500 hover:text-white`}
                    >
                        <VerticalDockLabel>
                            {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                        </VerticalDockLabel>
                        <VerticalDockIcon>
                            {theme === 'dark' ? (
                                <Sun className="size-5" />
                            ) : (
                                <Moon className="size-5" />
                            )}
                        </VerticalDockIcon>
                    </VerticalDockItem>
                </VerticalDock>
            </nav>

            <nav className="fixed bottom-0 flex justify-center w-full z-50 md:hidden bg-white/60 dark:bg-gray-900/60 backdrop-filter backdrop-blur-2xl">
                <VerticalDock className="flex flex-row my-0 bg-white/40 dark:bg-gray-900/40 backdrop-filter backdrop-blur-3xl min-w-[220px] p-2 rounded-xl shadow-lg dark:shadow-gray-900/50">
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
                                className={`scale-100 hover:scale-110 transition-all duration-100 rounded-full flex ${
                                    rutaActual === item.href
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-600 dark:text-gray-400'
                                } hover:bg-orange-500 hover:text-white`}
                            >
                                <VerticalDockLabel className="-top-5 -left-5">
                                    {item.title}
                                </VerticalDockLabel>
                                <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                            </VerticalDockItem>
                        </Link>
                    ))}

                    {/* Theme toggle mobile */}
                    <VerticalDockItem
                        onClick={toggleTheme}
                        className={`scale-100 hover:scale-110 transition-all duration-100 rounded-full flex text-gray-600 dark:text-gray-400 hover:bg-orange-500 hover:text-white`}
                    >
                        <VerticalDockLabel className="-top-5 -left-5">
                            {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                        </VerticalDockLabel>
                        <VerticalDockIcon>
                            {theme === 'dark' ? (
                                <Sun className="size-5" />
                            ) : (
                                <Moon className="size-5" />
                            )}
                        </VerticalDockIcon>
                    </VerticalDockItem>
                </VerticalDock>
            </nav>
        </div>
    )
}
