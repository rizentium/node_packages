export function hashColor(str:string) {
  let data = {r:0, g:0, b:0};

  str.split('').forEach((char,index) => {
    data.r += char.charCodeAt(0);
    data.g += char.charCodeAt(0);
    data.b += char.charCodeAt(0);
  });
  const rgb = `${data.r.toString(16)}${data.g.toString(16)}${data.b.toString(16)}`;

  return rgb.slice(0,6);
}
