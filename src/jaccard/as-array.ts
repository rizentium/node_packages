import Intersection from "../modules/intersection";
import Union from "../modules/union";

export default function asArray(from:string[], to:string[]) {
  const intersection = Intersection(from, to);
  const union = Union(from, to, intersection);
  return intersection.length/union.length;
}
