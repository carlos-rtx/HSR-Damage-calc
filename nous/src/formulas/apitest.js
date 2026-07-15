import { StarRail } from "starrail.js";
import { writeFile } from 'fs/promises';
import fs from "fs";
const client = new StarRail();

const characters = await client.fetchUser(620421897).then(user => console.log(user));
//evitando hacer el proceso de convertir los ids en datos
