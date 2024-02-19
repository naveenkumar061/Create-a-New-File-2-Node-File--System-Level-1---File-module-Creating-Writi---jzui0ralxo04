const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  //Write your code here
  try {
    await fs.access("myfile.txt");
    console.log("myfile.txt already exists. Skipping write operation");
  } catch (error) {
    await fs.writeFile(fileName, fileContent);
    console.log("File myfile.txt created and data written successfully!");
  }
  //Don't change function name
};
module.exports = writeFile;
