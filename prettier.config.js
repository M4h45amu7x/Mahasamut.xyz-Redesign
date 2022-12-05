/** @type {import('prettier').Config} */

module.exports = {
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
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
