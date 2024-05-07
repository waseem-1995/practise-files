export const DEALSDAY = "DEALSDAY";
export const BESTMYNTRA = "BESTMYNTRA";
export const TOPPICKS = "TOPPICKS";
export const CATEGORIESBAG = "CATEGORIESBAG";
export const GIFTCARDS = "GIFTCARDS";
export const DEALSARIVAL = "DEALSARIVAL";
export const NEWBRANDS = "NEWBRANDS";
export const TOPSTYLES = "TOPSTYLES";
export const getdealsArival = (payload) => ({
  type: DEALSARIVAL,
  payload
});
export const getNewBrands = (payload) => ({
  type: NEWBRANDS,
  payload
});
export const getTopInInfluncer = (payload) => ({
  type: TOPSTYLES,
  payload
});
export const getDealsDay = (payload) => ({
  type: DEALSDAY,
  payload
});

export const getBestMyntra = (payload) => ({
  type: BESTMYNTRA,
  payload
});

export const getTopPicks = (payload) => ({
  type: TOPPICKS,
  payload
});

export const getCategoriesData = (payload) => ({
  type: CATEGORIESBAG,
  payload
});
export const getGiftCards = (payload) => ({
  type: GIFTCARDS,
  payload
});
