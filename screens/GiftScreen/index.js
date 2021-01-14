import React from 'react';
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  ScrollableTab,
} from 'native-base';

import { GIFT_TAB } from '../../constants/GiftConstants';

import TabContent from './TabContent';

const Gift = () => (
  <Container>
    <Tabs renderTabBar={() => <ScrollableTab />}>
      {GIFT_TAB.map(tab => (
        <Tab // this line makes a warning due to https://github.com/GeekyAnts/NativeBase/issues/3358 this issue
          key={tab.id}
          heading={
            <TabHeading>
              <Icon name={tab.icon} />
              <Text>{tab.name}</Text>
            </TabHeading>
          }
        >
          <TabContent id={tab.id} />
        </Tab>
      ))}
    </Tabs>
  </Container>
);

export default Gift;
