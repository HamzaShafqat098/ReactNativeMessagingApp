import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MessageListScreen from "./screens/MessageListScreen";
import MessageDetails from "./screens/MessageDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="MessageListScreen"
          component={MessageListScreen}
          options={{ title: "Messages" }}
        />
        <Stack.Screen
          name="MessageDetails"
          component={MessageDetails}
          options={{ title: "Message Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;