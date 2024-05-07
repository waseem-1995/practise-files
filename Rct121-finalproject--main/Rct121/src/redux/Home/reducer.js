import {
  BESTMYNTRA,
  CATEGORIESBAG,
  DEALSARIVAL,
  DEALSDAY,
  GIFTCARDS,
  NEWBRANDS,
  TOPSTYLES,
  TOPPICKS
} from "./actions";
const initState = {
  dealsDay: [],
  bestMyntra: [],
  topPicks: [],
  categoriesBag: [],
  giftCards: [],
  dealsarival: [],
  newbrands: [],
  topinfluncers: []
};

export const Homereducer = (state = initState, action) => {
  switch (action.type) {
    case DEALSDAY: {
      return { ...state, dealsDay: action.payload };
    }
    case BESTMYNTRA: {
      return {
        ...state,
        bestMyntra: action.payload
      };
    }
    case TOPPICKS: {
      return {
        ...state,
        topPicks: action.payload
      };
    }
    case CATEGORIESBAG: {
      return {
        ...state,
        categoriesBag: action.payload
      };
    }
    case GIFTCARDS: {
      return {
        ...state,
        giftCards: action.payload
      };
    }
    case DEALSARIVAL: {
      return {
        ...state,
        dealsarival: action.payload
      };
    }
    case NEWBRANDS: {
      return {
        ...state,
        newbrands: action.payload
      };
    }
    case TOPSTYLES: {
      return {
        ...state,
        topinfluncers: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
