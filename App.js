import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomPage from "./src/Pages/WelcomPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Pages/Home";
import Schualde from "./src/Pages/schualde";
import TeacherPage from "./src/Pages/TeacherPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomPage}
          options={{
            headerShown: false, // Hide the title/header for the "Home" screen
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, // Hide the title/header for the "Home" screen
          }}
        />
        <Stack.Screen
          name="Schualde"
          component={Schualde}
          options={{
            headerShown: false, // Hide the title/header for the "Home" screen
          }}
        />
        <Stack.Screen
          name="Teacher"
          component={TeacherPage}
          options={{
            headerShown: false, // Hide the title/header for the "Home" screen
          }}
        />
        {/* Add more screens for navigation */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingTop: 50,
  },
});
