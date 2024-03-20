import { expect } from "chai";
import { fizzBuzz } from "../11-fizzbuzz";
import { lengthTest } from "../data/11-fizzBuzz.data";

describe("#11: fizzBuzz", () => {
  it("`fizzBuzz` is a function", () => {
    expect(fizzBuzz).to.be.a(
      "function",
      "No `fizzBuzz` function found; please check if defined and exported correctly."
    );
  });

  it("returns an array", () => {
    const result = fizzBuzz(100);
    expect(result).to.be.an("array");
  });

  it("the array is the correct length", () => {
    const result = fizzBuzz(100);
    lengthTest.map((length) => {
      expect(fizzBuzz(length)).to.have.lengthOf(length);
    });
  });

  it("each number not divisible by either 3 or 4 is itself", () => {
    const result = fizzBuzz(100);
    const eachStringNumAppears = result
      .filter((_, idx) => (idx + 1) % 3 !== 0 && (idx + 1) % 4 !== 0)
      .every((entry) => typeof entry === "number");
    expect(eachStringNumAppears).to.be.true;
  });

  it("each number divisible only by 3 is `Fizz`", () => {
    const result = fizzBuzz(100);
    const eachFizzAppears = result
      .filter((_, idx) => (idx + 1) % 3 === 0 && (idx + 1) % 12 !== 0)
      .every((entry) => entry === "Fizz");
    expect(eachFizzAppears).to.be.true;
  });

  it("each number divisible only by 4 is `Buzz`", () => {
    const result = fizzBuzz(100);
    const eachBuzzAppears = result
      .filter((_, idx) => (idx + 1) % 4 === 0 && (idx + 1) % 12 !== 0)
      .every((entry) => entry === "Buzz");
    expect(eachBuzzAppears).to.be.true;
  });

  it("each number divisible by both 3 and 4 is `FizzBuzz`", () => {
    const result = fizzBuzz(100);
    const eachFizzBuzzAppears = result
      .filter((_, idx) => (idx + 1) % 12 === 0)
      .every((entry) => entry === "FizzBuzz");
    expect(eachFizzBuzzAppears).to.be.true;
  });
});
