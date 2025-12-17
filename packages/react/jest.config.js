export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test)\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
};
