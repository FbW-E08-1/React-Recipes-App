import { useState, useRef } from 'react';
import useFetch from '../hooks/useFetch';

import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [search, setSearch] = useState('pasta');
  const inputRef = useRef();

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const data = useFetch(URL);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <MyContext.Provider value={{ setSearch, data }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
