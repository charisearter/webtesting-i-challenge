module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  //if success add +1 to enhancement
  //if enhancement is 20 do nothing
  return { ...item };
}

function fail(item) {
  //if fail and enhancement < 15 then durability is -5
  //if enhancment = 15, then durability -10
  //if enhancment >=16 then enhancement -1
  return { ...item };
}

function repair(item) {
  //return item with durability set to 100
  //if durability = 100 do nothing (send alert?)
  return { ...item };
}

//STRETCH
function get(item) {
  return { ...item };
}
