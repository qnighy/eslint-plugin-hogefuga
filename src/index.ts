import { Rule } from "eslint";
import * as noHoge from "./rules/no-hoge";
export const rules: Record<string, Rule.RuleModule> = {
  "no-hoge": noHoge,
};
