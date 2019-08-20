export default function Intersection(from:string = '', to:string = '') {
  const normalizedFrom = from.toLowerCase().replace(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g,'');
  const normalizedTo = to.toLowerCase().replace(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g,'');

  return {
    normalizedFrom,
    normalizedTo
  };
}
