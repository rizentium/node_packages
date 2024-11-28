export function padEnd(str:string, long:number) {
  for (let x = 0;x < long-str.length;x++) {
    str += str.charAt(x)
  }
  return str
}
