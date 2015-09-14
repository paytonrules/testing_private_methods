import {Phony} from 'test_object';

describe("Phony", () => {
  it ("should do stuff", () => {
    var a = new Phony();
    expect(true).toBeFalsy();
  });
});
