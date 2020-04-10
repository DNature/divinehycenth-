export default (arr: any): any => {
  const parser = (str: string): number => {
    return parseInt(str.split(/-|_/).join(""));
  };

  // const max = Math.max(...arrayOfNum);
  const sorted = arr.sort((val: any, val2: any) => {
    return parser(val2.slug) - parser(val.slug);
  });

  return sorted;
};
