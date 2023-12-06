module.exports = (plop) => {
  plop.setGenerator("components", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Components.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile: "templates/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.spec.tsx",
        templateFile: "templates/index.spec.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/types.ts",
        templateFile: "templates/types.ts.hbs",
      },
    ],
  });
};
