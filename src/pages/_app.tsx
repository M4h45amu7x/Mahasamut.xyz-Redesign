import { useEffect } from 'react'

import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'

import type { AppProps } from 'next/app'
import NextImage from 'next/image'

import { DefaultSeo } from 'next-seo'

import 'windi.css'
import colors from 'windicss/colors'

import Footer from 'components/layout/Footer'
import Navbar from 'components/layout/Navbar'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log(
            '%cMade with ❤️ by M4h45amu7x',
            'font-size:18px;background-color:#FF5555;padding:6px;border-radius:6px;',
        )
    }, [])

    return (
        <>
            <DefaultSeo
                titleTemplate="%s | M4h45amu7x"
                description="0x11 year old Developer from Thailand"
                canonical="https://mahasamut.xyz"
                openGraph={{
                    url: 'https://mahasamut.xyz',
                    title: 'M4h45amu7x - 0x11 year old Developer from Thailand',
                    description: '0x11 year old Developer from Thailand',
                    type: 'website',
                    locale: 'en_US',
                    siteName: 'M4h45amu7x',
                    images: [
                        {
                            url: '/images/logo.png',
                            alt: 'M4h45amu7x',
                            type: 'image/png',
                        },
                    ],
                }}
                twitter={{
                    handle: 'AmazonZ',
                    site: 'M4h45amu7x - 0x11 year old Developer from Thailand',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        property: 'keywords',
                        content:
                            'mahasamut, m4h45amu7x, developer, php, html, css, sass, java, javascript, photoshop, vegas, pro, skills, thai, thailand, เว็บไซต์, เกม, รับจ้าง, service',
                    },
                    {
                        property: 'msapplication-TitleColor',
                        content: colors.sky[500].toString(),
                    },
                    {
                        property: 'msapplication-TileImage',
                        content: '/images/favicon/ms-icon-144x144.png',
                    },
                ]}
                additionalLinkTags={[
                    {
                        rel: 'apple-touch-icon',
                        sizes: '57x57',
                        href: '/images/favicon/apple-icon-57x57.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '60x60',
                        href: '/images/favicon/apple-icon-60x60.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '72x72',
                        href: '/images/favicon/apple-icon-72x72.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '76x76',
                        href: '/images/favicon/apple-icon-76x76.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '114x114',
                        href: '/images/favicon/apple-icon-114x114.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '120x120',
                        href: '/images/favicon/apple-icon-120x120.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '144x144',
                        href: '/images/favicon/apple-icon-144x144.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '152x152',
                        href: '/images/favicon/apple-icon-152x152.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '180x180',
                        href: '/images/favicon/apple-icon-180x180.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '192x192',
                        href: '/images/favicon/android-icon-192x192.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '16x16',
                        href: '/images/favicon/favicon-16x16.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '32x32',
                        href: '/images/favicon/favicon-32x32.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '96x96',
                        href: '/images/favicon/favicon-96x96.png',
                    },
                    {
                        rel: 'manifest',
                        href: '/images/favicon/manifest.json',
                    },
                ]}
                themeColor={colors.sky[500].toString()}
            />

            <MouseParallaxContainer className="parallax">
                <MouseParallaxChild
                    factorX={0.01}
                    factorY={0.01}
                    updateStyles={{
                        background: 'url(/images/background.jpg)',
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100vh',
                        transform: 'scale(1.2)',
                    }}
                >
                    <div className="fixed backdrop-filter backdrop-blur-sm w-full h-screen bg-black/10" />
                    <div className="meteor-1" />
                    <div className="meteor-2" />
                    <div className="meteor-3" />
                    <div className="meteor-4" />
                    <div className="meteor-5" />
                    <div className="meteor-6" />
                    <div className="meteor-7" />
                    <div className="meteor-8" />
                    <div className="meteor-9" />
                    <div className="meteor-10" />
                    <div className="meteor-11" />
                    <div className="meteor-12" />
                    <div className="meteor-13" />
                    <div className="meteor-14" />
                    <div className="meteor-15" />
                </MouseParallaxChild>
                <MouseParallaxChild
                    factorX={0.04}
                    factorY={0.04}
                    updateStyles={{
                        position: 'fixed',
                        left: '0',
                        top: '0',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-sky-900/70 rounded-lg w-[95%] sm:w-[500px] max-h-[95%] p-5 text-sky-50 shadow-lg shadow-sky-900/50 overflow-y-auto">
                            <NextImage
                                src="/images/profile.jpg"
                                alt="Logo"
                                width={256}
                                height={256}
                                className="block mx-auto w-1/2 h-1/2 sm:w-[128px] rounded-full border-solid border-2 border-sky-500"
                                quality={100}
                            />
                            <Navbar />
                            <Component {...pageProps} />
                        </div>
                    </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.01} factorY={0.01}>
                    <Footer />
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </>
    )
}

export default MyApp
