import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import { getCharacter, initialState } from '../Redux/homePage/homePage';
import CharacterCard from './characterCard';
// import DetailsPage from './detailsPage';
import empty from '../logo/empty.png';
import TabSection from './tabSection';
//  TO DO
//  1. install chakraUI and import tabs (done✅)
//  2. add new actions from homePage.js reducer
//  3. filter through the faved characters
//  4. if fav list is empty, generate 5 random characters which a user can choose from
const homePage = () => {
  const characters = useSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter());
  }, []);

  const refreshPage = () => {
    dispatch(getCharacter());
  };

  return (
    <div className="px-4 py-24">
      <TabSection />
      {characters === initialState ? (
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <Spinner color="green" size="xl" thickness="4px" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 gap-4 lg:grid-cols-2 gap-4 p-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} char={char} />
          ))}
          {characters.length === 0
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
