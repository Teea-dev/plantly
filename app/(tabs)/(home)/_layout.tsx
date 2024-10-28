import { theme } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { initial } from "expo-quick-actions";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="plants/[plantId].tsx" options={{ title: "" }} />
    </Stack>
  );
}
