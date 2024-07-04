import { MASTER_NUMBERS } from "../data/destiny-number";

export const getSingleDigitSum = (digits, type) => {
  if (type === "final_sum" && MASTER_NUMBERS.includes(+digits)) {
    return +digits;
  }

  const currTotal = digits.split("").reduce((sum, digit) => sum + +digit, 0);
  return currTotal < 10 ? +currTotal : getSingleDigitSum(currTotal + "");
};
