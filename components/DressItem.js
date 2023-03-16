import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const DressItem = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 7,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ width: 60, color: "gray", fontSize: 15 }}>
            GH {item.price}
          </Text>
        </View>
        <Pressable style={{ width: 80 }}>
          <Text
            style={{
              borderColor: "gray",
              borderWidth: 0.8,
              marginVertical: 10,
              color: "#088f8f",
              textAlign: "center",
              padding: 5,
              borderRadius: 6,
              fontWeight: "bold",
              flexSize: 17,
            }}
          >
            Add
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});