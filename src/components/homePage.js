import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharacter, initialState } from '../Redux/homePage/homePage';
import CharacterCard from './characterCard';
import DetailsPage from './detailsPage';
import empty from '../logo/empty.png';
import loading from '../logo/loading.gif';

const homePage = () => {
  const [input, setInput] = useState('');
  const characters = useSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter());
  }, []);

  const refreshPage = () => {
    dispatch(getCharacter());
  };

  const filter = characters.filter((char) => char.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className="px-4 py-12">
      <div className="flex justify-center items-center gap-4 p-2">
        <FaSearch />
        <input type="text" placeholder="search for character" className="rounded-md p-[5px] bg-sky-600 text-sky-200 placeholder:text-sky-200" onChange={(e) => setInput(e.target.value)} />
      </div>

      {characters === initialState ? (
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <img src={loading} alt="loading" className="w-[30%]" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 gap-4 lg:grid-cols-2 gap-4 p-6">
          {filter.map((char) => (
            <Link className="links" to={`/details/${char.id}`} element={<DetailsPage key={char.id} />} key={char.id}>
              <CharacterCard char={char} />
            </Link>
          ))}
          {filter.length === 0
          && (
          <div className="flex flex-col items-center">
            <img src={empty} alt="empty" className="w-[50%]" />
            <p>Oops...try again</p>
            <button type="button" className="mt-4 bg-sky-600 p-2 rounded-md hover:bg-sky-900" onClick={() => refreshPage()}>Refresh</button>
          </div>
          )}
        </div>
      )}
    </div>
  );
};
export default homePage;
