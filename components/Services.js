import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Services = () => {
  //services data code
  const services = [
    {
      id: "0",
      image:
        "https://i.pinimg.com/564x/45/28/01/452801094907ec9b0c4d86534c42c5fe.jpg",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image:
        "https://img.freepik.com/premium-vector/iron-clothes-ironing-board-flat-vector-illustration-household-concept-design_313242-422.jpg?w=1480",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image:
        "https://img.freepik.com/free-vector/surface-cleaning-products-pack_23-2148541961.jpg?w=1380&t=st=1679019048~exp=1679019648~hmac=17e60a3d9e92372674e678c0872b791dd9b49ba397734702f589368235e4d0b1",
      name: "Cleaning",
    },
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginBottom: 7,
          marginTop: 5,
        }}
      >
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            key={index}
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 7,
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {service.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
