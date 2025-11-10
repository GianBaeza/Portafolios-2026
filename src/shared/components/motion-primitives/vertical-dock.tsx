'use client'

import {
    motion,
    MotionValue,
    useMotionValue,
    AnimatePresence,
} from 'motion/react'
import {
    Children,
    cloneElement,
    createContext,
    useEffect,
    useState,
} from 'react'
import { cn } from '@/lib/utils'

export type VerticalDockProps = {
    children: React.ReactNode
    className?: string
    panelWidth?: number
}

export type VerticalDockItemProps = {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

export type VerticalDockLabelProps = {
    className?: string
    children: React.ReactNode
}

export type VerticalDockIconProps = {
    className?: string
    children: React.ReactNode
}

export type VerticalDockContextType = object

const VerticalDockContext = createContext<VerticalDockContextType | undefined>(
    undefined,
)

function VerticalDockProvider({
    children,
    value,
}: {
    children: React.ReactNode
    value: VerticalDockContextType
}) {
    return (
        <VerticalDockContext.Provider value={value}>
            {children}
        </VerticalDockContext.Provider>
    )
}

// function useVerticalDock() {
//     const context = useContext(VerticalDockContext)
//     if (!context)
//         throw new Error(
//             'useVerticalDock must be used within a VerticalDockProvider',
//         )
//     return context
// }

function VerticalDock({ children, className }: VerticalDockProps) {
    return (
        <motion.div className="my-2 flex max-h-full items-center overflow-visible">
            <motion.div
                className={cn(
                    'flex h-fit w-fit justify-center items-center flex-row gap-3 rounded-2xl bg-transparent py-2 dark:bg-neutral-900',
                    className,
                )}
                role="toolbar"
                // style={{ padding: '2px 2px 0px 2px' }}
                aria-label="Application dock"
            >
                <VerticalDockProvider value={{}}>
                    {children}
                </VerticalDockProvider>
            </motion.div>
        </motion.div>
    )
}

function VerticalDockItem({
    children,
    className,
    onClick,
}: VerticalDockItemProps) {
    const isHovered = useMotionValue(0)

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            onHoverStart={() => isHovered.set(1)}
            onHoverEnd={() => isHovered.set(0)}
            onFocus={() => isHovered.set(1)}
            onBlur={() => isHovered.set(0)}
            style={{ borderRadius: '13px' }}
            className={cn(
                'relative inline-flex w-9 h-9 items-center justify-center rounded-lg transition-transform duration-200 cursor-pointer',
                'hover:bg-gray-200 dark:hover:bg-neutral-800',
                className,
            )}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            onClick={onClick}
        >
            {Children.map(children, (child) =>
                cloneElement(
                    child as React.ReactElement<Record<string, unknown>>,
                    {
                        isHovered,
                    },
                ),
            )}
        </motion.div>
    )
}

function VerticalDockLabel({
    children,
    className,
    ...rest
}: VerticalDockLabelProps) {
    const isHovered = (rest as any)['isHovered'] as MotionValue<number>
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const unsubscribe = isHovered?.on?.('change', (latest) => {
            setIsVisible(latest === 1)
        })
        return () => unsubscribe?.()
    }, [isHovered])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 12 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={cn(
                        'fixed left-10 top-1/2 -translate-y-1/2 w-max whitespace-nowrap rounded-md border border-gray-200 bg-gray-100 px-2 py-1 text-xs text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-white z-9999',
                        className,
                    )}
                    role="tooltip"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function VerticalDockIcon({ children, className }: VerticalDockIconProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    )
}

export { VerticalDock, VerticalDockIcon, VerticalDockItem, VerticalDockLabel }
