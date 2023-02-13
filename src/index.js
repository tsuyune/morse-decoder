const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getValueByKey(table, value) {
    return table[value];
}

function turnBinaryToMorse(table, str) {
    let finalStr = "";
    let strArr = [];
    strArr = String(str).match(/.{1,10}/g);
    for (let key in strArr) {
        if (strArr[key] == "**********") {
            finalStr += " ";
            continue;
        }
        morse = strArr[key].replaceAll("11", "-").replaceAll("10", ".").replaceAll("0", "");
        finalStr += getValueByKey(table, morse);
    }
    return finalStr;
}

function decode(expr) {
    return turnBinaryToMorse(MORSE_TABLE, expr);
}

module.exports = {
    decode
}