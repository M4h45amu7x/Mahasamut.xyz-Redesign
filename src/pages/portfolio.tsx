import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { NextSeo } from 'next-seo'

import axios from 'axios'
import { Autoplay, Mousewheel, Pagination } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import GithubRepoCard from 'components/GithubRepoCard'
import WorkCard from 'components/WorkCard'
import Section from 'components/layout/Section'

import { IGitHubRepo } from 'interfaces/GitHubRepo'
import IWork from 'interfaces/Work'

import tw from 'twin.macro'

const workLists: IWork[] = [
    {
        image: '1.png',
        title: 'PokeCraft',
        description: 'Minecraft server website',
        href: 'https://pokecraft.shop',
    },
    {
        image: '2.png',
        title: 'Poke Revolution',
        description: 'Minecraft server website',
        href: 'https://pokerevolution.net',
    },
    {
        image: '3.png',
        title: 'Pixelmon Infinity',
        description: 'Minecraft launcher',
        href: 'https://pixelmon.infh.net',
    },
    {
        image: '4.png',
        title: 'Pixelmon Infinity',
        description: 'Minecraft server website',
        href: 'https://pixelmon.infh.net',
    },
    {
        image: '5.png',
        title: 'Poke Spirit',
        description: 'Minecraft server website',
        href: 'https://poke-spirit.com',
    },
]

const Service: NextPage = () => {
    const [githubRepo, setGithubRepo] = useState<IGitHubRepo[]>()

    useEffect(() => {
        const fetchData = async () => {
            await axios({
                method: 'GET',
                url: 'https://api.github.com/users/M4h45amu7x/repos',
            })
                .then((res) => res.data)
                .then((data: IGitHubRepo[]) => {
                    setGithubRepo(
                        data.filter((row) => !row.fork && row.name !== row.owner.login).sort((a, b) => b.id - a.id),
                    )
                })
                .finally(() => {})
        }
        fetchData()
    }, [])

    return (
        <>
            <NextSeo title="Portfolio" />

            <Section>
                <Section.Title>Work</Section.Title>
                <Section.Body noIndent>
                    <div tw="mt-4 grid grid-cols-1 gap-5">
                        {workLists.map((row, index) => {
                            return <WorkCard data={row} key={index} />
                        })}
                    </div>
                </Section.Body>
            </Section>
            <Section>
                <Section.Title>Open-Source projects</Section.Title>
                <Section.Body noIndent>
                    <Swiper
                        tw="mt-4"
                        modules={[Pagination, Autoplay, Mousewheel]}
                        spaceBetween={16}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay
                        loop
                        grabCursor
                        mousewheel
                    >
                        {githubRepo?.map((row, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <GithubRepoCard data={row} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Section.Body>
            </Section>
        </>
    )
}

export default Service
