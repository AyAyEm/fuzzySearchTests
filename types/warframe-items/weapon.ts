// To parse this data:
//
//   import { Convert } from "./file";
//
//   const weapon = Convert.toWeapon(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Weapon {
  name:                   string;
  uniqueName:             string;
  damagePerShot:          number[];
  totalDamage:            number;
  description:            string;
  criticalChance:         number;
  criticalMultiplier:     number;
  procChance:             number;
  fireRate:               number;
  masteryReq:             number;
  productCategory:        ProductCategory;
  slot:                   number;
  accuracy?:              number;
  omegaAttenuation:       number;
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
  type:                   string;
  imageName:              string;
  category:               Category;
  tradable:               boolean;
  patchlogs?:             Patchlog[];
  ammo?:                  number;
  areaAttack?:            AreaAttack;
  damage?:                number | string;
  damageTypes?:           { [key: string]: number };
  flight?:                FlightEnum | number;
  marketCost?:            number | string;
  polarities?:            Polarity[];
  projectile?:            Projectile;
  tags?:                  string[];
  wikiaThumbnail?:        string;
  wikiaUrl?:              string;
  disposition?:           number;
  secondary?:             Secondary;
  sentinel?:              boolean;
  secondaryArea?:         SecondaryArea;
  releaseDate?:           string;
  vaultDate?:             string;
  estimatedVaultDate?:    string;
  vaulted?:               boolean;
  statusChance?:          number;
  chargeTime?:            number;
  itemCount?:             number;
  parents?:               string[];
  maxLevelCap?:           number;
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
}

export interface AreaAttack {
  name?:          string;
  falloff?:       Falloff;
  slash?:         number;
  puncture?:      number;
  crit_chance?:   number;
  crit_mult?:     number;
  status_chance?: number;
  heat?:          number;
  damage?:        string;
  shot_type?:     string;
  shot_speed?:    number | null;
  impact?:        number;
  speed?:         number;
  pellet?:        Pellet;
  blast?:         number;
  viral?:         number;
  radiation?:     number;
  cold?:          number;
  toxin?:         number;
  magnetic?:      number;
  electricity?:   number;
  corrosive?:     number;
  gas?:           number;
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

export enum Category {
  Melee = "Melee",
  Primary = "Primary",
  Secondary = "Secondary",
}

export interface Component {
  uniqueName:             string;
  name:                   string;
  description:            string;
  itemCount:              number;
  imageName:              string;
  tradable:               boolean;
  drops?:                 Drop[];
  primeSellingPrice?:     number;
  ducats?:                number;
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
  flight?:                number;
  marketCost?:            number;
  polarities?:            Polarity[];
  projectile?:            Projectile;
  statusChance?:          number;
  tags?:                  Tag[];
  type?:                  string;
  wikiaThumbnail?:        string;
  wikiaUrl?:              string;
  disposition?:           number;
  excludeFromCodex?:      boolean;
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
  rarity:    Rarity;
  chance:    number;
  rotation?: Rotation;
}

export enum Rarity {
  Common = "Common",
  Legendary = "Legendary",
  Rare = "Rare",
  Uncommon = "Uncommon",
}

export enum Rotation {
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
  KeyRewards = "Key Rewards",
  MissionRewards = "Mission Rewards",
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

export enum Polarity {
  Madurai = "Madurai",
  Naramon = "Naramon",
  Umbra = "Umbra",
  Unairu = "Unairu",
  Vazarin = "Vazarin",
  Zenurik = "Zenurik",
}

export enum ProductCategory {
  LongGuns = "LongGuns",
  Melee = "Melee",
  Pistols = "Pistols",
  SentinelWeapons = "SentinelWeapons",
  SpaceGuns = "SpaceGuns",
}

export enum Projectile {
  Discharge = "Discharge",
  Empty = "?",
  Hitscan = "Hitscan",
  Projectile = "Projectile",
  Thrown = "Thrown",
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

export interface Patchlog {
  name:      string;
  date:      Date;
  url:       string;
  imgUrl?:   string;
  additions: string;
  changes:   string;
  fixes:     string;
}

export interface Secondary {
  name?:          string;
  speed?:         number;
  crit_chance?:   number;
  crit_mult?:     number;
  status_chance?: number;
  shot_type?:     string;
  impact?:        number;
  slash?:         number;
  puncture?:      number;
  electricity?:   number;
  damage?:        string;
  charge_time?:   number;
  radiation?:     number;
  shot_speed?:    number | null;
  pellet?:        Pellet;
  falloff?:       Falloff;
  blast?:         number;
  heat?:          number;
  toxin?:         number;
  cold?:          number;
  corrosive?:     number;
}

export interface SecondaryArea {
  name:           string;
  status_chance?: number;
  radius?:        number;
  radiation?:     number;
  damage?:        string;
  blast?:         number;
  impact?:        number;
  slash?:         number;
  puncture?:      number;
  heat?:          number;
  pellet?:        Pellet;
  magnetic?:      number;
  toxin?:         number;
  electricity?:   number;
  cold?:          number;
  viral?:         number;
  duration?:      number;
  speed?:         number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toWeapon(json: string): Weapon[] {
      return cast(JSON.parse(json), a(r("Weapon")));
  }

