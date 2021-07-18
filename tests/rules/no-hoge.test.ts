import { RuleTester } from "eslint";
import * as rule from "../../src/rules/no-hoge";

const ruleTester = new RuleTester();

ruleTester.run("no-hoge", rule, {
  valid: [
    {
      code: "const foo = 42;",
      parserOptions: { ecmaVersion: 6 },
    },
  ],
  invalid: [
    {
      code: "const hoge = 42;",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "the metavariable hoge is not globally understood",
        },
      ],
    },
  ],
});
