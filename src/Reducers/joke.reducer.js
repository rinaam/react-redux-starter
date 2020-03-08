export const SET_RANDOM_JOKE_ACTION = 'SET_RANDOM_JOKE_ACTION';
export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';
export const SET_RANDOM_JOKE_FROM_CATEGORY_ACTION = 'SET_RANDOM_JOKE_FROM_CATEGORY_ACTION';
export const SET_SEARCH_JOKE = 'SET_SEARCH_JOKE';

export const initialState = {
  randomJoke: '',
  categoriesList: [],
  randomJokeFromCategory: '',
  searchedJoke: '',
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE_ACTION: {
      const {
        payload: { value: randomJoke },
      } = action;
      return {
        ...state,
        randomJoke,
      };
    }
    case SET_CATEGORIES_LIST: {
      const { payload: categoriesList } = action;

      return {
        ...state,
        categoriesList,
      };
    }
    case SET_RANDOM_JOKE_FROM_CATEGORY_ACTION: {
      const {
        payload: { value: randomJokeFromCategory },
      } = action;
      return {
        ...state,
        randomJokeFromCategory,
      };
    }

    case SET_SEARCH_JOKE: {
      const {
        payload: { result },
      } = action;

      const searchedJoke = result.map((joke) => ({ value: joke.value, id: joke.id }));

      return {
        ...state,
        searchedJoke,
      };
    }

    default:
      return state;
  }
};

export const setRandomJokeAction = (payload) => ({
  type: SET_RANDOM_JOKE_ACTION,
  payload,
});

export const setCategoriesListAction = (payload) => ({
  type: SET_CATEGORIES_LIST,
  payload,
});

export const setRandomJokeFromCategoryAction = (payload) => ({
  type: SET_RANDOM_JOKE_FROM_CATEGORY_ACTION,
  payload,
});
export const setSearchJokeAction = (payload) => ({
  type: SET_SEARCH_JOKE,
  payload,
});

export default jokeReducer;
