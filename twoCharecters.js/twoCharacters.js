'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
  // Write your code here

  let array = [...new Set(s)];
  let spread;
  let numberMax = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      spread = [...s].filter((value) => value == array[i] || value == array[j]);
      if (
        spread.every((value, i) => {
          return i % 2 ? value == spread[1] : value == spread[0];
        })
      ) {
        numberMax = Math.numberMax(spread.length, numberMax);
      }
    }
  }
  return numberMax;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const s = readLine();

  const result = alternate(s);

  ws.write(result + '\n');

  ws.end();
}
