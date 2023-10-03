const mockStatement = [
    [
        "1152309072043",
        "4784 48XX XXXX 5410",
        "บั",
        "ต",
        "รเคร",
        "ด",
        "ิ",
        "ต",
        "440.00",
        "ส",
        "ิ",
        "นเชื่อบุคคล",
        "0.00",
        "15",
        "กันยายน",
        "2566",
        "85,493.10",
        "05",
        "ต",
        "ุ",
        "ลาคม",
        "2566",
        "4,274.66",
        "ใบเ",
        "ส",
        "ร็",
        "จ",
        "รับเ",
        "ง",
        "ิ",
        "น",
        "ฉ",
        "บับนี้",
        "จ",
        "ะ",
        "ส",
        "มบูรณ",
        "์",
        "เมื่อไ",
        "ด้",
        "รับช",
        "ำ",
        "าระเ",
        "ง",
        "ิ",
        "น",
        "/ This receipt will be valid upon payment",
        "2776-P_BS1801815_KFV_15092023_000009",
        "(E)",
        "คุณ",
        "จ",
        "ิ",
        "รายุ",
        "โพ",
        "ธ",
        "ิ",
        "ส",
        "าร",
        "42/182",
        "บ",
        "้",
        "านกลา",
        "ง",
        "เมือ",
        "ง",
        "รั",
        "ต",
        "นา",
        "ธ",
        "ิ",
        "เบ",
        "ศ",
        "ร",
        "์",
        "ซ",
        ".",
        "เลี่ย",
        "ง",
        "เมือ",
        "ง",
        "นนทบุรี",
        "10",
        "บา",
        "ง",
        "กระ",
        "ส",
        "อ",
        "เมือ",
        "ง",
        "นนทบุรี",
        "11000",
        "EBJCIEBMBIIEABNFEFAFJMACAEKAJFFBCIEIAKEFEFFEFFCBEFFAOAGIAH",
        "000201500500423586529742815",
        "G3803-P23276-1/3",
        "V 10.0.0",
        "EBJEFFIFBFADHABGIAH",
        "กรุณาช",
        "ำ",
        "าระเ",
        "ง",
        "ิ",
        "น",
        "สดห",
        "รือเช็คภายในวันที่ก",
        "ำ",
        "า",
        "ห",
        "น",
        "ด",
        "15",
        "ก",
        ".",
        "ย",
        ". 66",
        "+3,716",
        "+3,416",
        "-1,000",
        "+0",
        "6,132",
        "15",
        "ธ",
        ".",
        "ค",
        ". 66",
        "0",
        "15",
        "ม",
        ".",
        "ค",
        ". 67",
        "0",
        "บัตรเครดิตกรุงศรีเฟรสชอยส วีซา",
        "/ Credit Card",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "นบั",
        "ต",
        "รเคร",
        "ด",
        "ิ",
        "ต",
        "Credit Line",
        "150,000.00",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "นบั",
        "ต",
        "รเคร",
        "ด",
        "ิ",
        "ต",
        "ใช",
        "้",
        "ไปทั้",
        "งส",
        "ิ้",
        "น",
        "Outstanding Balance",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "นค",
        "ง",
        "เ",
        "ห",
        "ลือ",
        "Available Credit Line",
        "85,493.10",
        "64,506.90",
        "ยอ",
        "ด",
        "เรียกเก็บขอ",
        "ง",
        "รอบบัญชีที่แล",
        "้",
        "ว",
        "46,766.18",
        "03/09/66",
        "03/09/66",
        "ยอ",
        "ด",
        "ช",
        "ำ",
        "าระ",
        "ด้",
        "วยเ",
        "ง",
        "ิ",
        "น",
        "สด",
        "(",
        "เ",
        "ง",
        "ิ",
        "น",
        "ต้",
        "น",
        "46,766.18 )",
        "-46,766.18",
        "ยอ",
        "ด",
        "รวมการช",
        "ำ",
        "าระเ",
        "ง",
        "ิ",
        "น",
        "/ Total Payments",
        "-46,766.18",
        "4784 48XX XXXX 5410 (JIRAYU PHOTISAN)",
        "13/08/66",
        "16/08/66",
        "WWW.LAZADA.CO.TH BANGKOK TH",
        "-5,704.00",
        "16/08/66",
        "18/08/66",
        "Trip.com BANGKOK TH",
        "7,175.00",
        "17/08/66",
        "18/08/66",
        "Trip.com BANGKOK TH",
        "-4,975.00",
        "17/08/66",
        "18/08/66",
        "HOME AFFAIRS - ONLINE SOUTHPORT AU (192.66 AUD)",
        "4,568.88",
        "17/08/66",
        "18/08/66",
        "OF London GB (4.28 USD)",
        "155.94",
        "21/08/66",
        "23/08/66",
        "SHOPEEPAY *(FOR SHOP BANGKOK TH",
        "728.00",
        "30/08/66",
        "31/08/66",
        "MRT-BEM Bangkok TH",
        "54.00",
        "01/09/66",
        "02/09/66",
        "GOOGLE*ADS7780655639 CC GOOGLE.COM SG",
        "1,043.43",
        "01/09/66",
        "03/09/66",
        "Trip.com BANGKOK TH",
        "56,290.00",
        "02/09/66",
        "03/09/66",
        "TOPS-RATTANATHIBET NONTHABURI TH",
        "2,741.00",
        "03/09/66",
        "04/09/66",
        "LOTUS BROKER_OUT888-CA SAMUTPRAKAN TH",
        "16,654.76",
        "03/09/66",
        "04/09/66",
        "FOR U PHARMA-TOPS RATT NONTHABURI TH",
        "400.00",
        "03/09/66",
        "04/09/66",
        "CTD-RATTANATHIBETH NONTHABURI TH",
        "158.00",
        "06/09/66",
        "07/09/66",
        "Google YouTubePremium 650-2530000 CA",
        "299.00",
        "06/09/66",
        "08/09/66",
        "AIRASIA-DLIGHT-AUD KUALA LUMPUR AU (147.52 AUD)",
        "3,473.01",
        "09/09/66",
        "10/09/66",
        "SHELL 0898 NUAMEK CO. NONTHABURI TH",
        "1,600.00",
        "12/09/66",
        "13/09/66",
        "PP*HUMBLEBUNDL 6465412114 CA",
        "931.08",
        "SUBTOTAL FOR 4784 48XX XXXX 5410 (JIRAYU PHOTISAN)",
        "85,593.10",
        "ยอ",
        "ด",
        "รวมรายการใช",
        "้",
        "จ่",
        "าย",
        "/ Transaction Amount",
        "85,593.10"
    ],
    [
        "G3803-P23277-2/3",
        "02/09/66",
        "02/09/66",
        "1000",
        "คะแนนแลกรับเคร",
        "ด",
        "ิ",
        "ต",
        "เ",
        "ง",
        "ิ",
        "นคืน",
        "100",
        "บาท",
        "-100.00",
        "ยอ",
        "ด",
        "รวมปรับปรุ",
        "ง",
        "รายการ",
        "/ Adjustment Amount",
        "-100.00",
        "ยอ",
        "ด",
        "รวมที่",
        "ต้",
        "อ",
        "ง",
        "ช",
        "ำ",
        "าระ",
        "สำ",
        "า",
        "ห",
        "รับบั",
        "ต",
        "รเคร",
        "ด",
        "ิ",
        "ต",
        "/ Total Payment Due For Credit Card",
        "85,493.10",
        "ยอ",
        "ด",
        "ขั้น",
        "ตำ",
        "่",
        "าที่",
        "ต้",
        "อ",
        "ง",
        "ช",
        "ำ",
        "าระ",
        "สำ",
        "า",
        "ห",
        "รับบั",
        "ต",
        "รเคร",
        "ด",
        "ิ",
        "ต",
        "/ Minimum Payment Amount For Credit Card",
        "4,274.66",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "น",
        "ส",
        "ิ",
        "นเชื่อ",
        "/",
        "เ",
        "ง",
        "ิ",
        "น",
        "สด",
        "150,000.00",
        "Loan / Cash Credit Line",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "น",
        "ส",
        "ิ",
        "นเชื่อ",
        "/",
        "เ",
        "ง",
        "ิ",
        "น",
        "สด",
        "ใช",
        "้",
        "ไป",
        "0.00",
        "Loan / Cash Outstanding Balance",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "นเบิกเ",
        "ง",
        "ิ",
        "น",
        "สด",
        "ค",
        "ง",
        "เ",
        "ห",
        "ลือ",
        "150,000.00",
        "Available Cash Limit",
        "ว",
        "ง",
        "เ",
        "ง",
        "ิ",
        "น",
        "ส",
        "ิ",
        "นเชื่อค",
        "ง",
        "เ",
        "ห",
        "ลือ",
        "150,000.00",
        "Available Cash Limit",
        "ยอ",
        "ด",
        "เรียกเก็บขอ",
        "ง",
        "รอบบัญชีที่แล",
        "้",
        "ว",
        "0.00",
        "ยอ",
        "ด",
        "รวมการช",
        "ำ",
        "าระเ",
        "ง",
        "ิ",
        "น",
        "/ Total Payments",
        "0.00",
        "ยอ",
        "ด",
        "รวมที่",
        "ต้",
        "อ",
        "ง",
        "ช",
        "ำ",
        "าระ",
        "สำ",
        "า",
        "ห",
        "รับ",
        "ส",
        "ิ",
        "นเชื่อบุคคล",
        "/ Total Payment Due For Personal Loan",
        "0.00",
        "ยอ",
        "ด",
        "ขั้น",
        "ตำ",
        "่",
        "าที่",
        "ต้",
        "อ",
        "ง",
        "ช",
        "ำ",
        "าระ",
        "สำ",
        "า",
        "ห",
        "รับ",
        "ส",
        "ิ",
        "นเชื่อบุคคล",
        "/ Minimum Payment Amount For Personal Loan",
        "0.00"
    ],
    [
        "** หมายเหตุ : ทานสามารถตรวจสอบรายชื่อธนาคารและผูใหบริการที่เขารวมไดจากเว็บไซดของธนาคารแหงประเทศไทย",
        "คาธรรมเนียมเปนไปตามเงื่อนไขและขอกำหนดของแตละธนาคารผูใหบริการ",
        "QR Code เพื่อชำระเงิน ผ\u0012านแอปพลิเคชันธนาคาร",
        "หมายเลขบัตร / Card No. (Ref.)",
        "ชื่อ / Name",
        "Service Code : AYCAP",
        "mPay Station 10 บาท/รายการ",
        "จุดบริการ CenPay powered by บุญเติม คาบริการรายการละ 10 บาท",
        "โลตัส ทุกสาขา คาบริการรายละ 10 บาท*",
        "บมจ.ธนาคารทหารไทยธนชาต COMP.CODE 013( 10/30 บาท)*",
        "คุณ",
        "จ",
        "ิ",
        "รายุ",
        "โพ",
        "ธ",
        "ิ",
        "ส",
        "าร",
        "4784 48XX XXXX 5410",
        "85,493.10",
        "4,274.66",
        "05",
        "ต",
        "ุ",
        "ลาคม",
        "2566",
        "EBDAAOBIFAIMFCBICECECBEJCCEOAAFEFIAMMIAFBIAIMHABCEIEEMGAICAMCBFGCAAMIBIFIAMMIAMIABIFJAFGIAH",
        "G3803-P23278-3/3"
    ]
];

module.exports = {
    mockStatement
}