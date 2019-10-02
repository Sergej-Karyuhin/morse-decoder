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

function decode(expr) {
  let result = [];

  let amountSymbol = expr.length / 10;
  let parsingStart = 0;
  for (let i = 0; i < amountSymbol; i++) {
    result.push(expr.substr(parsingStart, 10));
    parsingStart += 10;
  }

  result = result.reduce((decodedString, item) => {
    if (item !== "**********") {
      item = item.replace(/00/g, "");
      item = item.replace(/10/g, ".");
      item = item.replace(/11/g, "-");
      return decodedString + MORSE_TABLE[item];
    }
    else {
      return decodedString + " ";
    }
  }, "");

  return result;
}

module.exports = {
    decode
}
