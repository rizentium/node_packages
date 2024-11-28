export default function Intersection(from:string[], to:string[]) {
  return from.filter(value => -1 !== to.indexOf(value));
}
