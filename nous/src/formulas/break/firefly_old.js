//so theres some curious things about firefly multipliers 



export default function fireflySpecialMults(breakEffect, num /*num of adjacent targets, can be up to 2*/) {
    let checkNum = Math.min(num, 2)
    let breakEffectNormalize = Math.min(breakEffect, 3.60)
    const presicionFix = (int) => int.toFixed(10)
let internalCalculations = {
    skillToMainTarget: () => 0.2 + breakEffectNormalize + 2.00,
    skillToAdjacentTargets: () => 0.1 + breakEffectNormalize + 1.00
}
const adjValue = internalCalculations.skillToAdjacentTargets()
return {
    mainTarget: Number(presicionFix(internalCalculations.skillToMainTarget())),
    adjacentTargetInstance: Number(presicionFix(adjValue)),
    totalToAdjacentTargets: Number(presicionFix(adjValue * checkNum))
}
}
console.log(fireflySpecialMults(3.60, 2)) //test
//usage: import 
//yea thats it import {  } from "module";