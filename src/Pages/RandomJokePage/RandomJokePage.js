import React, { useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { setRandomJokeAction } from '../../Reducers/joke.reducer';
import getRandomJokeRequest from '../../Requests/getRandomJoke.request';
import WrapperComponent from '../../Components/WrapperComponent/WrapperComponent';

const RandomJokePage = () => {
  const dispatch = useDispatch();
  const {
    jokeReducer: { randomJoke },
  } = useMappedState((state) => state);

  useEffect(() => {
    getRandomJokeRequest()
      .then((response) => {
        dispatch(setRandomJokeAction(response));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <WrapperComponent>
      <p>{randomJoke}</p>
    </WrapperComponent>
  );
};

export default RandomJokePage;
