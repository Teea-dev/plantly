import { FlatList, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { usePlantStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/plantCard";
import { PlantlyButton } from "@/components/plantlyButton";
import { useRouter } from "expo-router";

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
      renderItem={({ item }) => <PlantCard plant={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },

  contentContainer: {
    padding: 12,
  },
});
