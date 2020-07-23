const enhancer = require("./enhancer.js");
// test away!

//items

const item1 = {
	name: "staff",
	durability: 80,
	enhancement: 5,
};

const item2 = {
	name: "bow",
	durability: 60,
	enhancement: 20,
};

const item3 = {
	name: "sword",
	durability: 30,
	enhancement: 16,
};

const item4 = {
	name: "knuckles",
	durability: 100,
	enhancement: 15,
};

//tests

describe("repair weapon works", function () {
	item1.todo("repair works"),
		function () {
			//code here
		};
});

describe("succeed works", function () {
	item1.todo("less than lvl 20 enhancement"),
		function () {
			//code here
		};
});

describe("succeed works", function () {
	item1.todo("lvl 20 enhancement"),
		function () {
			//code here
		};
});

describe("fail works", function () {
	item1.todo("fail with enhancement< 15"),
		function () {
			//code here
		};
});

describe("fail works", function () {
	item1.todo("fail with enhancement > 16"),
		function () {
			//code here
		};
});

describe("fail works", function () {
	item1.todo("fail with enhancement === 15"),
		function () {
			//code here
		};
});
