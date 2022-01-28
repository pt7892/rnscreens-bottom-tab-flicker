import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './home';
import SettingsStack from './settings';

type TabNavigatorParamList = {
  HomeStack: undefined;
  SettingsStack: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabStack: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{ unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
