"use strict";

const weapons = [
  new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()
];

function getNames() {
  return weapons.map(weapons => weapons.name);
};

function getCountReliableWeapons(durabilityValue) {
  return weapons.filter(weapons => weapons.durability > durabilityValue).length;
};

function hasReliableWeapons(durabilityValue) {
  return weapons.some(weapons => weapons.durability > durabilityValue);
};

function getReliableWeaponsNames(durabilityValue) {
  return weapons
  .filter(weapons => weapons.durability > durabilityValue)
  .map(weapons => weapons.name);
};
/*
function getTotalDamage() {
  let attacksArray = weapons.map(weapons => weapons.attack);

  let totalDamage = attacksArray.reduce((sum, elem) => sum + elem);

  return totalDamage;
};
*/
function getTotalDamage() {
  return weapons.reduce((sum, elem) => sum + elem.attack, 0);
};




/*
второй вариант где используется два метода filter и map
функция getReliableWeaponsNames() 

function getReliableWeaponsNames(durabilityValue) {

  let reliableWeaponsNames = weapons.filter(getReliableWeapons).map(getNames);

 return reliableWeaponsNames;

 //функции

  function getReliableWeapons (weapons) {
    return weapons.durability > durabilityValue;
  };

  function getNames (weapons) {
    return weapons.name
  };
};
*/


