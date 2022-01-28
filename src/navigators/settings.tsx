import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type SettingsStackParamList = {
  Settings: undefined;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SettingsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
      <Button title="Button" />
      <Text>Settings</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack: FC = () => {
  return (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default SettingsStack;