  public static weaponToJson(value: Weapon[]): string {
      return JSON.stringify(uncast(value, a(r("Weapon"))), null, 2);
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
  "Weapon": o([
      { json: "name", js: "name", typ: "" },
      { json: "uniqueName", js: "uniqueName", typ: "" },
      { json: "damagePerShot", js: "damagePerShot", typ: a(3.14) },
      { json: "totalDamage", js: "totalDamage", typ: 3.14 },
      { json: "description", js: "description", typ: "" },
      { json: "criticalChance", js: "criticalChance", typ: 3.14 },
      { json: "criticalMultiplier", js: "criticalMultiplier", typ: 3.14 },
      { json: "procChance", js: "procChance", typ: 3.14 },
      { json: "fireRate", js: "fireRate", typ: 3.14 },
      { json: "masteryReq", js: "masteryReq", typ: 0 },
      { json: "productCategory", js: "productCategory", typ: r("ProductCategory") },
      { json: "slot", js: "slot", typ: 0 },
      { json: "accuracy", js: "accuracy", typ: u(undefined, 3.14) },
      { json: "omegaAttenuation", js: "omegaAttenuation", typ: 3.14 },
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
      { json: "type", js: "type", typ: "" },
      { json: "imageName", js: "imageName", typ: "" },
      { json: "category", js: "category", typ: r("Category") },
      { json: "tradable", js: "tradable", typ: true },
      { json: "patchlogs", js: "patchlogs", typ: u(undefined, a(r("Patchlog"))) },
      { json: "ammo", js: "ammo", typ: u(undefined, 0) },
      { json: "areaAttack", js: "areaAttack", typ: u(undefined, r("AreaAttack")) },
      { json: "damage", js: "damage", typ: u(undefined, u(0, "")) },
      { json: "damageTypes", js: "damageTypes", typ: u(undefined, m(3.14)) },
      { json: "flight", js: "flight", typ: u(undefined, u(r("FlightEnum"), 0)) },
      { json: "marketCost", js: "marketCost", typ: u(undefined, u(0, "")) },
      { json: "polarities", js: "polarities", typ: u(undefined, a(r("Polarity"))) },
      { json: "projectile", js: "projectile", typ: u(undefined, r("Projectile")) },
      { json: "tags", js: "tags", typ: u(undefined, a("")) },
      { json: "wikiaThumbnail", js: "wikiaThumbnail", typ: u(undefined, "") },
      { json: "wikiaUrl", js: "wikiaUrl", typ: u(undefined, "") },
      { json: "disposition", js: "disposition", typ: u(undefined, 0) },
      { json: "secondary", js: "secondary", typ: u(undefined, r("Secondary")) },
      { json: "sentinel", js: "sentinel", typ: u(undefined, true) },
      { json: "secondaryArea", js: "secondaryArea", typ: u(undefined, r("SecondaryArea")) },
      { json: "releaseDate", js: "releaseDate", typ: u(undefined, "") },
      { json: "vaultDate", js: "vaultDate", typ: u(undefined, "") },
      { json: "estimatedVaultDate", js: "estimatedVaultDate", typ: u(undefined, "") },
      { json: "vaulted", js: "vaulted", typ: u(undefined, true) },
      { json: "statusChance", js: "statusChance", typ: u(undefined, 3.14) },
      { json: "chargeTime", js: "chargeTime", typ: u(undefined, 3.14) },
      { json: "itemCount", js: "itemCount", typ: u(undefined, 0) },
      { json: "parents", js: "parents", typ: u(undefined, a("")) },
      { json: "maxLevelCap", js: "maxLevelCap", typ: u(undefined, 0) },
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
  ], false),
  "AreaAttack": o([
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "falloff", js: "falloff", typ: u(undefined, r("Falloff")) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "crit_chance", js: "crit_chance", typ: u(undefined, 0) },
      { json: "crit_mult", js: "crit_mult", typ: u(undefined, 3.14) },
      { json: "status_chance", js: "status_chance", typ: u(undefined, 3.14) },
      { json: "heat", js: "heat", typ: u(undefined, 3.14) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "shot_type", js: "shot_type", typ: u(undefined, "") },
      { json: "shot_speed", js: "shot_speed", typ: u(undefined, u(0, null)) },
      { json: "impact", js: "impact", typ: u(undefined, 3.14) },
      { json: "speed", js: "speed", typ: u(undefined, 3.14) },
      { json: "pellet", js: "pellet", typ: u(undefined, r("Pellet")) },
      { json: "blast", js: "blast", typ: u(undefined, 0) },
      { json: "viral", js: "viral", typ: u(undefined, 0) },
      { json: "radiation", js: "radiation", typ: u(undefined, 0) },
      { json: "cold", js: "cold", typ: u(undefined, 0) },
      { json: "toxin", js: "toxin", typ: u(undefined, 0) },
      { json: "magnetic", js: "magnetic", typ: u(undefined, 0) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "corrosive", js: "corrosive", typ: u(undefined, 0) },
      { json: "gas", js: "gas", typ: u(undefined, 0) },
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
  "Component": o([
      { json: "uniqueName", js: "uniqueName", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "itemCount", js: "itemCount", typ: 0 },
      { json: "imageName", js: "imageName", typ: "" },
      { json: "tradable", js: "tradable", typ: true },
      { json: "drops", js: "drops", typ: u(undefined, a(r("Drop"))) },
      { json: "primeSellingPrice", js: "primeSellingPrice", typ: u(undefined, 0) },
      { json: "ducats", js: "ducats", typ: u(undefined, 0) },
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
      { json: "flight", js: "flight", typ: u(undefined, 0) },
      { json: "marketCost", js: "marketCost", typ: u(undefined, 0) },
      { json: "polarities", js: "polarities", typ: u(undefined, a(r("Polarity"))) },
      { json: "projectile", js: "projectile", typ: u(undefined, r("Projectile")) },
      { json: "statusChance", js: "statusChance", typ: u(undefined, 3.14) },
      { json: "tags", js: "tags", typ: u(undefined, a(r("Tag"))) },
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "wikiaThumbnail", js: "wikiaThumbnail", typ: u(undefined, "") },
      { json: "wikiaUrl", js: "wikiaUrl", typ: u(undefined, "") },
      { json: "disposition", js: "disposition", typ: u(undefined, 0) },
      { json: "excludeFromCodex", js: "excludeFromCodex", typ: u(undefined, true) },
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
      { json: "rarity", js: "rarity", typ: r("Rarity") },
      { json: "chance", js: "chance", typ: 3.14 },
      { json: "rotation", js: "rotation", typ: u(undefined, r("Rotation")) },
  ], false),
  "Patchlog": o([
      { json: "name", js: "name", typ: "" },
      { json: "date", js: "date", typ: Date },
      { json: "url", js: "url", typ: "" },
      { json: "imgUrl", js: "imgUrl", typ: u(undefined, "") },
      { json: "additions", js: "additions", typ: "" },
      { json: "changes", js: "changes", typ: "" },
      { json: "fixes", js: "fixes", typ: "" },
  ], false),
  "Secondary": o([
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "speed", js: "speed", typ: u(undefined, 3.14) },
      { json: "crit_chance", js: "crit_chance", typ: u(undefined, 3.14) },
      { json: "crit_mult", js: "crit_mult", typ: u(undefined, 3.14) },
      { json: "status_chance", js: "status_chance", typ: u(undefined, 3.14) },
      { json: "shot_type", js: "shot_type", typ: u(undefined, "") },
      { json: "impact", js: "impact", typ: u(undefined, 3.14) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "charge_time", js: "charge_time", typ: u(undefined, 3.14) },
      { json: "radiation", js: "radiation", typ: u(undefined, 0) },
      { json: "shot_speed", js: "shot_speed", typ: u(undefined, u(0, null)) },
      { json: "pellet", js: "pellet", typ: u(undefined, r("Pellet")) },
      { json: "falloff", js: "falloff", typ: u(undefined, r("Falloff")) },
      { json: "blast", js: "blast", typ: u(undefined, 0) },
      { json: "heat", js: "heat", typ: u(undefined, 0) },
      { json: "toxin", js: "toxin", typ: u(undefined, 0) },
      { json: "cold", js: "cold", typ: u(undefined, 0) },
      { json: "corrosive", js: "corrosive", typ: u(undefined, 0) },
  ], false),
  "SecondaryArea": o([
      { json: "name", js: "name", typ: "" },
      { json: "status_chance", js: "status_chance", typ: u(undefined, 3.14) },
      { json: "radius", js: "radius", typ: u(undefined, 0) },
      { json: "radiation", js: "radiation", typ: u(undefined, 0) },
      { json: "damage", js: "damage", typ: u(undefined, "") },
      { json: "blast", js: "blast", typ: u(undefined, 0) },
      { json: "impact", js: "impact", typ: u(undefined, 0) },
      { json: "slash", js: "slash", typ: u(undefined, 3.14) },
      { json: "puncture", js: "puncture", typ: u(undefined, 3.14) },
      { json: "heat", js: "heat", typ: u(undefined, 0) },
      { json: "pellet", js: "pellet", typ: u(undefined, r("Pellet")) },
      { json: "magnetic", js: "magnetic", typ: u(undefined, 0) },
      { json: "toxin", js: "toxin", typ: u(undefined, 0) },
      { json: "electricity", js: "electricity", typ: u(undefined, 0) },
      { json: "cold", js: "cold", typ: u(undefined, 0) },
      { json: "viral", js: "viral", typ: u(undefined, 0) },
      { json: "duration", js: "duration", typ: u(undefined, 0) },
      { json: "speed", js: "speed", typ: u(undefined, 3.14) },
  ], false),
  "Category": [
      "Melee",
      "Primary",
      "Secondary",
  ],
  "Rarity": [
      "Common",
      "Legendary",
      "Rare",
      "Uncommon",
  ],
  "Rotation": [
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
      "Key Rewards",
      "Mission Rewards",
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
  "Polarity": [
      "Madurai",
      "Naramon",
      "Umbra",
      "Unairu",
      "Vazarin",
      "Zenurik",
  ],
  "ProductCategory": [
      "LongGuns",
      "Melee",
      "Pistols",
      "SentinelWeapons",
      "SpaceGuns",
  ],
  "Projectile": [
      "Discharge",
      "?",
      "Hitscan",
      "Projectile",
      "Thrown",
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
};
