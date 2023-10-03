const dateRegex = /^\d{2}\/\d{2}\/\d{2}$/
const amountRegex = /^-?(\d?\d?\d,?)+\.(\d\d)$/
const creditCardAndNameRegx = /\d{4}\s\d{2}XX\sXXXX\s\d{4}\s\(.*\)$/;


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
    let foundFirstLine = false;

    for (const content of contents) {

        if (!foundFirstLine  && (creditCardAndNameRegx.test(content) || page > 1)) {
            foundFirstLine = true;
            continue;
        }

        if (!foundFirstLine) {
            continue;
        }

        if (dateRegex.test(content) && mode === 'seek') {
            tempItem.date1 = content;
            mode = 'date1'
        } else if (dateRegex.test(content) && mode === 'date1') {
            tempItem.date2 = content;
            mode = 'date2'
        } else if (mode === 'date2') {
            tempItem.provider = content;
            mode = 'provider'
        } else if (amountRegex.test(content) && mode === 'provider') {
            tempItem.amount = content;
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
            const [d1, m1] = date1.split("/");
            const [d2, m2] = date2.split("/");
            const processedPostingDate = new Date(`${year}-${m1}-${d1} 00:00:00`)
            let processedTransactionDate = new Date(`${year}-${m2}-${d2} 00:00:00`)

            if (
                processedPostingDate.valueOf() - processedTransactionDate.valueOf() <
                0
            ) {
                processedTransactionDate = new Date(
                    `${Number(year) -1 }-${m2}-${d2}`
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
const parseFirstChoiceCreditStatement = (pages) => {
    const statementYear = ( Number(pages[0][15]) - 543)

    return pages.map((contents, index) => {
        return extractTextChunksFromLine(contents, index + 1);
    }).flat().map(chunksToTransaction(statementYear));

}

module.exports = {
    parseFirstChoiceCreditStatement
}
