"use strict";

const weapons = [
  new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()
];

function getNames() {
  let namesWeapons = weapons.map(weapons => weapons.name);
  return namesWeapons;
};

function getCountReliableWeapons(durabilityValue) {
  let reliableWeapons = weapons.filter(weapons => weapons.durability > durabilityValue);
  
  return reliableWeapons.length;
};

function hasReliableWeapons(durabilityValue) {
  return weapons.some(weapons => weapons.durability > durabilityValue);
};

function getReliableWeaponsNames(durabilityValue) {
  let reliableWeaponsNames = weapons
  .filter(weapons => weapons.durability > durabilityValue)
  .map(weapons => weapons.name);

  return reliableWeaponsNames;
};


/*
второй вариант написания кода

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

function getTotalDamage() {
  let attacksArray = weapons.map(weapons => weapons.attack);

  let totalDamage = attacksArray.reduce((sum, elem) => sum + elem);
  
  return totalDamage;
};


