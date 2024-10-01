import { expect } from "chai";
import sinon from "sinon";
import { deepClone } from "../10-deepClone";
import {
  objNoDate,
  clonedObjWithoutDate,
  objWithDate,
  clonedObjWithDate,
} from "../data/10-deepClone.data";

// Mocking to detect calls to Object.assign and structuredClone
const objectAssignSpy = sinon.spy(Object, "assign");
const structuredCloneSpy = sinon.spy(globalThis, "structuredClone");

describe("#10: deepClone", () => {
  it("should return an object", () => {
    const result = deepClone(objNoDate);
    expect(result).to.be.an("object");
  });

  it("should correctly clone objects without Date objects", () => {
    const result = deepClone(objNoDate);
    expect(result).to.deep.equal(clonedObjWithoutDate);
  });

  it("should not mutate the original object", () => {
    const result = deepClone(objNoDate);
    expect(result).to.not.equal(objNoDate);
    expect(result).to.deep.equal(clonedObjWithoutDate);
  });

  it("should not call Object.assign()", () => {
    deepClone(objNoDate);
    expect(objectAssignSpy.called).to.be.false;
  });

  it("should not call structuredClone()", () => {
    deepClone(objNoDate);
    expect(structuredCloneSpy.called).to.be.false;
  });

  xdescribe("BONUS", () => {
    it("should correctly clone objects with Date objects", () => {
      const result = deepClone(objWithDate);
      expect(result).to.deep.equal(clonedObjWithDate);
    });

    it("should correctly clone Date objects and preserve their functionality", () => {
      const result = deepClone(objWithDate);
      expect(result.date).to.be.instanceOf(Date);
      expect(result.date.getTime()).to.equal(objWithDate.date.getTime());
    });
  });
});

// Restore the original implementations after the test
objectAssignSpy.restore();
structuredCloneSpy.restore();
