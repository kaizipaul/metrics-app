import React from 'react';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';

const TabSection = () => (
  <>
    <Tabs size="md" variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Characters</Tab>
        <Tab>Locations</Tab>
        <Tab>Episodes</Tab>
      </TabList>
      <TabPanels>
        <TabPanel />
        <TabPanel />
      </TabPanels>
    </Tabs>
  </>
);

export default TabSection;
