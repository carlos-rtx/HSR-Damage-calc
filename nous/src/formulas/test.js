import fs from 'fs';
const data = JSON.parse(fs.readFileSync('teamcharacters.json', 'utf8'));
Object.values(data).forEach(data => {
    console.log(data)
})