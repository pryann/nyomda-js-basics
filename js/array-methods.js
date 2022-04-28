// const productItems = Array.from(document.querySelectorAll('.product-item'))
// const vgaItems = productItems.filter((item) => item.dataset.type === 'vga')
// const itemCountSumPrice = vgaItems.map((item) => item.dataset.count * item.dataset.price)
// const sumVgaPrices = itemCountSumPrice.reduce((prev, curr) => prev + curr, 0)

// const sumVgaPrices = Array.from(document.querySelectorAll('.product-item'))
//   .filter((item) => item.dataset.type === 'vga')
//   .map((item) => item.dataset.count * item.dataset.price)
//   .reduce((prev, curr) => prev + curr, 0)

const getProductsArray = () =>
  Array.from(document.querySelectorAll('.product-item'))

const filterProductsByType = (products, type) =>
  products.filter((item) => item.dataset.type === type)

const sumProductsPriceByStock = (products) =>
  products.map((item) => item.dataset.count * item.dataset.price)

const sumAllProductsPrice = (products) =>
  products.reduce((prev, curr) => prev + curr, 0)

const sumVgaPrices = () => {
  const products = getProductsArray()
  const vga = filterProductsByType(products, 'vga')
  const vgaPrices = sumProductsPriceByStock(vga)
  return sumAllProductsPrice(vgaPrices)
  // sumAllProductsPrice(
  //   sumProductsPriceByStock(
  //     filterProductsByType(
  //       getProductsArray(), 'vga')
  //   )
  // )
}
const arr = [1, 2, 3, 4]
const arrCopy = [...arr]

const obj = { a: 1, b: 2 }
const objCopy = { ...obj }
console.log(arrCopy)
console.log(objCopy)

console.log(sumVgaPrices())
