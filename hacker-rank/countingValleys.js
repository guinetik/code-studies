"use strict";

/* 
 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level. 
*/


/**
 * Complete the 'countingValleys' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 * 
 * @param {number} steps - the number of steps
 * @param {Array<'U'|'D'>} path - the directions taken by the hicker either Uphil or downhil
 */
function countingValleys(steps, path) {
    const bin = path.split("").map(x => x === "U" ? 1 : -1);
    let depth = 0;
    let valleys = 0;
    for (let i = 0; i < steps; i++) {
        depth += bin[i];
        if (depth === 0 && bin[i] === 1) {
            valleys++;
        }
    }
    return valleys;
}

function main() {
  const myArgs = process.argv.slice(2);
  console.log("myArgs: ", myArgs);
  const result = countingValleys(myArgs[0], myArgs[1]);
  console.log("result: ", result);
}
main();
