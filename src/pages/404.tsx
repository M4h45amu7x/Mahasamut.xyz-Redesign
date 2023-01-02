import type { NextPage } from 'next'

import { NextSeo } from 'next-seo'

import Section from 'components/layout/Section'

import tw from 'twin.macro'

const _404: NextPage = () => {
    return (
        <>
            <NextSeo title="Oops! We ran into some problems" />

            <Section>
                <Section.Title>404: Not found</Section.Title>
                <Section.Body>
                    <p>{"The requested resource couldn't be found"}</p>
                </Section.Body>
            </Section>
        </>
    )
}

export default _404
