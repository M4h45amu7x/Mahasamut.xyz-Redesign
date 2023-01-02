import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import tw from 'twin.macro'

interface IProps {
    children?: ReactNode
}

interface IBodyProps {
    children?: ReactNode
    noIndent?: boolean
}

const Section = ({ children }: IProps) => {
    return (
        <motion.section
            initial={{
                opacity: 0,
                translateX: 100,
            }}
            animate={{
                opacity: 1,
                translateX: 0,
            }}
        >
            {children}
        </motion.section>
    )
}

const Title = ({ children }: IProps) => {
    return (
        <p tw="inline-block border-sky-50 border-b-4 align-middle font-bold text-xl capitalize drop-shadow-lg">
            {children}
        </p>
    )
}

const Body = ({ children, noIndent = false }: IBodyProps) => {
    return <div css={[tw`mt-1`, !noIndent && tw`indent-4`]}>{children}</div>
}

Section.Title = Title
Section.Body = Body

export default Section
