import { configureStore } from "@reduxjs/toolkit";
import criptosSlice from "./states/criptosSlice";
import randomCriptoSlice from "./states/randomCriptoSlice";

export default configureStore({
    reducer: {
      coins: criptosSlice,
      randomCoin: randomCriptoSlice
    }
  });