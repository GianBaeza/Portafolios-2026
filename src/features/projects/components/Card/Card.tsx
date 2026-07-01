import type { Project } from '../../consts/projectsData'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from '../../../../shared/components/ui/card'
import { styleGlobals } from '../../../../shared/consts/stylesGlobal'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function CardProyectos({ proyecto }: { proyecto: Project }) {
    return (
        <Card className="w-[260px] h-96 overflow-hidden p-0 tiktok-sans-uniquifier hover:shadow-md transition-shadow duration-200 dark:border-gray-800 dark:bg-gray-900/50">
            <CardContent className="w-full h-[140px] bg-white dark:bg-gray-800 p-0">
                <img
                    src={proyecto.backgroundImage}
                    alt={`Captura de pantalla del proyecto ${proyecto.title}`}
                    className="w-full h-[150px] object-cover object-center rounded-t-md mb-2"
                />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-2 gap-1  justify-center ">
                <CardTitle className={`${styleGlobals.h3} text-start text-sm`}>
                    {proyecto.title}
                </CardTitle>
                <CardContent className="flex flex-col  w-full bg-transparent  items-start gap-1 justify-start p-0">
                    <a
                        href={proyecto.repositorio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Repositorio de ${proyecto.title} — abrir en nueva ventana`}
                        className={`${styleGlobals.p} flex items-center gap-1 underline hover:text-orange-500 text-sm focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 rounded-sm transition-colors`}
                    >
                        Github
                        <HiArrowUpRight size={11} />
                    </a>
                </CardContent>
                <CardDescription
                    className={`${styleGlobals.p} text-start text-xs`}
                >
                    {proyecto.description}
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
