# ipfake

Fake IPFS for local testing environment.

## Install

```bash
$ npm install ipfake
```

## Usage

### From javascript

```js
const ipfake = require("ipfake");

async function testIpfake() {
  const hash = await ipfake.add("/rel/or/abs/path/to/file");
  // returns a base58 hash of the absolute file path

  const absolutePath = await ipfake.get(hash);
  // returns an absolute path to the file, given its hash
}
```

### From command line

```bash
$ ipfake add /rel/or/abs/path/to/file
$ ipfake get hashOfAbsoluteFilePath
```
