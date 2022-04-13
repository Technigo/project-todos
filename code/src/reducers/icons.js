import { createSlice } from "@reduxjs/toolkit";

// Import Icons
import {
  chatgray,
  clipboardgray,
  gamegray,
  giftgray,
  outdoorsgray,
  pingray,
  shoppinggray,
  timegray,
  travelgray,
  tvgray,
  viewgray,
  weathergray,
  chatwhite,
  clipboardwhite,
  gamewhite,
  giftwhite,
  outdoorswhite,
  pinwhite,
  shoppingwhite,
  timewhite,
  travelwhite,
  tvwhite,
  viewwhite,
  weatherwhite,
} from "../assets/icons";

const iconArray = [
  [0, "chat", chatgray, chatwhite],
  [1, "clipboard", clipboardgray, clipboardwhite],
  [2, "game", gamegray, gamewhite],
  [3, "gift", giftgray, giftwhite],
  [4, "outdoors", outdoorsgray, outdoorswhite],
  [5, "pin", pingray, pinwhite],
  [6, "shopping", shoppinggray, shoppingwhite],
  [7, "time", timegray, timewhite],
  [8, "travel", travelgray, travelwhite],
  [9, "tv", tvgray, tvwhite],
  [10, "view", viewgray, viewwhite],
  [11, "weather", weathergray, weatherwhite],
];

export const icons = createSlice({
  name: "icons",
  initialState: {
    icons: iconArray,
  },
});
