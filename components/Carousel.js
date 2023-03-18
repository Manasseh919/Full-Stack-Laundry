import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://i.pinimg.com/474x/10/01/aa/1001aad041db05203c5830c5af49e159.jpg",
    "https://i.pinimg.com/474x/28/de/cd/28decd7ea20834acde29b31fa8a421ec.jpg",
    "https://i.pinimg.com/564x/16/ea/4b/16ea4bcbaa7fdb4d5df61a49faf7d33c.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor={"#13274f"}
        inactiveDotColor={"#90A4AE"}
        ImageComponentStyle={{ borderRadius: 6, width: "94%" }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
