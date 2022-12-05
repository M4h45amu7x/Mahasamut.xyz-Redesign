/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
    webpack: (config) => {
        config.plugins.push(new WindiCSSWebpackPlugin())
        return config
    },
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
}