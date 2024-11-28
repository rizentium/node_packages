export default function Normalize(from:string = '', to:string = '') {
  const normalizedFrom = from.toLowerCase().replace(/[^\w\s]/gi,'').split(' ').filter(data => data != '');
  const normalizedTo = to.toLowerCase().replace(/[^\w\s]/gi,'').split(' ').filter(data => data != '');

  return {
    'from': normalizedFrom,
    'to': normalizedTo
  };
}
