#! /usr/bin/env node

const path = require("path");
const bs58 = require("bs58");

function add(filePath) {
  return new Promise(resolve => {
    resolve(bs58.encode(Buffer.from(path.resolve(filePath))));
  });
}

function get(hash) {
  return new Promise(resolve => {
    resolve(bs58.decode(hash).toString());
  });
}

async function main() {
  switch (process.argv[2]) {
    case "add":
      console.log(await add(process.argv[3]));
      break;
    case "get":
      console.log(await get(process.argv[3]));
      break;
  }
}

main();

module.exports = { add, get };
