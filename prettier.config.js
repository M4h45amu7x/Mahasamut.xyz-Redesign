/** @type {import('prettier').Config} */

module.exports = {
    // plugins: [require('prettier-plugin-twin.macro')],
    arrowParens: 'always',
    trailingComma: 'all',
    tabWidth: 4,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    importOrder: [
        '^react$',
        '^react/(.*)$',
        '^react-(.*)$',
        '^next$',
        '^next/(.*)$',
        '^next-(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^components/(.*)$',
        '^interfaces/(.*)$',
        '^styles/(.*)$',
        '^twin.macro$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
