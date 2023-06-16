const fs = require("fs");

const getUserData = () => {
  const jsonFilePath = "./db/user.json";
  const jsonContent = fs.readFileSync(jsonFilePath, "utf-8");
  const jsonData = JSON.parse(jsonContent);

  return jsonData.user;
};

module.exports = getUserData;
