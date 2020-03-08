import React, { useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import {
  setCategoriesListAction,
  setRandomJokeFromCategoryAction,
} from '../../Reducers/joke.reducer';
import getRandomJokeFromCategoryRequest from '../../Requests/getRandomJokeFromCategory.request';
import getCategoriesListRequest from '../../Requests/getCategoriesList.request';
import WrapperComponent from '../../Components/WrapperComponent/WrapperComponent';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const {
    jokeReducer: { categoriesList, randomJokeFromCategory },
  } = useMappedState((state) => state);

  const getRandomJokeFromCategory = (category) => {
    getRandomJokeFromCategoryRequest({ category })
      .then((response) => {
        dispatch(setRandomJokeFromCategoryAction(response));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getCategoriesListRequest()
      .then((response) => {
        dispatch(setCategoriesListAction(response));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <WrapperComponent>
      <div>
        {categoriesList.map((item) => (
          <ButtonComponent
            onClick={() => getRandomJokeFromCategory(item)}
            label={item}
            key={item}
          />
        ))}
        <p>{randomJokeFromCategory}</p>
      </div>
    </WrapperComponent>
  );
};

export default CategoriesPage;
