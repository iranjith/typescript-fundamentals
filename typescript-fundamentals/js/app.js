"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utility = __importStar(require("./functions"));
//let allMovies: Movie[] = Utility.GetAllMovies();
// console.log("Getting movies by director...");
// Utility.logSearchResults("George Lucas")
//   .catch((error)=>console.log(error));  
// console.log("Search submitted...");
let inventory = Utility.GetAllMovies();
let purgedMovies = Utility.Purge(inventory);
purgedMovies.forEach((movie) => { console.log(movie.title); });
let purgedNums = Utility.Purge([1, 2, 3, 4, 5]);
console.log(purgedNums);
