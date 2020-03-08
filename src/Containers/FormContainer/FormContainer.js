import React, { useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { setSearchJokeAction } from '../../Reducers/joke.reducer';
import searchJokeRequest from '../../Requests/searchJoke.request';
import InputComponent from '../../Components/InputComponent/InputComponent';
import './FormContainer.scss';

const FormContainer = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const enteredText = e.target.value;
    setValue(enteredText);
  };

  const searchJoke = (e) => {
    e.preventDefault();
    searchJokeRequest(value)
      .then((response) => {
        dispatch(setSearchJokeAction(response));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
  return (
    <>
      <form onSubmit={searchJoke} className="FormContainer">
        <InputComponent
          type="text"
          name="joke"
          id="joke"
          label="Search Joke"
          value={value}
          onChange={handleChange}
        />
        <InputComponent type="submit" value="Search" id="submit" />
      </form>
    </>
  );
};

export default FormContainer;
