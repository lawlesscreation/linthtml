import chalk from "chalk";
import * as messages from "./messages";

export default function print_errors(error: { code: string, meta: Object, message: string }) {
  if (error.code) {
    const [type, code] = error.code.split("-");
    // @ts-ignore
    const error_message = messages[`${type}_ERRORS`][code];
    return console.log(error_message(chalk, error.meta));
  }
  return console.log(chalk`{red ${error.message}}`);
}
