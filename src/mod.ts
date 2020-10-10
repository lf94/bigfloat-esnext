import * as arithmetic from "./arithmetic";
import { set_precision } from "./constants";
import * as constructors from "./constructors";
import evaluate from "./interpreter";
import * as predicates from "./predicates";
import * as relational from "./relational";

export { Decimal } from "./decimal";
export { BigFloat } from "./types";

const bigfloat = Object.freeze({
  BigFloat: constructors.make,
  evaluate,
  set_precision,
  ...arithmetic,
  ...predicates,
  ...constructors,
  ...relational
});

if (typeof module === "object") {
  module.exports = bigfloat;
}

export default bigfloat;
