// To parse this data:
//
//   import { Convert } from "./file";
//
//   const item = Convert.toItem(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Item {
  uniqueName:             string;
  name:                   string;
  description?:           string;
  type:                   string;
  imageName?:             string;
  category:               Category;
  tradable:               boolean;
  excludeFromCodex?:      boolean;
  rarity?:                Rarity;
  levelStats?:            LevelStat[];
  showInInventory?:       boolean;
  systemIndex?:           number;
  systemName?:            string;
  nodeType?:              number;
  masteryReq?:            number;
  missionIndex?:          number;
  factionIndex?:          number;
  minEnemyLevel?:         number;
  maxEnemyLevel?:         number;
  polarity?:              Polarity;
  baseDrain?:             number;
  fusionLimit?:           number;
  compatName?:            string;
  isAugment?:             boolean;
  wikiaThumbnail?:        string;
  wikiaUrl?:              string;
  transmutable?:          boolean;
  patchlogs?:             Patchlog[];
  drops?:                 Drop[];
  damagePerShot?:         number[];
  totalDamage?:           number;
  criticalChance?:        number;
  criticalMultiplier?:    number;
  procChance?:            number;
  fireRate?:              number;
  productCategory?:       ProductCategory;
  slot?:                  number;
  accuracy?:              number;
  omegaAttenuation?:      number;
  noise?:                 Noise;
  trigger?:               Trigger;
  magazineSize?:          number;
  reloadTime?:            number;
  multishot?:             number;
  buildPrice?:            number;
  buildTime?:             number;
  skipBuildTimePrice?:    number;
  buildQuantity?:         number;
  consumeOnBuild?:        boolean;
  components?:            Component[];
  ammo?:                  number;
  areaAttack?:            AreaAttack;
  damage?:                number | string;
  damageTypes?:           { [key: string]: number };
  flight?:                FlightEnum | number;
  marketCost?:            number | string;
  polarities?:            Aura[];
  projectile?:            Projectile;
  tags?:                  string[];
  disposition?:           number;
  blockingAngle?:         number;
  comboDuration?:         number;
  followThrough?:         number;
  range?:                 number;
  slamAttack?:            number;
  slamRadialDamage?:      number;
  slamRadius?:            number;
  slideAttack?:           number;
  heavyAttackDamage?:     number;
  heavySlamAttack?:       number;
  heavySlamRadialDamage?: number;
  heavySlamRadius?:       number;
  windUp?:                number;
  channeling?:            number;
  stancePolarity?:        Polarity;
  health?:                number;
  shield?:                number;
  armor?:                 number;
  stamina?:               number;
  power?:                 number;
  isUtility?:             boolean;
  itemCount?:             number;
  parents?:               string[];
  modSet?:                string;
  rewardName?:            string;
  tier?:                  number;
  probability?:           number;
  isExilus?:              boolean;
  hexColours?:            HexColour[];
  releaseDate?:           string;
  vaultDate?:             string;
  estimatedVaultDate?:    string;
  vaulted?:               boolean;
  fusionPoints?:          number;
  sprintSpeed?:           number;
  abilities?:             Ability[];
  chargeTime?:            number;
  secondary?:             Secondary;
  secondaryArea?:         SecondaryArea;
  statusChance?:          number;
  upgradeEntries?:        UpgradeEntry[];
  availableChallenges?:   AvailableChallenge[];
  sentinel?:              boolean;
  passiveDescription?:    string;
  aura?:                  Aura;
  conclave?:              boolean;
  color?:                 number;
  introduced?:            string;
  sex?:                   Sex;
  sprint?:                number;
  exalted?:               string[];
  primeOmegaAttenuation?: number;
  binCount?:              number;
  binCapacity?:           number;
  fillRate?:              number;
  durability?:            number;
  repairRate?:            number;
  capacityMultiplier?:    number[];
  specialities?:          any[];
  primeSellingPrice?:     number;
  maxLevelCap?:           number;
  modSetValues?:          number[];
}

export interface Ability {
  name:        string;
  description: string;
}

export interface AreaAttack {
  name?:          string;
  falloff?:       Falloff;
  slash?:         number;
  puncture?:      number;
  crit_chance?:   number;
  blast?:         number;
  damage?:        string;
  heat?:          number;
  crit_mult?:     number;
  status_chance?: number;
  toxin?:         number;
  shot_type?:     string;
  shot_speed?:    number | null;
  impact?:        number;
  speed?:         number;
  pellet?:        Pellet;
  gas?:           number;
  electricity?:   number;
  viral?:         number;
  corrosive?:     number;
  radiation?:     number;
  cold?:          number;
  magnetic?:      number;
  charge_time?:   number;
}

export interface Falloff {
  start:     number;
  end:       number;
  reduction: number;
}

export interface Pellet {
  name?: string;
  count: number;
}

export enum Aura {
  AuraMadurai = "Madurai",
  AuraNaramon = "Naramon",
  AuraUmbra = "Umbra",
  AuraVazarin = "Vazarin",
  Madurai = "madurai",
  Naramon = "naramon",
  Umbra = "umbra",
  Vazarin = "vazarin",
}

export interface AvailableChallenge {
  fullName:      string;
  description:   string;
  complications: Complication[];
}

export interface Complication {
  fullName:     FullName;
  description:  Description;
  overrideTag?: string;
}

