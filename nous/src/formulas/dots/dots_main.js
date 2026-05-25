//damage over time formula
const baseDamageFormula = ({
  baseDmg = 1,
  originalMultiplier = 1,
  dmgBoost = 1,
  weakenMultiplier = 1,
  defMult = 1,
  resMult = 1,
  vulnerabilityMultiplier = 1,
  mitigation = 1,
  brokenMultiplier = 1
}) => {
  return normalize(baseDmg) *
    normalize(originalMultiplier) *
    normalize(dmgBoost) *
    normalize(weakenMultiplier) *
    normalize(defMult) *
    resMult *
    vulnerabilityMultiplier *
    mitigation *
    brokenMultiplier
}