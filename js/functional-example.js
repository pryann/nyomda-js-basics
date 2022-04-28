const convertToLowerCase = text => text.toLocaleLowerCase()
const reverseText = text => text.split('').reverse().join('')
const addQuotationMark = text => `"${text}"`

const pipe = (...fns) => text => fns.reduce((value, fn) => fn(value), text)

const generateText = pipe(
  convertToLowerCase,
  reverseText,
  addQuotationMark
)

console.log(generateText('Hello'))
