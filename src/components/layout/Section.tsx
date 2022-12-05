import { ReactNode } from 'react'

import { motion } from 'framer-motion'

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
        <p className="font-bold text-xl capitalize border-b-4 border-sky-50 inline-block align-middle drop-shadow-lg">
            {children}
        </p>
    )
}

const Body = ({ children, noIndent = false }: IBodyProps) => {
    return <div className={`mt-1 ${!noIndent && 'indent-sm'}`}>{children}</div>
}

Section.Title = Title
Section.Body = Body
export default Section
