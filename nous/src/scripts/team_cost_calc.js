// fetch('file:///C:/Users/carlo/OneDrive/Legacy/Escritorio/DamageCalculator/teamcharacters.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(typeof data);
//   }); not yet implemented
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('teamcharacters.json', 'utf8'));
let cost =  0;

Object.values(data).forEach(data => {
    if (data.IsStandard !== true && data.Rarity === 5) {
        cost+= data.EidolonLevel
        cost++
    }
    if (data.HasPromotionalLightCone === true) {
        cost += data.LCSuperimpositionLevel 
    } 
    //explaination: every 5 star non standard item addds +1 to cost, even if a 4star char uses a 5 star light cone, its added to cost calc, so:
});
console.log(cost)


