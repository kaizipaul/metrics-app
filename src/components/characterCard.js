import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import loadingpic from '../logo/loading.gif';

const characterCard = (props) => {
  const [loading, setLoading] = useState(false);
  const { char } = props;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-2 rounded-md bg-sky-600/60">
      <div className="w-full md:w-[30%]">
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-2 py-4">
            <img src={loadingpic} alt="loading" className="w-[60%]" />
            <p>Loading...</p>
          </div>
        ) : (<img src={char.image} alt="character" className="w-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none" />)}
      </div>
      <div className="flex flex-col items-start p-2">
        <h3 className="font-semibold text-[1.5rem]">{char.name}</h3>
        <p className="flex gap-2 items-center justify-center">
          {char.status === 'Alive' && (
          <FaCircle className="text-green-500" />
          )}
          {char.status === 'unknown' && (
          <FaCircle className="text-zinc-500" />
          )}
          {char.status === 'Dead' && (
          <FaCircle className="text-red-500" />
          )}
          {char.status}
          {' '}
          -
          {' '}
          {char.species}
        </p>
        <p className="mt-4">
          Origin:
          {' '}
          {char.origin}
        </p>
        <p className="mt-4">
          Episodes:
          {' '}
          {char.episodes.length}
        </p>
      </div>
    </div>
  );
};

characterCard.propTypes = {
  char: PropTypes.array,
}.isRequired;

export default characterCard;
