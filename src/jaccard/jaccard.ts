import Intersection from "../modules/intersection";
import Union from "../modules/union";
import Normalize from "../modules/normalize";

export function asText(from:string, to:string) {
  const normalized = Normalize(from, to);
  const intersection = Intersection(normalized.from, normalized.to);
  const union = Union(normalized.from, normalized.to, intersection);
  return intersection.length/union.length;
}

export function asArray(from:string[], to:string[]) {
  const intersection = Intersection(from, to);
  const union = Union(from, to, intersection);
  return intersection.length/union.length;
}
