"use strict";

/*
 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 */

/**
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 * @param {Array<0|1>} c - the array of clouds representing the level of the game
 */
function jumpingOnClouds(c) {
  function countJumps() {
    let count = 0;
    for (let i = 0; i < c.length - 1; i++) {
      if (c[i] == 0) i++;
      count++;
    }
    return count;
  }
  return countJumps();
}

function main() {
  const myArgs = process.argv.slice(2);
  console.log("myArgs: ", myArgs);
  const result = jumpingOnClouds(myArgs[0].split(" "));
  console.log("result: ", result);
}
main();
