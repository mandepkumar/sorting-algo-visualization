import { sleep } from "./utils";

export const startBubbleSort = async (
  arrary: number[],
  setArrary: React.Dispatch<React.SetStateAction<number[]>>
) => {
  for (let len = arrary.length - 1; len > 0; len--) {
    for (let i = 0; i < len; i++) {
      if (arrary[i] > arrary[i + 1]) {
        [arrary[i], arrary[i + 1]] = [arrary[i + 1], arrary[i]];
        await sleep();
        setArrary([...arrary]);
      }
    }
  }
};
