import { expect } from "chai";
import {
  startCapWords,
  noCapWords,
  capsNotAtStart,
  mixedWords,
} from "../data/startingCapsOnly.data";
import { startingCapsOnly } from "../02-startingCapsOnly";

describe("#2: startingCapsOnly", () => {
  it("returns an array", () => {
    expect(startingCapsOnly(startCapWords)).to.be.an("array");
    expect(startingCapsOnly(noCapWords)).to.be.an("array");
    expect(startingCapsOnly(capsNotAtStart)).to.be.an("array");
    expect(startingCapsOnly(mixedWords)).to.be.an("array");
  });

  it("removes no words if all words start with a capital letter", () => {
    expect(startingCapsOnly(startCapWords)).to.deep.equal(startCapWords);
  });

  it("removes all words that don't start with a capital letter", () => {
    expect(startingCapsOnly(noCapWords)).to.deep.equal([]);
    expect(startingCapsOnly(capsNotAtStart)).to.deep.equal([]);
  });

  it("removes words that don't start with a capital letter from a mixed array", () => {
    expect(startingCapsOnly(mixedWords)).to.deep.equal(startCapWords);
  });
});
