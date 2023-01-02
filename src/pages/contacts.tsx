import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'

import type { NextPage } from 'next'

import { NextSeo } from 'next-seo'

import ButtonLink from 'components/ButtonLink'
import Section from 'components/layout/Section'

import tw from 'twin.macro'

const Service: NextPage = () => {
    return (
        <>
            <NextSeo title="Contacts" />

            <Section>
                <Section.Title>Get in touch</Section.Title>
                <Section.Body noIndent>
                    <ul>
                        <li>
                            <ButtonLink href="https://facebook.com/M4h45amu7x">
                                <FaFacebookSquare tw="inline align-middle" /> @M4h45amu7x
                            </ButtonLink>
                        </li>
                        <li>
                            <ButtonLink href="https://github.com/M4h45amu7x">
                                <FaGithubSquare tw="inline align-middle" /> @M4h45amu7x
                            </ButtonLink>
                        </li>
                    </ul>
                </Section.Body>
            </Section>
        </>
    )
}

export default Service
