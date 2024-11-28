import Intersection from "../modules/intersection";
import Union from "../modules/union";
import Normalize from "../modules/normalize";
import Validator from "../modules/validator";

export function asText(from:string, to:string) {
  const normalized = Normalize(from, to);
  const intersection = Intersection(normalized.from, normalized.to);
  const union = Union(normalized.from, normalized.to, intersection);
  return Validator(intersection.length,union.length) ? intersection.length/union.length : 0;
}

export function asArray(from:string[], to:string[]) {
  const intersection = Intersection(from, to);
  const union = Union(from, to, intersection);
  return Validator(intersection.length,union.length) ? intersection.length/union.length : 0;
}
