import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
 

const HomeScreen = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnables();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnables = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app the use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      //   console.log(response);
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <SafeAreaView style={{backgroundColor:"#f0f0f0",flex:1}}>
      {/* Location and Profile */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/af/fb/bd/affbbd330c65a59aad2a4cd45cfe1663.jpg",
            }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth:0.8,
          borderColor:"#c0c0c0",
          borderRadius:7
        }}
      >
        <TextInput placeholder="search items or more"></TextInput>
        <Feather name="search" size={24} color="#fd5c63" />
      </View>

      {/* Image Carousel */}
      <Carousel/>

      {/* Services Component */}
      <Services/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
