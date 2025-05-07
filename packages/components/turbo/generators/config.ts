import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("react-component", {
    description: "Adds a new shadcn react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}/index.ts",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "src/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
    ],
  });
}
