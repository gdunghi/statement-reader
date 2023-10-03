const pdfjs = require("pdfjs-dist");
const fs = require('fs');
const {parseCitibankCreditStatement} = require("./citibank.credit")
const {parseFirstChoiceCreditStatement} = require("./firstchoice.credit");
const {parseTTBCreditStatement} = require("./ttb.credit");
const bankType = ['ttb credit card', 'กรุงศรีเฟรสชอยส', 'citi credit cards']

async function extractTextChunksFromPDF(source, password) {
    const documentProvider = pdfjs.getDocument({password: password, url: source})


    const document = await documentProvider.promise;

    const pages = [];

    for (let numPage = 1; numPage <= document.numPages; numPage++) {
        try {
            const page = await document.getPage(numPage)
            const textContents = await page.getTextContent()

            const textChunks = textContents.items
                .map((item) => {
                    // Text content
                    if ('str' in item) return item.str.trim()

                    return ''
                })
                .filter((line) => line)

            pages.push(textChunks)
        } catch (err) {
            // TODO: handle possible errors on page N
            throw new Error(`'unable to parse page ${numPage}'`)
        }
    }
    return pages;
}


const findBankType = (s) => {
    for (const bank of bankType) {
        if (s.toLowerCase().includes(bank)) return bank
    }
}

async function parseStatement(source, password = []) {
    if (password.length === 0) {
        return Promise.reject("PasswordException")
    }

    const pwd = password[0];
    const rawChunks = await extractTextChunksFromPDF(source, pwd).catch((err) => {
        if (err?.name === 'PasswordException' && password.length > 0) {
            return parseStatement(source, password.slice(1));
        }
    });
    const rawString = rawChunks.flat().join('')
    const bank = findBankType(rawString)

    if (bank === 'ttb credit card') return parseTTBCreditStatement(rawChunks);
    if (bank === 'กรุงศรีเฟรสชอยส') return parseFirstChoiceCreditStatement(rawChunks);
    if (bank === 'citi credit cards') return parseCitibankCreditStatement(rawChunks);

    return Promise.reject('statement type or bank is not supported');
}

const groupBy = (array, key) => {
    // Return the end result
    const grouping = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object

    return Object.keys(grouping).map((key) => {
        const result = grouping[key].reduce((accum, transaction) => {
            return accum + transaction.amount;
        }, 0);
        return [key, result]
    });
};


async function main() {
    const result = [];
    const source = await fs.promises.readdir('./source');
    for (const file of source) {
        const r = await parseStatement(`./source/${file}`, ["xxx", "xxx", 'xxx']);
        result.push(r);
    }


    const summary = groupBy(result.flat(), 'description')
        .sort((x, y) => x[1] > y[1] ? -1 : 1);

    summary.forEach((sum) => {
        console.log(sum);
    });


}


(async () => {
    await main();
})();