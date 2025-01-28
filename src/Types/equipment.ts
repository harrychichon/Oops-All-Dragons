import { Condition } from "./conditions";

export enum Equipment {
  AdventuringGear = "Adventuring Gear",
  Ammunition = "Ammunition",
  ArcaneFoci = "Arcane Foci",
  Armor = "Armor",
  ArtisansTools = "Artisan's Tools",
  DruidicFoci = "Druidic Foci",
  EquipmentPacks = "Equipment Packs",
  GamingSets = "Gaming Sets",
  HeavyArmor = "Heavy Armor",
  HolySymbols = "Holy Symbols",
  Kits = "Kits",
  LandVehicles = "Land Vehicles",
  LightArmor = "Light Armor",
  MartialMeleeWeapons = "Martial Melee Weapons",
  MartialRangedWeapons = "Martial Ranged Weapons",
  MartialWeapons = "Martial Weapons",
  MediumArmor = "Medium Armor",
  MeleeWeapons = "Melee Weapons",
  MountsAndOtherAnimals = "Mounts and Other Animals",
  MountsAndVehicles = "Mounts and Vehicles",
  MusicalInstruments = "Musical Instruments",
  OtherTools = "Other Tools",
  Potion = "Potion",
  RangedWeapons = "Ranged Weapons",
  Ring = "Ring",
  Rod = "Rod",
  Scroll = "Scroll",
  Shields = "Shields",
  SimpleMeleeWeapons = "Simple Melee Weapons",
  SimpleRangedWeapons = "Simple Ranged Weapons",
  SimpleWeapons = "Simple Weapons",
  Staff = "Staff",
  StandardGear = "Standard Gear",
  TackHarnessAndDrawnVehicles = "Tack, Harness, and Drawn Vehicles",
  Tools = "Tools",
  Wand = "Wand",
  WaterborneVehicles = "Waterborne Vehicles",
  Weapon = "Weapon",
  WondrousItems = "Wondrous Items",
}

export type ArmorClass = {
  type: string;
  value: number;
  armor?: string[];
  condition?: Condition[];
  desc: string;
};
