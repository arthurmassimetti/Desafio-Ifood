'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMinOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY change
 *  2. INTEGER_ARRAY arr
 */

function getMinOperations(change, arr) {
    let operations = 0;
    const m = arr.length;

    for (let i = 0; i < m; i++) {
        if (change[arr[i] - 1] > 0) {
            operations++;
            change[arr[i] - 1]--;
        } else {
            return -1;
        }
    }

    return operations;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const changeCount = parseInt(readLine().trim(), 10);

    let change = [];

    for (let i = 0; i < changeCount; i++) {
        const changeItem = parseInt(readLine().trim(), 10);
        change.push(changeItem);
    }

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = getMinOperations(change, arr);

    ws.write(result + '\n');

    ws.end();
}
