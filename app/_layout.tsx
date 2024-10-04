import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Entypo name="leaf" size={24} />,
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
