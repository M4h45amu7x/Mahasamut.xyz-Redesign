import NextLink from 'next/link'
import { useRouter } from 'next/router'

import tw from 'twin.macro'

interface INavbar {
    title: string
    href: string
}

const navbarLists: INavbar[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Portfolio',
        href: '/portfolio',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
]

const Navbar = () => {
    const router = useRouter()

    return (
        <header tw="my-6 grid grid-flow-col">
            {navbarLists.map((row, index) => {
                return (
                    <NextLink href={row.href} key={index} legacyBehavior>
                        <div
                            css={[
                                tw`cursor-pointer border-b-2 pb-2 text-center text-lg transition-colors`,
                                router.pathname === row.href
                                    ? tw`border-sky-500 text-sky-500`
                                    : tw`border-sky-50 hover:(border-gray-400 text-gray-400)`,
                            ]}
                        >
                            <p>{row.title}</p>
                        </div>
                    </NextLink>
                )
            })}
        </header>
    )
}

export default Navbar
