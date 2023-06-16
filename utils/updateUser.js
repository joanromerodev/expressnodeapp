const fs = require("fs");

const updateUserDB = (obj) => {
  const jsonFilePath = "./db/user.json";
  const jsonContent = fs.readFileSync(jsonFilePath, "utf-8");
  const jsonData = JSON.parse(jsonContent);

  for (const [key, value] of Object.entries(obj)) {
    if (value !== "") {
      jsonData.user[key] = value;
    }
  }
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
};

module.exports = updateUserDB;
