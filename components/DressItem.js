import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreamentQuantity,
  increamentQuantity,
} from "../CartReducer";
import { decreamentQty, increamentQty } from "../ProductReducer";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item)); //cart
    dispatch(increamentQty(item)); //product
  };

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

        {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Pressable
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#bebebe",
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignContent: "center",
              }}
              onPress={() => {
                dispatch(decreamentQuantity(item));
                dispatch(decreamentQty(item));
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 19,
                  color: "#088f8f",
                  paddingHorizontal: 8,
                  fontWeight: "600",
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#bebebe",
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignContent: "center",
              }}
              onPress={() => {
                dispatch(increamentQuantity(item));
                dispatch(increamentQty(item));
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable onPress={addItemToCart} style={{ width: 80 }}>
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
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
