import { Rule } from "eslint";
export const meta: Rule.RuleMetaData = {
  type: "suggestion",

  docs: {
      description: "disallow hoge, fuga, and piyo",
      category: "Stylistic Issues",
  },
  fixable: "code",
  schema: [] // no options
};

const HOGELIKE_NAMES = ["hoge", "fuga", "piyo"];

export function create(context: Rule.RuleContext): Rule.RuleListener {
  return {
    Identifier(node) {
      if (HOGELIKE_NAMES.indexOf(node.name) !== -1) {
        context.report({
          node,
          message: `the metavariable ${node.name} is not globally understood`,
        });
      }
    }
  };
}
