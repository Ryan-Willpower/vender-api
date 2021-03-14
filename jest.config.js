const tsPreset = require("ts-jest/jest-preset");
const shelfPreset = require("@shelf/jest-mongodb/jest-preset");

module.exports = {
  ...tsPreset,
  ...shelfPreset,
  testEnvironment: "node",
};
