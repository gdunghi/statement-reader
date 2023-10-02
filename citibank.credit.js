const dateRegex = /^(\d{2})+\sJAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC$/
const monthRegex = /^JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC$/
const amountRegex = /^(\d?\d?\d,?)+\.(\d\d)+-?$/
const satangRegex = /^\.\d\d-?$/
const creditCardRegex = /^([\dX]{4}-){3}\d{4}$/

const foriegnCurrencies = [
    'U.S. DOLLAR',
    'YEN',
    'AUSTRALIANDOLLAR',
    'AUSTRALIAN DOLLAR',
    'SINGAPORE DOLLAR',
    'SGD',
]

/**
 *
 * @param contents
 * @param page
 * @returns {*[]}
 */
function extractTextChunksFromLine(contents = [], page = 1) {
    let mode = 'seek'

    let parsedItems = []
    let tempItem = {}
    let previousIsSubtotal = false;
    let foundFirstLine = false;


    // first page is previous balance, prune some of those out before start looping
    for (const content of contents[25] === 'PREVIOUS BALANCE'
        ? contents.slice(27)
        : contents) {

        if (page > 1) {
            foundFirstLine = true;
        }

        if (!foundFirstLine && content === 'SUB-TOTAL') {
            previousIsSubtotal = true;
        }

        // Amount after subtotal
        if (!foundFirstLine && previousIsSubtotal && amountRegex.test(content)) {
            foundFirstLine = true;
            continue;
        }

        if (!foundFirstLine) {
            continue;
        }

        if (amountRegex.test(content) && mode === 'seek') {
            tempItem.amount = content;
            mode = 'amount'
        } else if (dateRegex.test(content) && mode === 'amount') {
            tempItem.date1 = content;
            mode = 'date1'
        } else if (dateRegex.test(content) && mode === 'date1') {
            tempItem.date2 = content;
            mode = 'date2'
        } else if (mode === 'date2') {
            tempItem.provider = content;
            mode = 'finalize'
        }


        if (mode === 'finalize') {
            parsedItems.push(tempItem);
            tempItem = {};
            mode = 'seek';
        }


    }

    return parsedItems;
}

const intoAmount = (s) => {
    let isMinus = false
    let targetInput = s

    if (typeof s === 'string' && s.endsWith('-')) {
        isMinus = true
        targetInput = targetInput.replace('-', '')
    }

    return parseFloat(targetInput?.replace(/,/g, '') ?? '') * (isMinus ? -1 : 1)
}

const chunksToTransaction =
    (year) =>
        (chunks = []) => {
            const {date1, date2, amount, provider} = chunks

            // posting date should be newer than tx date
            const processedPostingDate = new Date(`${date1} ${year}`)
            let processedTransactionDate = new Date(`${date2} ${year}`)

            if (
                processedPostingDate.valueOf() - processedTransactionDate.valueOf() <
                0
            ) {
                processedTransactionDate = new Date(
                    `${date2} ${Number(year) - 1}`
                )
            }

            return {
                paymentDate: processedPostingDate,
                transactionDate: processedTransactionDate,
                description: provider,
                amount: intoAmount(amount),
            }
        }

/**
 *
 * @param pages
 * @returns {{amount: *, description: *, paymentDate: Date, transactionDate: Date}[]}
 */
const parseCitibankCreditStatement = (pages) => {
    const statementYear = new Date(pages[0][14]).getFullYear();

    return pages.map((contents, index) => {
        return extractTextChunksFromLine(contents, index + 1);
    }).flat().map(chunksToTransaction(statementYear));

}

module.exports = {
    parseCitibankCreditStatement
}
