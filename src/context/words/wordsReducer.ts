import types from "../types";

const wordsReducer = (state: any, action: any) => {
  switch (action.type) {
    case types.GET_WORDS:
      return {
        ...state,
        words: action.payload,
        loadingPage: false,
      };
    case types.GET_WORD_BY_ID:
      return {
        ...state,
        word: action.payload,
        loadingPage: false,
      };
    case types.GET_PARTS_OF_SPEECH:
      return {
        ...state,
        partsOfSpeech: action.payload,
      };
    case types.GET_SOURCES:
      return {
        ...state,
        sources: action.payload,
      };
    case types.LOADING_PAGE:
      return {
        ...state,
        loadingPage: true,
      };
    default:
      return state;
  }
};

export default wordsReducer;
