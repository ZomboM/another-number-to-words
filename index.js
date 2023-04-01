const chunkArray = (array, c) => Array(Math.ceil(array.length / c)).fill().map((_, i) => i * c).map(b => array.slice(b, b + c))
const zero = 'zero'
const oneDigit = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]
const hundred = 'hundred'
const largeNumbers = [
  '',
  'thousand',
  'million',
  'billon',
  'trillion',
  'quadrillion',
  'quintillion',
  'sextillion',
  'septillion',
  'octillion',
  'nonillion',
  'decillion',
  'undecillion',
  'dodecillion',
]
const numberToDigits = n => {
  if (typeof n == 'string') return n.split('').reverse().map(b => parseInt(b))
  return Array(Math.ceil(Math.log10(n))).fill().map((_, i) => Math.floor(n / (10 ** i)) % 10)
}
const twoDigitsToText = digits => {
  const tensD = tens[digits[1]]
  let onesD
  if (digits[1] == 1) {
    onesD = teens[digits[0]]
  } else {
    onesD = oneDigit[digits[0]]
  }
  if (!onesD) return tensD
  if (!tensD) return onesD
  return tensD + '-' + onesD
}
const threeDigitsToText = digits => {
  const twoDigits = twoDigitsToText(digits)
  if (!digits[2]) return twoDigits
  if (!twoDigits) return oneDigit[digits[2]] + ' ' + hundred
  return oneDigit[digits[2]] + ' ' + hundred + ' ' + twoDigits
}
const numberToText = n => {
  const digits = numberToDigits(n)
  const chunks = chunkArray(digits, 3).map(a => a.join('').padEnd(3, '0').split('').map(n => parseInt(n)))
  const words = chunks.map(t => threeDigitsToText(t))
  const final = words.reduce((all, next, index) => {
    let result = all
    if (index != 0) result = ' ' + result
    if (next == '') return result
    const extension = largeNumbers[index]
    result = next + ' ' + extension + result
    return result
  })
  return final
}

module.exports = numberToText
