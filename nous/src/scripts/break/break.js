import levelMultiplierTable from "./lvlmult"

const thoughnessRed = (baseTRed, addTRed, tRedIncrease, breakEfficency, tVuln, abilityMult /*data: int,int,int,int,int,int */) => {
  let bEffCalibration = Math.min(breakEfficency, 3.00) //break efficiency cant be higher than 300
  let base = baseTRed + addTRed
  let increase = 1 + tRedIncrease
  let status = 1 + bEffCalibration + tVuln
  return base * increase * status * abilityMult
}

const AbilityMultiplier = (attribute) => {
  return attribute ? attribute : 1;
}
//type speciffic effects 
const MaxToughnessMult = (MaxToughness) => { 0.5 + (MaxToughness / 40)}
function calculateBreakDMG(lvlMult, elementMult, maxToughnessMult) {
  return elementMult * lvlMult * maxToughnessMult //original
}
// const generalHelper = (...args) => {
//   let as = 1
//   for (let i = 0; i < args.length; i++) {
//     as *= args[i] 
//   }
// }
//debuffs after break
//bleed (phys), calculates every stack based off a percentage of enemy hp
const calculateBleed = (isElite, maxHP, lvl, maxToughnessMult /*data: bool, int,int,int*/ ) => {
 percent = isElite ? 0.16 : 0.07
return Math.min(percent, calculateBreakDMG(lvl, 2, maxToughnessMult))
//cap
}
//const quantumCheck isQuantum ? maxToughnessMult : 1
const calculateDotDMG = (elementMult, lvlMult, stackCount = 1, maxToughnessMult = 1) => {
  elementMult * lvlMult * stackCount * maxToughnessMult 
} //only quantum uses max Toughness multiplier, and only qua and thunder use stack count, so base value is 1
const breakDMG = (baseDMG, abilityMult, breakEffect, DMGIncreaseMult, defMult, RESMult, vulnerabilityMult, DMGMitigation, brokenMult) => {
  return baseDMG * abilityMult *  (1 + breakEffect) * DMGIncreaseMult * defMult * RESMult * vulnerabilityMult * DMGMitigation * brokenMult
}
const breakDMGAbilityMult = (base, breakDMGMultIncrease) => {
  return base && breakDMGMultIncrease ? base + breakDMGMultIncrease : 1.00
}
const breakDMGIncreaseMult = (breakDMGIncrease, isBreakDMG) => {
  return isBreakDMG ? 1 + breakDMGIncrease : 1
}
//here we go...
const superBreakDMG = (thoughnessRed, level, abilityMult, breakEffect, breakDMGIncrease, superBreakDMGIncrease, defMult, RESMult, vulnerabilityMult, DMGMitigation, brokenMult) => {
  const tReduction = thoughnessRed / 10
  const levelMultiplier = levelMultiplierTable[level];
  return tReduction * levelMultiplier * abilityMult * (1 + breakEffect) * (1 + breakDMGIncrease) * (1 + superBreakDMGIncrease) * defMult * RESMult * vulnerabilityMult * DMGMitigation * brokenMult
}
