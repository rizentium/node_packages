import {hashColor} from "../modules/hash-color";
import {padEnd} from "../modules/padding";

/**
 * Get color based on string input
 * @param str
 */
export function rgb(str:string) {
  return `#${padEnd(hashColor(str),6)}`;
}
/**
 * Get font color based on background
 * @param str
 */
export function fontColor(str:string) {
  str = str.replace("#",'');
  const r = parseInt(str.slice(0,2), 16);
  const g = parseInt(str.slice(2,4), 16);
  const b = parseInt(str.slice(4,6), 16);
  return (r*0.299 + g*0.587 + b*0.114) < 186 ? '#f8f8f8' : '#000000';
}
