import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCircle } from 'react-icons/fa';
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import {
  getDetails,
} from '../Redux/detailsPage/detailsPage';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { content, status } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  console.log(content);
  console.log(status);

  if (status === 'loading') {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
      </div>
    );
  }

  return (
    <>
      <div className="w-full py-12">
        <img src={content.image} alt="character" className="object-center object-cover w-full h-[25vh]" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-center text-[1.5rem] font-semibold w-[95%] bg-sky-900 p-2 rounded-sm">
          Character content
        </h2>
      </div>
      <div className="flex-flex-col gap-2 px-4 py-2 md:px-10">
        <h2>
          Name:
          {' '}
          {content.name}
        </h2>
        <p className="flex justify-start items-center gap-2">
          Status:
          {' '}
          {content.status === 'Alive' && (
          <FaCircle className="text-green-500" />
          )}
          {content.status === 'unknown' && (
          <FaCircle className="text-zinc-500" />
          )}
          {content.status === 'Dead' && (
          <FaCircle className="text-red-500" />
          )}
          {' '}
          {content.status}
        </p>
        <p>
          Species:
          {' '}
          {content.species}
        </p>
        <p>
          Origin:
          {' '}
          {content.origin.name}
        </p>
        <p>
          Last seen at:
          {' '}
          {content.location.name}
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
          {content.episode.length}
          {' '}
          Episode(s)
        </p>
      </div>

    </>
  );
};

export default DetailsPage;
