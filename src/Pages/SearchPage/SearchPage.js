import React from 'react';
import { useMappedState } from 'redux-react-hook';
import FormContainer from '../../Containers/FormContainer/FormContainer';
import './SearchPage.scss';

const SearchPage = () => {
  const {
    jokeReducer: { searchedJoke },
  } = useMappedState((state) => state);

  return (
    <div className="SearchPage">
      <FormContainer />
      {Boolean(searchedJoke.length > 0)
      && searchedJoke.map((item) => (
        <p key={item.id}>
          {item.value}
        </p>
      ))}
    </div>
  );
};

export default SearchPage;
