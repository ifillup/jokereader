import React, { useEffect, useState } from 'react';
import Joke from './Joke';

const JokeList = () => {
  const [jokeList, setJokeList] = useState([]);
  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = async () => {
    const res = await fetch('https://api.icndb.com/jokes/random/20');
    const data = await res.json();
    setJokeList(data.value);
  };
  return (
    <div>
      {jokeList.map(joke => (
        <Joke key={joke.id} joke={joke.joke} />
      ))}
    </div>
  );
};

export default JokeList;
