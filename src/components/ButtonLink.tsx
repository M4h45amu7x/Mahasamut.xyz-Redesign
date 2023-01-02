import { ReactNode } from 'react'

import tw from 'twin.macro'

interface IProps {
    href: string
    children?: ReactNode
}

export default function ButtonLink({ href, children }: IProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <button tw="select-none rounded-md p-2 transition-all hover:(bg-sky-500 shadow-lg shadow-sky-500)">
                {children}
            </button>
        </a>
    )
}
