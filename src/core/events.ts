import { createCharacterForm } from "../feature/character/CharacterForm/createCharacter";


//===================================================================================================
// PARENTS
//===================================================================================================
const main = document.querySelector("main") as HTMLDivElement;
//===================================================================================================

//===================================================================================================
// DOM LOADED
//===================================================================================================
export const domLoad = document.addEventListener("DOMContentLoaded", () => {
  createCharacterForm(main);
});
//===================================================================================================

//===================================================================================================
// HANDLE FOR CHARACTER CREATION
//===================================================================================================

//===================================================================================================