export enum Description {
  InOneDay = "in one day",
  WhileAimGlide = "while Aim Glide",
  WhileAloneOrInSoloMode = ", while alone or in Solo Mode",
  WhileInvisible = "while invisible",
  WhileSliding = "while sliding",
  WhileUndetected = "while undetected",
  WithABleedingDragonKeyEquipped = "with a Bleeding Dragon Key equipped",
  WithADecayingDragonKeyEquipped = "with a Decaying Dragon Key equipped",
  WithAHobbledDragonKeyEquipped = "with a Hobbled Dragon Key equipped",
  WithAnActivePetPresent = "with an active pet present",
  WithAnActiveSentinelPresent = "with an active sentinel present",
  WithAnExtinguishedDragonKeyEquipped = "with an Extinguished Dragon Key equipped",
  WithoutAnAllyBecomingDowned = "without an ally becoming downed",
  WithoutBeingDisruptedByADTMAGNETICMagneticDamage = "without being disrupted by a <DT_MAGNETIC>Magnetic Damage",
  WithoutDyingOrBecomingDowned = "without dying or becoming downed",
  WithoutFailingAMission = "without failing a mission",
  WithoutGettingAfflictedByAStatusEffect = "without getting afflicted by a Status Effect",
  WithoutRaisingAnyAlarms = "without raising any alarms",
  WithoutTakingDamage = "without taking damage",
  WithoutUsingAirSupport = "without using air support",
  WithoutUsingAmmoConsumables = "without using ammo consumables",
  WithoutUsingCiphers = "without using ciphers",
  WithoutUsingEnergyConsumables = "without using energy consumables",
  WithoutUsingHealthConsumables = "without using health consumables",
  WithoutUsingShieldConsumables = "without using shield consumables",
}

export enum FullName {
  LotusTypesChallengesComplicationsAimGliding = "/Lotus/Types/Challenges/Complications/AimGliding",
  LotusTypesChallengesComplicationsEquippedDamageDebuffKey = "/Lotus/Types/Challenges/Complications/EquippedDamageDebuffKey",
  LotusTypesChallengesComplicationsEquippedHealthDebuffKey = "/Lotus/Types/Challenges/Complications/EquippedHealthDebuffKey",
  LotusTypesChallengesComplicationsEquippedShieldDebuffKey = "/Lotus/Types/Challenges/Complications/EquippedShieldDebuffKey",
  LotusTypesChallengesComplicationsEquippedSpeedDebuffKey = "/Lotus/Types/Challenges/Complications/EquippedSpeedDebuffKey",
  LotusTypesChallengesComplicationsInvisible = "/Lotus/Types/Challenges/Complications/Invisible",
  LotusTypesChallengesComplicationsPetPresent = "/Lotus/Types/Challenges/Complications/PetPresent",
  LotusTypesChallengesComplicationsResetOnAlarmRaised = "/Lotus/Types/Challenges/Complications/ResetOnAlarmRaised",
  LotusTypesChallengesComplicationsResetOnAllyDowned = "/Lotus/Types/Challenges/Complications/ResetOnAllyDowned",
  LotusTypesChallengesComplicationsResetOnDamageTaken = "/Lotus/Types/Challenges/Complications/ResetOnDamageTaken",
  LotusTypesChallengesComplicationsResetOnDisrupt = "/Lotus/Types/Challenges/Complications/ResetOnDisrupt",
  LotusTypesChallengesComplicationsResetOnDowned = "/Lotus/Types/Challenges/Complications/ResetOnDowned",
  LotusTypesChallengesComplicationsResetOnGearAirSupport = "/Lotus/Types/Challenges/Complications/ResetOnGearAirSupport",
  LotusTypesChallengesComplicationsResetOnGearAmmoRestores = "/Lotus/Types/Challenges/Complications/ResetOnGearAmmoRestores",
  LotusTypesChallengesComplicationsResetOnGearCipher = "/Lotus/Types/Challenges/Complications/ResetOnGearCipher",
  LotusTypesChallengesComplicationsResetOnGearEnergyRestores = "/Lotus/Types/Challenges/Complications/ResetOnGearEnergyRestores",
  LotusTypesChallengesComplicationsResetOnGearHealthRestores = "/Lotus/Types/Challenges/Complications/ResetOnGearHealthRestores",
  LotusTypesChallengesComplicationsResetOnGearShieldRestores = "/Lotus/Types/Challenges/Complications/ResetOnGearShieldRestores",
  LotusTypesChallengesComplicationsResetOnMissionFailure = "/Lotus/Types/Challenges/Complications/ResetOnMissionFailure",
  LotusTypesChallengesComplicationsResetOnNewDay = "/Lotus/Types/Challenges/Complications/ResetOnNewDay",
  LotusTypesChallengesComplicationsResetOnProc = "/Lotus/Types/Challenges/Complications/ResetOnProc",
  LotusTypesChallengesComplicationsSentinelPresent = "/Lotus/Types/Challenges/Complications/SentinelPresent",
  LotusTypesChallengesComplicationsSliding = "/Lotus/Types/Challenges/Complications/Sliding",
  LotusTypesChallengesComplicationsSoloPlayer = "/Lotus/Types/Challenges/Complications/SoloPlayer",
  LotusTypesChallengesComplicationsUndetected = "/Lotus/Types/Challenges/Complications/Undetected",
}

export enum Category {
  Arcanes = "Arcanes",
  ArchMelee = "Arch-Melee",
  Archwing = "Archwing",
  Fish = "Fish",
  Gear = "Gear",
  Glyphs = "Glyphs",
  Melee = "Melee",
  Misc = "Misc",
  Mods = "Mods",
  Node = "Node",
  Pets = "Pets",
  Primary = "Primary",
  Quests = "Quests",
  Relics = "Relics",
  Resources = "Resources",
  Secondary = "Secondary",
  Sentinels = "Sentinels",
  Sigils = "Sigils",
  Skins = "Skins",
  Warframes = "Warframes",
}

