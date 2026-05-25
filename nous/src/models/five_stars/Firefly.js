import base from "./base.js";

export default class Firefly extends base {
  constructor(level, stats) {
    super("Firefly", level, "Super Break", stats);
    const adjacent = 2;
    const mainTarget = 1;
  }
  get multipliers() {
    return {
      basicAttack: {
        mainTarget: 1.0
      },
      enhancedBasicAttack: 1.50
    };
  }
}
