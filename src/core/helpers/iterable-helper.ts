export const max = <T>(arr: T[], selector: (obj: T) => number) => {
  let max = 0;

  arr.forEach((obj) => {
    const currentResult = selector(obj);
    if (currentResult > max) max = currentResult;
  });

  return max;
};
