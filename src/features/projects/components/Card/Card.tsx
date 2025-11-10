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
        <Card className="w-[260px] h-80 overflow-hidden p-0 tiktok-sans-uniquifier">
            <CardContent className="w-full h-[140px] bg-red-500 p-0">
                <img
                    src={proyecto.backgroundImage}
                    alt={proyecto.title}
                    className="w-full h-[150px] object-cover object-center rounded-t-md mb-2"
                />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-2 gap-1  justify-center ">
                <CardTitle className={`${styleGlobals.h3} text-start text-sm`}>
                    {proyecto.title}
                </CardTitle>
                <CardContent className="flex flex-col  w-full bg-transparent  items-start gap-1 justify-start p-0">
                    {/* <ul className="flex items-start gap-2">
                        {proyecto.technologies.map((tech, i) => (
                            <li
                                key={i}
                                className="inline-block  text-orange-500 hover:underline text-xs "
                            >
                                {tech}
                            </li>
                        ))}
                    </ul> */}
                    <a
                        href={proyecto.repositorio}
                        className={`${styleGlobals.p} flex items-center gap-1 cursor-pointer underline hover:text-orange-500 text-sm`}
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
