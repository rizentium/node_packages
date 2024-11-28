export default function Union(from:string[] = [], to:string[] = [], intersection:string[] = []) {
  const initialize = [...from, ...to];
  let exceptWords = intersection;

  initialize.filter((data,index) => {
    const i = exceptWords.indexOf(data);
    if (i > -1) {
      delete exceptWords[index];
      delete initialize[index];
    }
  });
  return initialize.filter(data => data != null);
}
