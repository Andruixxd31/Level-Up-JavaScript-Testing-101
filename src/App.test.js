import { hello, add, removeSNames } from "./App";

//* -- Hello --
describe("hello", () => {
    it("should return hello", () => {
        expect(hello()).toBe("Hello");
    });
});

//* -- add --
describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(2, 2)).toBe(4);
        expect(add(-2, 2)).toBe(0);
    });
    it("should not add strings", () => {
        expect(add(2, "4")).toBe(null);
    });
    it("should not add objects", () => {
        expect(add(2, {})).toBe(null);
    });
    it("should not add arrays", () => {
        expect(add(2, [])).toBe(null);
    });
});

//* -- removeSNames --
describe("removeSNames", () => {
    it("should remove all s names", () => {
        const names = ["Scott", "Courtney", "Wes", "Shawn"];
        expect(removeSNames(names)).not.toContain("Scott");
        expect(removeSNames(names)).not.toContain("Shawn");
    });
    it("should not remove all other names", () => {
        const names = ["Scott", "Courtney", "Wes", "Shawn"];
        expect(removeSNames(names)).toContain("Courtney");
        expect(removeSNames(names)).toContain("Wes");
    });
    it("should account for case ", () => {
        const names = ["Scott", "Courtney", "Wes", "scott"];
        expect(removeSNames(names)).not.toContain("scott");
        expect(removeSNames(names)).not.toContain("Scott");
    });
});
