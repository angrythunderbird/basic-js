const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || !Array.isArray(members)) {return false;};

  let protoTeamArr = [];
  members.map((name, index) => {
    if (typeof name === 'string') {
      name = name.trim();
      protoTeamArr.push(name[0].toUpperCase());
    }
  });
  
  return protoTeamArr.sort().join('');
};
