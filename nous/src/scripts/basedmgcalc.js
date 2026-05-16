function normalize(integer) {
    return Math.max(1, integer)
}

function CRITdmg(critscored = true, critdmgpercent) {
    let multiplier = 1
    if (critscored === true) {
        multiplier = 1 + critdmgpercent
    }
    return normalize(multiplier)
}

function getAbilityMult(abilitymult, increase) {
    let abilityMultiplier = normalize(abilitymult) + increase
    return normalize(abilityMultiplier)
}

function baseDMG(basestat, skillmult, extraDMG) {
    let baseDMG = normalize(basestat) * normalize(skillmult) + extraDMG
    return normalize(baseDMG)
}

const calculateBonusDMG = (type, boosts, elem) => {
    const specificBoost = boosts[type] || 0;
    const universalBoost = boosts.all || 0;
    return normalize(1 + specificBoost + universalBoost + elem);
}

function weakenMulti(weaken) {
    let wkmulti = 1 + weaken
    return normalize(wkmulti)
}

function resMult(res, pen) {
   const finalRes = res - pen
   return 1 - finalRes
}

const vulnerabilityMultiplier = (type, vuln) => {
    const specificVuln = vuln[type] || 0;
    const universalVuln = vuln.all || 0;
    return 1 + specificVuln + universalVuln;
};

const DMGMitigation = (mitigation /*array*/) => { 
    return mitigation.reduce((total, current) => total * (1 - current), 1);
};

const brokenMultiplier = (broken) => { 
    if (broken) {
        return 1;
    }
    return 0.9;
};

const baseDamageFormula = ({
  baseDmg = 1,
  originalMultiplier = 1,
  critMultiplier = 1,
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
    normalize(critMultiplier) *
    normalize(dmgBoost) *
    normalize(weakenMultiplier) *
    normalize(defMult) *
    resMult *
    vulnerabilityMultiplier *
    mitigation *
    brokenMultiplier
}

//i will do a quick test
function calculateKhaslanaMeteorStrikeDamage() {
    //Dispels all debuffs from this unit, then deals Physical DMG equal to a max of 1170% of Khaslana's ATK.
//For every "Scourge" consumed, deals 4 instance(s) of DMG, with each instance dealing Physical DMG equal to 45% of Khaslana's ATK to one random enemy. When consuming 4 "Scourge", additionally deals Physical DMG equal to 450% of Khaslana's ATK, and this DMG is evenly distributed to all enemies.
    let stats = {
        atk: 7750, //example value
        critDmgPercent:6.20, 
        elementDMG : 6.23,
        abilitymult : 11.7,
        respen : 0.56,
        vuln : 0.74,
    }
    let mainStrikeDMG = baseDamageFormula({
        baseDmg: baseDMG(stats.atk, stats.abilitymult, 0), //example extra DMG value
        originalMultiplier: 1,
        critMultiplier: CRITdmg(true, stats.critDmgPercent),
        dmgBoost: stats.elementDMG,
        weakenMultiplier: 1, //example weaken value
        defMult: 0.79,
        resMult: resMult(0, stats.respen), //example resistance value
        vulnerabilityMultiplier: 1.7,
        mitigation: 1,
        brokenMultiplier: 0.9 //example broken multiplier value
    });
    let scourgeDMG = baseDamageFormula({
        baseDmg: baseDMG(stats.atk, 0.45, 0), //example extra DMG value
        originalMultiplier: 1,
        critMultiplier: CRITdmg(true, stats.critDmgPercent),
        dmgBoost: stats.elementDMG,
        weakenMultiplier: 1, //example weaken value
        defMult: 0.79,
        resMult: resMult(0, stats.respen), //example resistance value
        vulnerabilityMultiplier: 1.7,
        mitigation: 1,
        brokenMultiplier: 0.9 //example broken multiplier value
    }) * 16; //16, 4 for each scourge or whatever instances of scourge DMG
    let additionalDMG = baseDamageFormula({
        baseDmg: baseDMG(stats.atk, 4.50, 0), //example extra DMG value
        originalMultiplier: 1,
        critMultiplier: CRITdmg(true, stats.critDmgPercent),
        dmgBoost: stats.elementDMG,
        weakenMultiplier: 1, //example weaken value
        defMult: 0.79,
        resMult: resMult(0, stats.respen), //example resistance value
        vulnerabilityMultiplier: 1.7,
        mitigation: 1,
        brokenMultiplier: 0.9 //example broken multiplier value
    });
    let totalDamage = mainStrikeDMG + scourgeDMG + additionalDMG;
    return totalDamage
}       
 console.log(calculateKhaslanaMeteorStrikeDamage());// test finished!
//fuckass terms nigga

//30
//4.0 fucked my plans because what the fuck is "elation dmg"