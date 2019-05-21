const uuid = require("uuidv4");
const uniqueId = uuid();

function generateUniqueId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

let id = generateUniqueId(uniqueId);

module.exports = id;