export interface Component {
  uniqueName:             string;
  name:                   string;
  description?:           string;
  itemCount:              number;
  imageName:              string;
  tradable:               boolean;
  drops?:                 Drop[];
  excludeFromCodex?:      boolean;
  damagePerShot?:         number[];
  totalDamage?:           number;
  criticalChance?:        number;
  criticalMultiplier?:    number;
  procChance?:            number;
  fireRate?:              number;
  masteryReq?:            number;
  productCategory?:       ProductCategory;
  slot?:                  number;
  accuracy?:              number;
  omegaAttenuation?:      number;
  noise?:                 Noise;
  trigger?:               Trigger;
  magazineSize?:          number;
  reloadTime?:            number;
  multishot?:             number;
  ammo?:                  number;
  damage?:                string;
  damageTypes?:           DamageTypes;
  marketCost?:            number;
  polarities?:            Aura[];
  projectile?:            Projectile;
  tags?:                  Tag[];
  type?:                  string;
  wikiaThumbnail?:        string;
  wikiaUrl?:              string;
  disposition?:           number;
  flight?:                number;
  primeSellingPrice?:     number;
  ducats?:                number;
  releaseDate?:           string;
  vaultDate?:             string;
  estimatedVaultDate?:    string;
  blockingAngle?:         number;
  comboDuration?:         number;
  followThrough?:         number;
  range?:                 number;
  slamAttack?:            number;
  slamRadialDamage?:      number;
  slamRadius?:            number;
  slideAttack?:           number;
  heavyAttackDamage?:     number;
  heavySlamAttack?:       number;
  heavySlamRadialDamage?: number;
  heavySlamRadius?:       number;
  windUp?:                number;
  channeling?:            number;
  stancePolarity?:        Polarity;
  vaulted?:               boolean;
  statusChance?:          number;
}

export interface DamageTypes {
  impact?:      number;
  slash?:       number;
  puncture?:    number;
  magnetic?:    number;
  electricity?: number;
  heat?:        number;
}

export interface Drop {
  location:  string;
  type:      Type;
  rarity?:   Rarity;
  chance:    number | null;
  rotation?: Rotation;
}

export enum Rarity {
  Common = "Common",
  Legendary = "Legendary",
  Rare = "Rare",
  Uncommon = "Uncommon",
}

export enum Rotation {
  A = "A",
  Annihilation = "Annihilation",
  B = "B",
  C = "C",
  Capture = "Capture",
  Extra = "(Extra)",
  Field = "Field",
  Onslaught = "Onslaught",
  Rewards = "rewards",
}

export enum Type {
  AdditionalItemByAvatar = "Additional Item By Avatar",
  CetusBountyRewards = "Cetus Bounty Rewards",
  DeimosRewards = "Deimos Rewards",
  EnemyBlueprintTables = "Enemy Blueprint Tables",
  EnemyModTables = "Enemy Mod Tables",
  KeyRewards = "Key Rewards",
  MissionRewards = "Mission Rewards",
  ModLocations = "Mod Locations",
  Relics = "Relics",
  ResourceByAvatar = "Resource By Avatar",
  SigilByAvatar = "Sigil By Avatar",
  SolarisBountyRewards = "Solaris Bounty Rewards",
  SortieRewards = "Sortie Rewards",
  TransientRewards = "Transient Rewards",
}

export enum Noise {
  Alarming = "Alarming",
  Silent = "Silent",
}

export enum ProductCategory {
  KubrowPets = "KubrowPets",
  LongGuns = "LongGuns",
  MechSuits = "MechSuits",
  Melee = "Melee",
  Pistols = "Pistols",
  SentinelWeapons = "SentinelWeapons",
  Sentinels = "Sentinels",
  SpaceGuns = "SpaceGuns",
  SpaceMelee = "SpaceMelee",
  SpaceSuits = "SpaceSuits",
  SpecialItems = "SpecialItems",
  Suits = "Suits",
}

export enum Projectile {
  Discharge = "Discharge",
  Empty = "?",
  Hitscan = "Hitscan",
  Projectile = "Projectile",
  Thrown = "Thrown",
}

export enum Polarity {
  Madurai = "Madurai",
  Naramon = "Naramon",
  Penjaga = "Penjaga",
  Umbra = "Umbra",
  Unairu = "Unairu",
  Universal = "Universal",
  Vazarin = "Vazarin",
  Zenurik = "Zenurik",
}

export enum Tag {
  Cephalon = "Cephalon",
  Corpus = "Corpus",
  Grineer = "Grineer",
  NeverVaulted = "Never Vaulted",
  Prime = "Prime",
  Tenno = "Tenno",
  Tutorial = "Tutorial",
  Vaulted = "Vaulted",
}

export enum Trigger {
  Active = "Active",
  Auto = "Auto",
  AutoBurst = "Auto Burst",
  Burst = "Burst",
  Charge = "Charge",
  Duplex = "Duplex",
  Held = "Held",
  Semi = "Semi",
}

export enum FlightEnum {
  Empty = "???",
}

export interface HexColour {
  value: string;
}

export interface LevelStat {
  stats: string[];
}

export interface Patchlog {
  name:      string;
  date:      Date;
  url:       string;
  additions: string;
  changes:   string;
  fixes:     string;
  imgUrl?:   string;
}

export interface Secondary {
  name?:          string;
  pellet?:        Pellet;
  falloff?:       Falloff;
  blast?:         number;
  damage?:        string;
  speed?:         number;
  crit_chance?:   number;
  crit_mult?:     number;
  status_chance?: number;
  shot_type?:     string;
  impact?:        number;
  slash?:         number;
  puncture?:      number;
  heat?:          number;
  shot_speed?:    number | null;
  electricity?:   number;
  charge_time?:   number;
  radiation?:     number;
  toxin?:         number;
  cold?:          number;
  corrosive?:     number;
}

