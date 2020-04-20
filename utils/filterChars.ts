export const filterNChars = (val: string, n: number): string => {
  const sortNChars = val.substring(0, n);
  if (val.length <= sortNChars.length) {
    return val;
  }

  return sortNChars + "...";
};
