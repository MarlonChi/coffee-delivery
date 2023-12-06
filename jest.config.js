module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/app/**",
    "!src/lib/registry.tsx",
    "!src/types/**",
    "!src/**/index.stories.tsx",
    "!src/**/types.ts",
    "!src/styles/**",
    "!src/**/styles.ts",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePath: ["<rootDir>/src/", "<rootDir>/.jest"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    "^styled-components":
      "styled-components/dist/styled-components.browser.cjs.js",
  },
};
