/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react'

interface MiContextoProviderProps {
    children: ReactNode
}
export type rutas = '/sobre-mi' | '/experiencias' | '/proyectos' | '/contacto'
interface MiContextoType {
    rutaActual: rutas
    setRuta: (
        ruta: '/sobre-mi' | '/experiencias' | '/proyectos' | '/contacto',
    ) => void
}

const ContextoGlobal = createContext<MiContextoType | null>(null)

export function MiContextoProvider({ children }: MiContextoProviderProps) {
    const [rutaActual, setRutaActual] = useState<rutas>('/sobre-mi')

    const setRuta = (ruta: string) => {
        setRutaActual(ruta as rutas)
    }

    const contextValue: MiContextoType = {
        rutaActual,
        setRuta: setRuta,
    }

    return (
        <ContextoGlobal.Provider value={contextValue}>
            {children}
        </ContextoGlobal.Provider>
    )
}

export function useContextoGlobal() {
    const context = useContext(ContextoGlobal)
    if (context === null) {
        throw new Error(
            'useContextoGlobal debe usarse dentro de MiContextoProvider',
        )
    }
    return context
}
