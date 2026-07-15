//fym diminishing returns bro
//so its just a formula with logarithmic scaling
//that shit easy af
const baseDMG = (levelMult, baseSkillMult, increaseMult) => {
    const result = levelMult * (baseSkillMult + increaseMult);
    return result;
}
    //using defense.js to get the defense multiplier, then using that to calculate the final damage
const crit = 1 + critD; //again, fetching some stat shit
let elation; //here comes some stat fetching shit
let elationMult = 1 + elation;
let merrymake = 1 + merrymake;
let punchlineCalculation = (producedBy, punchlineStacks, certifiedStacks = 1) => {
    // Implementation for punchline calculation
    if (producedBy === 'certified') {
        let result = (certifiedStacks * 5) / ( certifiedStacks + 240 );
        return result;
    } else {
        let result = ( punchlineStacks * 5 ) / ( punchlineStacks + 240 );
        return result;

    } //you can check the scaling of this formula, it always approximates to 6
};
let merrymakeMult = 1 + merrymake; //this has to ask if the char is e6 and then execute this code, adding the parameter to the main function
const calculateElationD = ({baseD, origMult, critD, elationMult, punchline, merrymakeMult = 1, defTargetMult, resTargetMult, vulnerability, dmgMitig, breakState }) => { 
    const multipliers = Object.values({baseD, origMult, critD, elationMult, punchline, merrymakeMult, defTargetMult, resTargetMult, vulnerability, dmgMitig, breakState});
    return multipliers.reduce((acc, current) => acc * current, 1);
}; //main elation formula