export interface SecondaryArea {
  name:           string;
  status_chance?: number;
  pellet?:        Pellet;
  blast?:         number;
  damage?:        string;
  radius?:        number;
  radiation?:     number;
  toxin?:         number;
  electricity?:   number;
  impact?:        number;
  slash?:         number;
  puncture?:      number;
  heat?:          number;
  magnetic?:      number;
  cold?:          number;
  viral?:         number;
  duration?:      number;
  speed?:         number;
}

export enum Sex {
  Empty = "",
  Female = "Female",
  Male = "Male",
}

export interface UpgradeEntry {
  tag:           string;
  prefixTag:     string;
  suffixTag:     string;
  upgradeValues: UpgradeValue[];
}

export interface UpgradeValue {
  value:               number;
  locTag?:             string;
  reverseValueSymbol?: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toItem(json: string): Item[] {
      return cast(JSON.parse(json), a(r("Item")));
  }

  public static itemToJson(value: Item[]): string {
      return JSON.stringify(uncast(value, a(r("Item"))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
      throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue("array", val);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue("Date", val);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue("object", val);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, prop.key);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "Item": o([
      { json: "uniqueName", js: "uniqueName", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "description", js: "description", typ: u(undefined, "") },
      { json: "type", js: "type", typ: "" },
      { json: "imageName", js: "imageName", typ: u(undefined, "") },
      { json: "category", js: "category", typ: r("Category") },
      { json: "tradable", js: "tradable", typ: true },
      { json: "excludeFromCodex", js: "excludeFromCodex", typ: u(undefined, true) },
      { json: "rarity", js: "rarity", typ: u(undefined, r("Rarity")) },
      { json: "levelStats", js: "levelStats", typ: u(undefined, a(r("LevelStat"))) },
      { json: "showInInventory", js: "showInInventory", typ: u(undefined, true) },
      { json: "systemIndex", js: "systemIndex", typ: u(undefined, 0) },
      { json: "systemName", js: "systemName", typ: u(undefined, "") },
      { json: "nodeType", js: "nodeType", typ: u(undefined, 0) },
      { json: "masteryReq", js: "masteryReq", typ: u(undefined, 0) },
      { json: "missionIndex", js: "missionIndex", typ: u(undefined, 0) },
      { json: "factionIndex", js: "factionIndex", typ: u(undefined, 0) },
      { json: "minEnemyLevel", js: "minEnemyLevel", typ: u(undefined, 0) },
      { json: "maxEnemyLevel", js: "maxEnemyLevel", typ: u(undefined, 0) },
      { json: "polarity", js: "polarity", typ: u(undefined, r("Polarity")) },
      { json: "baseDrain", js: "baseDrain", typ: u(undefined, 0) },
      { json: "fusionLimit", js: "fusionLimit", typ: u(undefined, 0) },
      { json: "compatName", js: "compatName", typ: u(undefined, "") },
      { json: "isAugment", js: "isAugment", typ: u(undefined, true) },
      { json: "wikiaThumbnail", js: "wikiaThumbnail", typ: u(undefined, "") },
      { json: "wikiaUrl", js: "wikiaUrl", typ: u(undefined, "") },
      { json: "transmutable", js: "transmutable", typ: u(undefined, true) },
      { json: "patchlogs", js: "patchlogs", typ: u(undefined, a(r("Patchlog"))) },
      { json: "drops", js: "drops", typ: u(undefined, a(r("Drop"))) },
      { json: "damagePerShot", js: "damagePerShot", typ: u(undefined, a(3.14)) },
      { json: "totalDamage", js: "totalDamage", typ: u(undefined, 3.14) },
      { json: "criticalChance", js: "criticalChance", typ: u(undefined, 3.14) },
      { json: "criticalMultiplier", js: "criticalMultiplier", typ: u(undefined, 3.14) },
      { json: "procChance", js: "procChance", typ: u(undefined, 3.14) },
      { json: "fireRate", js: "fireRate", typ: u(undefined, 3.14) },
      { json: "productCategory", js: "productCategory", typ: u(undefined, r("ProductCategory")) },
      { json: "slot", js: "slot", typ: u(undefined, 0) },
      { json: "accuracy", js: "accuracy", typ: u(undefined, 3.14) },
      { json: "omegaAttenuation", js: "omegaAttenuation", typ: u(undefined, 3.14) },
      { json: "noise", js: "noise", typ: u(undefined, r("Noise")) },
      { json: "trigger", js: "trigger", typ: u(undefined, r("Trigger")) },
      { json: "magazineSize", js: "magazineSize", typ: u(undefined, 0) },
      { json: "reloadTime", js: "reloadTime", typ: u(undefined, 3.14) },
      { json: "multishot", js: "multishot", typ: u(undefined, 0) },
      { json: "buildPrice", js: "buildPrice", typ: u(undefined, 0) },
      { json: "buildTime", js: "buildTime", typ: u(undefined, 0) },
      { json: "skipBuildTimePrice", js: "skipBuildTimePrice", typ: u(undefined, 0) },
      { json: "buildQuantity", js: "buildQuantity", typ: u(undefined, 0) },
      { json: "consumeOnBuild", js: "consumeOnBuild", typ: u(undefined, true) },
      { json: "components", js: "components", typ: u(undefined, a(r("Component"))) },
      { json: "ammo", js: "ammo", typ: u(undefined, 0) },
      { json: "areaAttack", js: "areaAttack", typ: u(undefined, r("AreaAttack")) },
      { json: "damage", js: "damage", typ: u(undefined, u(0, "")) },
      { json: "damageTypes", js: "damageTypes", typ: u(undefined, m(3.14)) },
      { json: "flight", js: "flight", typ: u(undefined, u(r("FlightEnum"), 0)) },
      { json: "marketCost", js: "marketCost", typ: u(undefined, u(0, "")) },
      { json: "polarities", js: "polarities", typ: u(undefined, a(r("Aura"))) },
      { json: "projectile", js: "projectile", typ: u(undefined, r("Projectile")) },
      { json: "tags", js: "tags", typ: u(undefined, a("")) },
      { json: "disposition", js: "disposition", typ: u(undefined, 0) },
      { json: "blockingAngle", js: "blockingAngle", typ: u(undefined, 0) },
      { json: "comboDuration", js: "comboDuration", typ: u(undefined, 0) },
      { json: "followThrough", js: "followThrough", typ: u(undefined, 3.14) },
      { json: "range", js: "range", typ: u(undefined, 3.14) },
      { json: "slamAttack", js: "slamAttack", typ: u(undefined, 0) },
      { json: "slamRadialDamage", js: "slamRadialDamage", typ: u(undefined, 0) },
      { json: "slamRadius", js: "slamRadius", typ: u(undefined, 0) },
      { json: "slideAttack", js: "slideAttack", typ: u(undefined, 0) },
      { json: "heavyAttackDamage", js: "heavyAttackDamage", typ: u(undefined, 0) },
      { json: "heavySlamAttack", js: "heavySlamAttack", typ: u(undefined, 0) },
      { json: "heavySlamRadialDamage", js: "heavySlamRadialDamage", typ: u(undefined, 0) },
      { json: "heavySlamRadius", js: "heavySlamRadius", typ: u(undefined, 0) },
      { json: "windUp", js: "windUp", typ: u(undefined, 3.14) },
      { json: "channeling", js: "channeling", typ: u(undefined, 3.14) },
      { json: "stancePolarity", js: "stancePolarity", typ: u(undefined, r("Polarity")) },
      { json: "health", js: "health", typ: u(undefined, 0) },
      { json: "shield", js: "shield", typ: u(undefined, 0) },
      { json: "armor", js: "armor", typ: u(undefined, 0) },
      { json: "stamina", js: "stamina", typ: u(undefined, 0) },
      { json: "power", js: "power", typ: u(undefined, 0) },
      { json: "isUtility", js: "isUtility", typ: u(undefined, true) },
      { json: "itemCount", js: "itemCount", typ: u(undefined, 0) },
      { json: "parents", js: "parents", typ: u(undefined, a("")) },
      { json: "modSet", js: "modSet", typ: u(undefined, "") },
      { json: "rewardName", js: "rewardName", typ: u(undefined, "") },
      { json: "tier", js: "tier", typ: u(undefined, 0) },
      { json: "probability", js: "probability", typ: u(undefined, 3.14) },
      { json: "isExilus", js: "isExilus", typ: u(undefined, true) },
      { json: "hexColours", js: "hexColours", typ: u(undefined, a(r("HexColour"))) },
      { json: "releaseDate", js: "releaseDate", typ: u(undefined, "") },
      { json: "vaultDate", js: "vaultDate", typ: u(undefined, "") },
      { json: "estimatedVaultDate", js: "estimatedVaultDate", typ: u(undefined, "") },
      { json: "vaulted", js: "vaulted", typ: u(undefined, true) },
      { json: "fusionPoints", js: "fusionPoints", typ: u(undefined, 0) },
      { json: "sprintSpeed", js: "sprintSpeed", typ: u(undefined, 3.14) },
      { json: "abilities", js: "abilities", typ: u(undefined, a(r("Ability"))) },
      { json: "chargeTime", js: "chargeTime", typ: u(undefined, 3.14) },
      { json: "secondary", js: "secondary", typ: u(undefined, r("Secondary")) },
      { json: "secondaryArea", js: "secondaryArea", typ: u(undefined, r("SecondaryArea")) },
      { json: "statusChance", js: "statusChance", typ: u(undefined, 3.14) },
      { json: "upgradeEntries", js: "upgradeEntries", typ: u(undefined, a(r("UpgradeEntry"))) },
      { json: "availableChallenges", js: "availableChallenges", typ: u(undefined, a(r("AvailableChallenge"))) },
      { json: "sentinel", js: "sentinel", typ: u(undefined, true) },
      { json: "passiveDescription", js: "passiveDescription", typ: u(undefined, "") },
      { json: "aura", js: "aura", typ: u(undefined, r("Aura")) },
      { json: "conclave", js: "conclave", typ: u(undefined, true) },
      { json: "color", js: "color", typ: u(undefined, 0) },
      { json: "introduced", js: "introduced", typ: u(undefined, "") },
      { json: "sex", js: "sex", typ: u(undefined, r("Sex")) },
      { json: "sprint", js: "sprint", typ: u(undefined, 3.14) },
      { json: "exalted", js: "exalted", typ: u(undefined, a("")) },
      { json: "primeOmegaAttenuation", js: "primeOmegaAttenuation", typ: u(undefined, 3.14) },
      { json: "binCount", js: "binCount", typ: u(undefined, 0) },
      { json: "binCapacity", js: "binCapacity", typ: u(undefined, 0) },
      { json: "fillRate", js: "fillRate", typ: u(undefined, 0) },
      { json: "durability", js: "durability", typ: u(undefined, 0) },
      { json: "repairRate", js: "repairRate", typ: u(undefined, 0) },
      { json: "capacityMultiplier", js: "capacityMultiplier", typ: u(undefined, a(0)) },
      { json: "specialities", js: "specialities", typ: u(undefined, a("any")) },
      { json: "primeSellingPrice", js: "primeSellingPrice", typ: u(undefined, 0) },
      { json: "maxLevelCap", js: "maxLevelCap", typ: u(undefined, 0) },
      { json: "modSetValues", js: "modSetValues", typ: u(undefined, a(3.14)) },
  ], false),
  "Ability": o([
      { json: "name", js: "name", typ: "" },
      { json: "description", js: "description", typ: "" },
  ], false),
  "AreaAttack": o([
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "falloff", js: "falloff", typ: u(undefined, r("Falloff")) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "crit_chance", js: "crit_chance", typ: u(undefined, 0) },
      { json: "blast", js: "blast", typ: u(undefined, 0) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "heat", js: "heat", typ: u(undefined, 3.14) },
      { json: "crit_mult", js: "crit_mult", typ: u(undefined, 3.14) },
      { json: "status_chance", js: "status_chance", typ: u(undefined, 3.14) },
      { json: "toxin", js: "toxin", typ: u(undefined, 0) },
      { json: "shot_type", js: "shot_type", typ: u(undefined, "") },
      { json: "shot_speed", js: "shot_speed", typ: u(undefined, u(0, null)) },
      { json: "impact", js: "impact", typ: u(undefined, 3.14) },
      { json: "speed", js: "speed", typ: u(undefined, 3.14) },
      { json: "pellet", js: "pellet", typ: u(undefined, r("Pellet")) },
      { json: "gas", js: "gas", typ: u(undefined, 0) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "viral", js: "viral", typ: u(undefined, 0) },
      { json: "corrosive", js: "corrosive", typ: u(undefined, 0) },
      { json: "radiation", js: "radiation", typ: u(undefined, 0) },
      { json: "cold", js: "cold", typ: u(undefined, 0) },
      { json: "magnetic", js: "magnetic", typ: u(undefined, 0) },
      { json: "charge_time", js: "charge_time", typ: u(undefined, 0) },
  ], false),
  "Falloff": o([
      { json: "start", js: "start", typ: 0 },
      { json: "end", js: "end", typ: 3.14 },
      { json: "reduction", js: "reduction", typ: 3.14 },
  ], false),
  "Pellet": o([
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "count", js: "count", typ: 0 },
  ], false),
  "AvailableChallenge": o([
      { json: "fullName", js: "fullName", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "complications", js: "complications", typ: a(r("Complication")) },
  ], false),
  "Complication": o([
      { json: "fullName", js: "fullName", typ: r("FullName") },
      { json: "description", js: "description", typ: r("Description") },
      { json: "overrideTag", js: "overrideTag", typ: u(undefined, "") },
  ], false),
  "Component": o([
      { json: "uniqueName", js: "uniqueName", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "description", js: "description", typ: u(undefined, "") },
      { json: "itemCount", js: "itemCount", typ: 0 },
      { json: "imageName", js: "imageName", typ: "" },
      { json: "tradable", js: "tradable", typ: true },
      { json: "drops", js: "drops", typ: u(undefined, a(r("Drop"))) },
      { json: "excludeFromCodex", js: "excludeFromCodex", typ: u(undefined, true) },
      { json: "damagePerShot", js: "damagePerShot", typ: u(undefined, a(3.14)) },
      { json: "totalDamage", js: "totalDamage", typ: u(undefined, 3.14) },
      { json: "criticalChance", js: "criticalChance", typ: u(undefined, 3.14) },
      { json: "criticalMultiplier", js: "criticalMultiplier", typ: u(undefined, 3.14) },
      { json: "procChance", js: "procChance", typ: u(undefined, 3.14) },
      { json: "fireRate", js: "fireRate", typ: u(undefined, 3.14) },
      { json: "masteryReq", js: "masteryReq", typ: u(undefined, 0) },
      { json: "productCategory", js: "productCategory", typ: u(undefined, r("ProductCategory")) },
      { json: "slot", js: "slot", typ: u(undefined, 0) },
      { json: "accuracy", js: "accuracy", typ: u(undefined, 3.14) },
      { json: "omegaAttenuation", js: "omegaAttenuation", typ: u(undefined, 3.14) },
      { json: "noise", js: "noise", typ: u(undefined, r("Noise")) },
      { json: "trigger", js: "trigger", typ: u(undefined, r("Trigger")) },
      { json: "magazineSize", js: "magazineSize", typ: u(undefined, 0) },
      { json: "reloadTime", js: "reloadTime", typ: u(undefined, 3.14) },
      { json: "multishot", js: "multishot", typ: u(undefined, 0) },
      { json: "ammo", js: "ammo", typ: u(undefined, 0) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "damageTypes", js: "damageTypes", typ: u(undefined, r("DamageTypes")) },
      { json: "marketCost", js: "marketCost", typ: u(undefined, 0) },
      { json: "polarities", js: "polarities", typ: u(undefined, a(r("Aura"))) },
      { json: "projectile", js: "projectile", typ: u(undefined, r("Projectile")) },
      { json: "tags", js: "tags", typ: u(undefined, a(r("Tag"))) },
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "wikiaThumbnail", js: "wikiaThumbnail", typ: u(undefined, "") },
      { json: "wikiaUrl", js: "wikiaUrl", typ: u(undefined, "") },
      { json: "disposition", js: "disposition", typ: u(undefined, 0) },
      { json: "flight", js: "flight", typ: u(undefined, 0) },
      { json: "primeSellingPrice", js: "primeSellingPrice", typ: u(undefined, 0) },
      { json: "ducats", js: "ducats", typ: u(undefined, 0) },
      { json: "releaseDate", js: "releaseDate", typ: u(undefined, "") },
      { json: "vaultDate", js: "vaultDate", typ: u(undefined, "") },
      { json: "estimatedVaultDate", js: "estimatedVaultDate", typ: u(undefined, "") },
      { json: "blockingAngle", js: "blockingAngle", typ: u(undefined, 0) },
      { json: "comboDuration", js: "comboDuration", typ: u(undefined, 0) },
      { json: "followThrough", js: "followThrough", typ: u(undefined, 3.14) },
      { json: "range", js: "range", typ: u(undefined, 3.14) },
      { json: "slamAttack", js: "slamAttack", typ: u(undefined, 0) },
      { json: "slamRadialDamage", js: "slamRadialDamage", typ: u(undefined, 0) },
      { json: "slamRadius", js: "slamRadius", typ: u(undefined, 0) },
      { json: "slideAttack", js: "slideAttack", typ: u(undefined, 0) },
      { json: "heavyAttackDamage", js: "heavyAttackDamage", typ: u(undefined, 0) },
      { json: "heavySlamAttack", js: "heavySlamAttack", typ: u(undefined, 0) },
      { json: "heavySlamRadialDamage", js: "heavySlamRadialDamage", typ: u(undefined, 0) },
      { json: "heavySlamRadius", js: "heavySlamRadius", typ: u(undefined, 0) },
      { json: "windUp", js: "windUp", typ: u(undefined, 3.14) },
      { json: "channeling", js: "channeling", typ: u(undefined, 3.14) },
      { json: "stancePolarity", js: "stancePolarity", typ: u(undefined, r("Polarity")) },
      { json: "vaulted", js: "vaulted", typ: u(undefined, true) },
      { json: "statusChance", js: "statusChance", typ: u(undefined, 3.14) },
  ], false),
  "DamageTypes": o([
      { json: "impact", js: "impact", typ: u(undefined, 3.14) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "magnetic", js: "magnetic", typ: u(undefined, 0) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "heat", js: "heat", typ: u(undefined, 0) },
  ], false),
  "Drop": o([
      { json: "location", js: "location", typ: "" },
      { json: "type", js: "type", typ: r("Type") },
      { json: "rarity", js: "rarity", typ: u(undefined, r("Rarity")) },
      { json: "chance", js: "chance", typ: u(3.14, null) },
      { json: "rotation", js: "rotation", typ: u(undefined, r("Rotation")) },
  ], false),
  "HexColour": o([
      { json: "value", js: "value", typ: "" },
  ], false),
  "LevelStat": o([
      { json: "stats", js: "stats", typ: a("") },
  ], false),
  "Patchlog": o([
      { json: "name", js: "name", typ: "" },
      { json: "date", js: "date", typ: Date },
      { json: "url", js: "url", typ: "" },
      { json: "additions", js: "additions", typ: "" },
      { json: "changes", js: "changes", typ: "" },
      { json: "fixes", js: "fixes", typ: "" },
      { json: "imgUrl", js: "imgUrl", typ: u(undefined, "") },
  ], false),
  "Secondary": o([
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "pellet", js: "pellet", typ: u(undefined, r("Pellet")) },
      { json: "falloff", js: "falloff", typ: u(undefined, r("Falloff")) },
      { json: "blast", js: "blast", typ: u(undefined, 0) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "speed", js: "speed", typ: u(undefined, 3.14) },
      { json: "crit_chance", js: "crit_chance", typ: u(undefined, 3.14) },
      { json: "crit_mult", js: "crit_mult", typ: u(undefined, 3.14) },
      { json: "status_chance", js: "status_chance", typ: u(undefined, 3.14) },
      { json: "shot_type", js: "shot_type", typ: u(undefined, "") },
      { json: "impact", js: "impact", typ: u(undefined, 3.14) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "heat", js: "heat", typ: u(undefined, 0) },
      { json: "shot_speed", js: "shot_speed", typ: u(undefined, u(0, null)) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "charge_time", js: "charge_time", typ: u(undefined, 3.14) },
      { json: "radiation", js: "radiation", typ: u(undefined, 0) },
      { json: "toxin", js: "toxin", typ: u(undefined, 0) },
      { json: "cold", js: "cold", typ: u(undefined, 0) },
      { json: "corrosive", js: "corrosive", typ: u(undefined, 0) },
  ], false),
  "SecondaryArea": o([
      { json: "name", js: "name", typ: "" },
      { json: "status_chance", js: "status_chance", typ: u(undefined, 3.14) },
      { json: "pellet", js: "pellet", typ: u(undefined, r("Pellet")) },
      { json: "blast", js: "blast", typ: u(undefined, 0) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "radius", js: "radius", typ: u(undefined, 0) },
      { json: "radiation", js: "radiation", typ: u(undefined, 0) },
      { json: "toxin", js: "toxin", typ: u(undefined, 0) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "impact", js: "impact", typ: u(undefined, 0) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "heat", js: "heat", typ: u(undefined, 0) },
      { json: "magnetic", js: "magnetic", typ: u(undefined, 0) },
      { json: "cold", js: "cold", typ: u(undefined, 0) },
      { json: "viral", js: "viral", typ: u(undefined, 0) },
      { json: "duration", js: "duration", typ: u(undefined, 0) },
      { json: "speed", js: "speed", typ: u(undefined, 3.14) },
  ], false),
  "UpgradeEntry": o([
      { json: "tag", js: "tag", typ: "" },
      { json: "prefixTag", js: "prefixTag", typ: "" },
      { json: "suffixTag", js: "suffixTag", typ: "" },
      { json: "upgradeValues", js: "upgradeValues", typ: a(r("UpgradeValue")) },
  ], false),
  "UpgradeValue": o([
      { json: "value", js: "value", typ: 3.14 },
      { json: "locTag", js: "locTag", typ: u(undefined, "") },
      { json: "reverseValueSymbol", js: "reverseValueSymbol", typ: u(undefined, true) },
  ], false),
  "Aura": [
      "Madurai",
      "Naramon",
      "Umbra",
      "Vazarin",
      "madurai",
      "naramon",
      "umbra",
      "vazarin",
  ],
  "Description": [
      "in one day",
      "while Aim Glide",
      ", while alone or in Solo Mode",
      "while invisible",
      "while sliding",
      "while undetected",
      "with a Bleeding Dragon Key equipped",
      "with a Decaying Dragon Key equipped",
      "with a Hobbled Dragon Key equipped",
      "with an active pet present",
      "with an active sentinel present",
      "with an Extinguished Dragon Key equipped",
      "without an ally becoming downed",
      "without being disrupted by a <DT_MAGNETIC>Magnetic Damage",
      "without dying or becoming downed",
      "without failing a mission",
      "without getting afflicted by a Status Effect",
      "without raising any alarms",
      "without taking damage",
      "without using air support",
      "without using ammo consumables",
      "without using ciphers",
      "without using energy consumables",
      "without using health consumables",
      "without using shield consumables",
  ],
  "FullName": [
      "/Lotus/Types/Challenges/Complications/AimGliding",
      "/Lotus/Types/Challenges/Complications/EquippedDamageDebuffKey",
      "/Lotus/Types/Challenges/Complications/EquippedHealthDebuffKey",
      "/Lotus/Types/Challenges/Complications/EquippedShieldDebuffKey",
      "/Lotus/Types/Challenges/Complications/EquippedSpeedDebuffKey",
      "/Lotus/Types/Challenges/Complications/Invisible",
      "/Lotus/Types/Challenges/Complications/PetPresent",
      "/Lotus/Types/Challenges/Complications/ResetOnAlarmRaised",
      "/Lotus/Types/Challenges/Complications/ResetOnAllyDowned",
      "/Lotus/Types/Challenges/Complications/ResetOnDamageTaken",
      "/Lotus/Types/Challenges/Complications/ResetOnDisrupt",
      "/Lotus/Types/Challenges/Complications/ResetOnDowned",
      "/Lotus/Types/Challenges/Complications/ResetOnGearAirSupport",
      "/Lotus/Types/Challenges/Complications/ResetOnGearAmmoRestores",
      "/Lotus/Types/Challenges/Complications/ResetOnGearCipher",
      "/Lotus/Types/Challenges/Complications/ResetOnGearEnergyRestores",
      "/Lotus/Types/Challenges/Complications/ResetOnGearHealthRestores",
      "/Lotus/Types/Challenges/Complications/ResetOnGearShieldRestores",
      "/Lotus/Types/Challenges/Complications/ResetOnMissionFailure",
      "/Lotus/Types/Challenges/Complications/ResetOnNewDay",
      "/Lotus/Types/Challenges/Complications/ResetOnProc",
      "/Lotus/Types/Challenges/Complications/SentinelPresent",
      "/Lotus/Types/Challenges/Complications/Sliding",
      "/Lotus/Types/Challenges/Complications/SoloPlayer",
      "/Lotus/Types/Challenges/Complications/Undetected",
  ],
  "Category": [
      "Arcanes",
      "Arch-Melee",
      "Archwing",
      "Fish",
      "Gear",
      "Glyphs",
      "Melee",
      "Misc",
      "Mods",
      "Node",
      "Pets",
      "Primary",
      "Quests",
      "Relics",
      "Resources",
      "Secondary",
      "Sentinels",
      "Sigils",
      "Skins",
      "Warframes",
  ],
  "Rarity": [
      "Common",
      "Legendary",
      "Rare",
      "Uncommon",
  ],
  "Rotation": [
      "A",
      "Annihilation",
      "B",
      "C",
      "Capture",
      "(Extra)",
      "Field",
      "Onslaught",
      "rewards",
  ],
  "Type": [
      "Additional Item By Avatar",
      "Cetus Bounty Rewards",
      "Deimos Rewards",
      "Enemy Blueprint Tables",
      "Enemy Mod Tables",
      "Key Rewards",
      "Mission Rewards",
      "Mod Locations",
      "Relics",
      "Resource By Avatar",
      "Sigil By Avatar",
      "Solaris Bounty Rewards",
      "Sortie Rewards",
      "Transient Rewards",
  ],
  "Noise": [
      "Alarming",
      "Silent",
  ],
  "ProductCategory": [
      "KubrowPets",
      "LongGuns",
      "MechSuits",
      "Melee",
      "Pistols",
      "SentinelWeapons",
      "Sentinels",
      "SpaceGuns",
      "SpaceMelee",
      "SpaceSuits",
      "SpecialItems",
      "Suits",
  ],
  "Projectile": [
      "Discharge",
      "?",
      "Hitscan",
      "Projectile",
      "Thrown",
  ],
  "Polarity": [
      "Madurai",
      "Naramon",
      "Penjaga",
      "Umbra",
      "Unairu",
      "Universal",
      "Vazarin",
      "Zenurik",
  ],
  "Tag": [
      "Cephalon",
      "Corpus",
      "Grineer",
      "Never Vaulted",
      "Prime",
      "Tenno",
      "Tutorial",
      "Vaulted",
  ],
  "Trigger": [
      "Active",
      "Auto",
      "Auto Burst",
      "Burst",
      "Charge",
      "Duplex",
      "Held",
      "Semi",
  ],
  "FlightEnum": [
      "???",
  ],
  "Sex": [
      "",
      "Female",
      "Male",
  ],
};
