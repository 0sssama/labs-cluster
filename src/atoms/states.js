import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const darkLogoState = atom({
  key: "darkLogoState",
  default: true
})
