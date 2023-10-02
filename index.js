const pdfjs = require("pdfjs-dist");
const citibank = require("./citibank.credit")

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

async function parseStatement(source, password) {
    const rawChunks = await extractTextChunksFromPDF(source, password)
    return rawChunks
}

async function main() {
    const result = await parseStatement("eStatement_09172023.pdf", "XXXXX");
   const a = citibank.parseCitibankCreditStatement(result);
   console.log(a);
}


(async () => {
    await main();
})();