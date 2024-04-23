import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const petState = atom({
  key: "petState",
  default: {
    name: "",
    age: "",
    image: "",
    type: "",
    gender: "",
    breed: "",
    location: "",
    injured: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: "userState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
