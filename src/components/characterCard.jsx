import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FaCircle } from 'react-icons/fa';
import {
  Card, CardBody, CardFooter, Heading, Badge, Stack, Image, Divider, Button, ButtonGroup, Skeleton,
} from '@chakra-ui/react';
import { InfoOutlineIcon, PlusSquareIcon, CheckCircleIcon } from '@chakra-ui/icons';
// actions from details reducer
import { addToCollection, removeFromCollection } from '../Redux/homePage/homePage';
// import loadingpic from '../logo/loading.gif';

const characterCard = (props) => {
  const [loading, setLoading] = useState(false);
  const { char } = props;
  const dispatch = useDispatch();

  const addBtn = (id) => {
    dispatch(addToCollection(id));
  };

  const removeBtn = (id) => {
    dispatch(removeFromCollection(id));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Card maxW="sm" borderRadius="lg" variant="outline">
      <CardBody>
        <Skeleton isLoaded={!loading} borderRadius="lg">
          <Image
            borderRadius="lg"
            src={char.image}
            alt="character"
          />
        </Skeleton>
        <Stack mt="6" spacing="3" direction="row">
          <Heading size="md">
            <p>
              {char.name}
            </p>
          </Heading>
          <p>
            {char.status === 'Alive' && (
              <Badge colorScheme="green" ml="2">Alive</Badge>
            )}
            {char.status === 'unknown' && (
              <Badge ml="2">Unknown</Badge>
            )}
            {char.status === 'Dead' && (
              <Badge colorScheme="red" ml="2">Dead</Badge>
            )}
          </p>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <ButtonGroup spacing="16">
          {char.added && (
          <Button variant="solid" colorScheme="green" onClick={() => removeBtn(char.id)}>
            <CheckCircleIcon mr="2" />
            Added
          </Button>
          )}
          {!char.added && (
            <Button variant="solid" colorScheme="green" onClick={() => addBtn(char.id)}>
              <PlusSquareIcon mr="2" />
              Add
            </Button>
          )}
          <Button colorScheme="green" variant="ghost">
            <InfoOutlineIcon mr="2" />
            <Link to={`/details/${char.id}`} key={char.id}>
              Details
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

characterCard.propTypes = {
  char: PropTypes.array,
}.isRequired;

export default characterCard;
