//* this is the solution of the  assignment 
const getProductsOfNormalQuality = (productList) => productList.filter((product) => product.quality === 'Normal');
const getProductImageWithPngExtension = (productList) => productList.filter((product) => product.productImage.includes('png'));
const getCalorieOfTheMostExpensiveProduct = (productList) => productList.sort((smallestPrice,biggestPrice) => biggestPrice.price-smallestPrice.price)[0].totalCalories
;
const sortByExpirationDate = (productList) => {
  let result = productList.sort((a,b) => a.expireDate-b.expireDate);
  return result
};
export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};



/* const getProductsOfNormalQuality = (pProduct) => {
  return pProduct.getProductsOfNormalQuality.map((pProduct) =>pProduct.getProductsOfNormalQuality=='Normal' )
};
const getProductImageWithPngExtension = (pProduct) => {
  return pProduct.filter((product) => product.quality == "Normal");
};

const   getProductImageWithPngExtension = (pProduct) => {
  return pProduct.filter((product) => product.productImage.endsWith(".png"));
};

const getCalorieOfTheMostExpensiveProduct = (pProduct) => {
  const sortedProducts = pProduct.sort((product1, product2) => product2.price - product1.price);
  return sortedProducts[0].totalCalories;
};

const sortByExpirationDate = (pProduct) => {
  return pProduct.sort((product1, product2) => product1.expireDate - product2.expireDate)
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
 */

