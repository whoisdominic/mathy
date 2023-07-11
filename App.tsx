import { createDrawerNavigator } from "@react-navigation/drawer";
import { ExerciseScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./src/components";

export type RootStackParamList = {
  root: undefined;
};

const DrawerNav = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator
        initialRouteName="root"
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",
          drawerType: "front",
          drawerStyle: {
            width: "40%",
          },
        }}
        drawerContent={() => <Drawer />}
      >
        <DrawerNav.Screen name="root" component={ExerciseScreen} />
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}
