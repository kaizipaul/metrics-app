import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCircle } from 'react-icons/fa';
import {
  getDetails, initialState,
} from '../Redux/detailsPage/detailsPage';
import loadingDetails from '../logo/loading.gif';

const detailsPage = () => {
  const details = useSelector((state) => state.details);
  console.log(details);
  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id.id));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {details === initialState ? (
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <img src={loadingDetails} alt="loading" className="w-[60%]" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="w-full py-12">
            <img src={details.image} alt="character" className="object-center object-cover w-full h-[25vh]" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-center text-[1.5rem] font-semibold w-[95%] bg-sky-900 p-2 rounded-sm">
              Character Details
            </h2>
          </div>
          <div className="flex-flex-col gap-2 px-4 py-2 md:px-10">
            <h2>
              Name:
              {' '}
              {details.name}
            </h2>
            <p className="flex justify-start items-center gap-2">
              Status:
              {' '}
              {details.status === 'Alive' && (
              <FaCircle className="text-green-500" />
              )}
              {details.status === 'unknown' && (
              <FaCircle className="text-zinc-500" />
              )}
              {details.status === 'Dead' && (
              <FaCircle className="text-red-500" />
              )}
              {' '}
              {details.status}
            </p>
            <p>
              Species:
              {' '}
              {details.species}
            </p>
            <p>
              Origin:
              {' '}
              {details.origin.name}
            </p>
            <p>
              Last seen at:
              {' '}
              {details.location.name}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-center text-[1.5rem] font-semibold w-[95%] bg-sky-900 p-2 rounded-sm">
              Episodes
            </h2>
          </div>
          <div className="flex-flex-col gap-2 px-4 py-2 md:px-10">
            <p>
              Appearances:
              {' '}
              {details.episode.length}
              {' '}
              Episode(s)
            </p>
          </div>

        </>
      )}
    </div>
  );
};

export default detailsPage;
