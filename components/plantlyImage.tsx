import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
  image?: string;
};
export function PlantlyImage({ size, image }: Props) {
  const { width } = useWindowDimensions();
  const imageSize = size ?? Math.min(width / 1.5, 400);
  return (
    <Image
      source={image ? { uri: image } : require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize, borderRadius: 6 }}
    />
  );
}
