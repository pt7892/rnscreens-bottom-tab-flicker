import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import TabStack from './navigators/tab';

const App: FC = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <TabStack />
      </View>
    </NavigationContainer>
  );
};

export default App;
