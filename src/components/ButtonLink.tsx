import { ReactNode } from 'react'

interface IProps {
    href: string
    children?: ReactNode
}

export default function ButtonLink({ href, children }: IProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <button className="transition-all hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500 p-2 rounded-md select-none">
                {children}
            </button>
        </a>
    )
}
