import { expect, it, describe, beforeEach, afterEach } from "bun:test";
import { $ } from "bun";
import { cloneRepo } from "../src/helpers/git";

describe("Git helper works as expected", () => {
  afterEach(async () => {
    await $`rm -rf toka`;
  });
  it("Can clone repos", async () => {
    let status = await cloneRepo("https://github.com/TokaPass/.github.git");

    expect(status).toBeTrue();
  });
  it("Fail at wrong repository urls", async () => {
    let status = await cloneRepo("https://github.com/TokaPassa/.github.git");

    expect(status).toBeFalse();
  });
});
