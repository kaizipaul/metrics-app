import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { FaCircle } from 'react-icons/fa';
import {
  Card, CardBody, CardFooter, Heading, Badge, Stack, Image, Divider, Button, ButtonGroup, Skeleton,
} from '@chakra-ui/react';
import { InfoOutlineIcon, PlusSquareIcon } from '@chakra-ui/icons';
// import loadingpic from '../logo/loading.gif';

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
    <Card maxW="sm">
      <CardBody>
        <Skeleton isLoaded={!loading} borderRadius="lg">
          <Image
            borderRadius="lg"
            src={char.image}
            alt="character"
          />
        </Skeleton>
        <Stack mt="6" spacing="3">
          <Heading size="md">
            {char.name}
            {char.status === 'Alive' && (
            <Badge colorScheme="green" ml="2">Alive</Badge>
            )}
            {char.status === 'unknown' && (
            <Badge ml="2">Unknown</Badge>
            )}
            {char.status === 'Dead' && (
            <Badge colorScheme="red" ml="2">Dead</Badge>
            )}
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="4">
          <Button variant="solid" colorScheme="green">
            <PlusSquareIcon mr="2" />
            Favorites
          </Button>
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
