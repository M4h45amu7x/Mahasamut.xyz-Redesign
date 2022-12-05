import NextLink from 'next/link'
import { useRouter } from 'next/router'

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
        <header className="grid grid-flow-col my-6">
            {navbarLists.map((row, index) => {
                return (
                    <NextLink href={row.href} key={index} legacyBehavior>
                        <div
                            className={`cursor-pointer text-lg text-center border-b-2 transition-colors ${
                                router.pathname === row.href
                                    ? 'border-sky-500 text-sky-500'
                                    : 'border-sky-50 hover:border-gray-400 hover:text-gray-400'
                            } pb-2`}
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
