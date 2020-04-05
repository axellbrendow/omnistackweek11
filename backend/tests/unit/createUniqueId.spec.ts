import createUniqueId from "../../src/utils/createUniqueId";

describe("Generate Unique Id", () => {
  it("should generate an unique id", () => {
    const id = createUniqueId();
    expect(id).toBeDefined();
    expect(id).toHaveLength(36);
  });
});
