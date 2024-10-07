import { View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/plantlyButton";
export default function OnboardingScreen() {
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();
  const handlePress = () => {
    toggleHadOnboarded();
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <PlantlyButton title="Finish onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
