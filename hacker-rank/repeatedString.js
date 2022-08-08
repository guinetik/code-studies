"use strict";

/*
There is a string s of lowercase English letters that is repeated infinitely many times. 
Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
aba
10
outputs 7

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring */
/**
 *
 * @param {string} s - a string to repeat
 * @param {number} n - the number of characters to consider
 * @returns
 */
function repeatedString(s, n) {
    let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
    let remainder = n % s.length
    let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length
    return count + remainderCount
}

function main() {
  const myArgs = process.argv.slice(2);
  console.log("myArgs: ", myArgs);
  const result = repeatedString(myArgs[0], parseInt(myArgs[1]));
  console.log("result: ", result);
}
main();
