export const sleep = async (ms: number = 200) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateRandom = (n = 10): number[] => {
  let arr = Array.from({ length: n }, (_, idx) => idx + 1);

  for (let i = 0; i < arr.length; i++) {
    const randomIdx = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
  }
  return arr;
};
