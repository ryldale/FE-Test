import { SportsItem } from "../types/type";
import { sportsItems } from "../types/type";

export const fetchSportsItems = async (): Promise<SportsItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sportsItems);
    }, 3000);
  });
};
