const enhancer = require("./enhancer.js");
// test away!

//items

const item1 = {
	name: "Staff",
	durability: 80,
	enhancement: 5,
};

const item2 = {
	name: "Bow",
	durability: 60,
	enhancement: 19,
};

const item3 = {
	name: "Sword",
	durability: 30,
	enhancement: 16,
};

const item4 = {
	name: "Knuckles",
	durability: 100,
	enhancement: 15,
};

const item5 = {
	name: "Knife",
	durability: 5,
	enhancement: 0,
};

//tests

//passes
describe("repair", function () {
	it("repair returns item with 100 durability", function () {
		const expectedDurability = 100;
		const actualOutput = enhancer.repair(item1);
		expect(actualOutput.durability).toBe(expectedDurability);
	});
});

//passes
describe("success", function () {
	it("succeed add +1 to enhancement", function () {
		const addEnhancement = item3.enhancement + 1;
		const actualOutput = enhancer.succeed(item3);
		expect(actualOutput.enhancement).toBe(addEnhancement);
	});
});

//All pass
describe("fail", () => {
	//passes
	it(" enhancement < 15 then durability - 5", () => {
		const expectedDurability = item1.durability - 5;
		const actualOutput = enhancer.fail(item1);
		expect(actualOutput.durability).toBe(expectedDurability);
	});
	//passes
	it("enhancement === 15 then durability -10", () => {
		const expectedDurability = item4.durability - 10;
		const actualOutput = enhancer.fail(item4);
		expect(actualOutput.durability).toBe(expectedDurability);
	});
	//passes
	it("enhancement > 15 then enhancement -1", () => {
		const expectedEnhancement = item3.enhancement - 1;
		const actualOutput = enhancer.fail(item3);
		expect(actualOutput.enhancement).toBe(expectedEnhancement);
	});
});

//passes
describe("get", () => {
	it("no name change for enhancment = 0", () => {
		const expectedName = item5.name;
		const actualOutput = enhancer.get(item5);
		expect(actualOutput.name).toBe(expectedName);
	});

	it('add + to enhancement and name for enhancment > 0', () => {
		const expectedName = "+15 Knuckles"
		const actualOutput = enhancer.get(item4)
		expect(actualOutput.name).toBe(expectedName)
	})
});
