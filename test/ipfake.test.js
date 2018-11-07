const assert = require("assert");
const path = require("path");
const ipfake = require("../ipfake");

describe("ipfake", () => {
  it("turns file paths into hashes and retrieves absolute file paths from hashes", async () => {
    const relPath = "../package.json";
    const hash = await ipfake.add(relPath);
    const absolutePath = await ipfake.get(hash);
    assert(path.isAbsolute(absolutePath));
    assert.equal(path.resolve(relPath), absolutePath);
  });
});
