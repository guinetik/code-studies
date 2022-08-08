"use strict";
/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 * @param {number} n - number of socks
 * @param {Array<number>} ar - array of colors
 */
function sockMerchant(n, ar) {
  function map(items) {
    return items.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  }
  function reduce(keys, values) {
    return keys.reduce((acc, curr) => {
      acc += Math.floor(values[curr] / 2);
      return acc;
    }, 0);
  }
  const socksMap = map(ar);
  return reduce(Object.keys(socksMap), socksMap);
}

function main() {
  const myArgs = process.argv.slice(2);
  console.log("myArgs: ", myArgs);
  const result = sockMerchant(myArgs[0], myArgs[1].split(","));
  console.log("result: ", result);
}
main();
