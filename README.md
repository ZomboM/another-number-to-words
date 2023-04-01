# number-to-text
Convert numbers to text, like "five hundred seventy-two".
## Usage
```js
const nToText = require('number-to-text')
// nToText(n, useAnd=false)
nToText(43) // => forty-three
nToText("1234567890") // => one billion, two hundred thirty-four million, five hundred sixty-seven thousand, eight hundred ninety
nToText(123456) //       => one hundred twenty-three thousand, four hundred fifty-six
nToText(123456, true) // => one hundred and twenty-three thousand, four hundred and fifty-six
```
