import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HomeStackParamList = {
  Home: undefined;
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
