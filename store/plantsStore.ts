import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as FileSystem from "expo-file-system";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
  image?: string;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string,
    wateringFrequencyDays: number,
    image?: string,
  ) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: async (
        name: string,
        wateringFrequencyDays: number,
        image?: string,
      ) => {
        const savedImage =
          FileSystem.documentDirectory +
          `${new Date().getTime()}-${image?.split("/").slice(-1)[0]}`;
        if (image) {
          await FileSystem.copyAsync({
            from: image,
            to: savedImage,
          });
        }

        return set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: String(state.nextId),
                name,
                wateringFrequencyDays,
                image: image ? savedImage : undefined,
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId: string) => {
        set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
