module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	//if enhancement is 20 do nothing
	const successItem = item;
	if (successItem.enhancement === 20) {
		return { ...successItem };
	} else {
		//if success add +1 to enhancement
		successItem.enhancement++;
		return { ...successItem };
	}
}

function fail(item) {
	//if fail and enhancement < 15 then durability is -5
	//if enhancment = 15, then durability -10
	//if enhancment >=16 then enhancement -1
	const failItem = item;
	if (failItem.enhancement < 15) {
		failItem.durability - 5;
		return { ...failItem };
	} else if (failItem.enhancement >= 16) {
		if (failItem.enhancement === 15) {
			failItem.durability - 10;
			return { ...failItem };
		} else {
			failItem.enhancement - 1;
			return { ...failItem };
		}
	}
}

function repair(item) {
	//return item with durability set to 100
	//if durability = 100 do nothing (send alert?)
	const repairItem = item;
	repairItem.durability = 100;
	return { ...repairItem };
}

//STRETCH
function get(item) {
	return { ...item };
}
