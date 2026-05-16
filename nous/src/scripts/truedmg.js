//True DMG is a type of damage dealt through certain abilities. 
//True DMG is not considered an attack. It is also not modified by other multipliers during damage calculation.
//so:
function calculateTrueDMG(baseDamage,instances, multiplier) {
    return baseDamage * instances * multiplier;
}
//for example: Gains 3 "Recollection" point(s) and deploys a Zone that lasts for 2 turns. The Zone's duration decreases by 1 at the start of Cyrene's every turn. While the Zone lasts, for each instance of DMG dealt by all ally targets, deals 1 additional instance of True DMG equal to 12%—26.4% of the original DMG. When Cyrene is downed, the Zone will also be dispelled.

