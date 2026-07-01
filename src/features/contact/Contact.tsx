import { useState, useCallback } from 'react'
import { HiLink, HiClipboardDocument, HiCheck } from 'react-icons/hi2'
import { styleGlobals } from '../../shared/consts/stylesGlobal'
import { Element } from 'react-scroll'
import { useContextoGlobal } from '../../context/ContextGlobal'

interface ContactItem {
    name: string
    value: string
    url: string
    copyLabel: string
}

const contacts: ContactItem[] = [
    {
        name: 'GitHub',
        value: 'github.com/gianbaeza',
        url: 'https://github.com/gianbaeza',
        copyLabel: 'Copiar usuario de GitHub',
    },
    {
        name: 'LinkedIn',
        value: 'in/gianfrancobaeza',
        url: 'https://www.linkedin.com/in/gianbaeza/',
        copyLabel: 'Copiar perfil de LinkedIn',
    },
    {
        name: 'Email',
        value: 'baezagian4@gmail.com',
        url: 'mailto:baezagian4@gmail.com',
        copyLabel: 'Copiar correo electrónico',
    },
]

function CopyButton({ text, label }: { text: string; label: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // fallback para navegadores sin clipboard API
            const input = document.createElement('input')
            input.value = text
            document.body.appendChild(input)
            input.select()
            document.execCommand('copy')
            document.body.removeChild(input)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }, [text])

    return (
        <button
            onClick={handleCopy}
            aria-label={copied ? `¡${label} copiado!` : label}
            aria-live="polite"
            className="p-1.5 rounded-md text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 transition-colors cursor-pointer"
            title={copied ? '¡Copiado!' : 'Copiar'}
        >
            {copied ? (
                <HiCheck className="size-4 text-green-500" />
            ) : (
                <HiClipboardDocument className="size-4" />
            )}
        </button>
    )
}

export default function Contact() {
    const { rutaActual } = useContextoGlobal()

    return (
        <Element
            name="/contacto"
            className="w-11/12 flex flex-col items-start justify-center pb-10 gap-5"
        >
            <span className="h-px bg-gray-300 dark:bg-gray-700 w-full rounded-2xl" />

            <h1
                className={`${styleGlobals.h1} ${
                    rutaActual === '/contacto' ? 'text-shadow-lg ' : ''
                }`}
            >
                Contacto
            </h1>

            <div
                className="flex flex-wrap gap-x-8 gap-y-3 w-full"
                aria-label="Medios de contacto"
            >
                {contacts.map((contact) => (
                    <div
                        key={contact.name}
                        className="flex items-center gap-1"
                    >
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {contact.name}
                        </span>

                        <CopyButton
                            text={contact.value}
                            label={contact.copyLabel}
                        />
                        <a
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Abrir ${contact.name} en nueva ventana`}
                            className="p-1 rounded-md text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 transition-colors"
                            title="Abrir enlace"
                        >
                            <HiLink className="size-4" />
                        </a>
                    </div>
                ))}
            </div>

            <span
                role="status"
                aria-live="polite"
                className="sr-only"
                aria-atomic="true"
            />
        </Element>
    )
}
