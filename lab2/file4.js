import {mkdir} from 'fs/promises';

// await mkdir("upload");
// console.log("folder created");


// await mkdir("uplaod/resume");
// console.log("resume created under uplaod folder")


// await mkdir("images/profile/logos", {recursive: true});
// console.log("all folders created");


await rm("upload", {recursive: true});

