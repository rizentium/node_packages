import Normalize from "../modules/normalize";
import Intersection from "../modules/intersection";
import Union from "../modules/union";

export default function asText(from:string, to:string) {
  const normalized = Normalize(from, to);
  const intersection = Intersection(normalized.from, normalized.to);
  const union = Union(normalized.from, normalized.to, intersection);
  return intersection.length/union.length;
}
