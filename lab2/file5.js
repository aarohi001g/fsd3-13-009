import {stat} from "fs/promises";

const stats = await stat("readme.md");

console.log("is file", stats.isfile());
console.log("is directory", stats.isDirectory());
console.log("size (bytes):", stats.issize());
console.log("last modified:", stats.isfile());
