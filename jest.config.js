module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/@types/**",
    "!src/**/index.stories.tsx",
    "!src/**/types.ts",
    "!src/styles/**",
    "!src/**/styles.ts",
    "!src/store/**",
    "!src/main.tsx",
    "!src/utils/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
};
