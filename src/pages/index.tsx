import type { NextPage } from 'next'

import NextImage from 'next/image'

import { NextSeo } from 'next-seo'

import Section from 'components/layout/Section'

import tw from 'twin.macro'

interface ISkills {
    name: string
    list: string[]
}

const skillLists: ISkills[] = [
    {
        name: 'Languages',
        list: ['HTML', 'CSS', 'SASS', 'PHP', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    },
    {
        name: 'Frameworks',
        list: ['Express', 'React', 'Next.js', 'Electron', 'JDA', 'Bootstrap', 'Tailwind CSS', 'Windi CSS'],
    },
    {
        name: 'Databases',
        list: ['MySQL', 'SQLite'],
    },
    {
        name: 'Other',
        list: ['Git', 'Prisma'],
    },
]

const Home: NextPage = () => {
    return (
        <>
            <NextSeo title="0x11 year old Developer from Thailand" titleTemplate="M4h45amu7x - %s" />

            <Section>
                <Section.Title>M4h45amu7x</Section.Title>
                <Section.Body>
                    {`Hi, I'm M4h45amu7x, a Developer from Thailand. I love writing code and learning anything about it. I'm about to learn C#, C++ (maybe)`}
                </Section.Body>
            </Section>
            {skillLists.map((row, index) => {
                return (
                    <Section key={index}>
                        <Section.Title>{row.name}</Section.Title>
                        <Section.Body noIndent>
                            <div tw="mt-2 grid grid-cols-3 gap-3">
                                {row.list.map((row2, index) => {
                                    return (
                                        <div tw="flex items-center gap-2" key={index}>
                                            <NextImage
                                                width={32}
                                                height={32}
                                                src={`/images/icons/${row2
                                                    .replaceAll(' ', '')
                                                    .toLocaleLowerCase()}.png`}
                                                alt={row2}
                                                tw="w-[32px] h-[32px]"
                                                quality={100}
                                            />
                                            <p>{row2}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </Section.Body>
                    </Section>
                )
            })}
        </>
    )
}

export default Home
