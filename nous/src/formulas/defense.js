let getBaseDEF = (level) => {
    if (level > 101) {
        level = 100 //def is capped at lvl 100
    }
    return 200 + (level * 10);
};
let getBaseTrotterDEF = (level) => {
    if (level > 101) {
        level = 100 //def is capped at lvl 100 
    }
    return 300 + (level * 15);
};
const getDefenseMultiplier = (def, characterlevel, enemlevel, defbonus, defreduct, defignore) => {
    let cAtk = characterlevel + 20
    let eLvl = enemlevel + 20
    let defState = Math.max(0, 1 + defbonus - defreduct - defignore) 
    let defMultiplier = cAtk / (eLvl * defState + cAtk);
    return defMultiplier     
}

