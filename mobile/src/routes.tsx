import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Details from "./containers/Details";
import Incidents from "./containers/Incidents";

import Incident from "./models/Incident";

export type RootStackParamList = {
  Details: { incident: Incident };
  Incidents: {};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Incidents"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Incidents" component={Incidents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
