import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MenuIcon from "react-native-vector-icons/MaterialIcons";
import SearchIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-paper";
import CalanderIcon from "react-native-vector-icons/FontAwesome5";

const Schualde = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.navbar}>
        <View style={styles.menu}>
          <MenuIcon name="menu" color="#fff" size={30} onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.avatar}>
          <SearchIcon name="search" color="#5200FF" size={30} />

          <Avatar.Image
            size={44}
            source={require("../assets/png/avatar.png")}
          />
        </View>
      </View>
      <Text style={styles.text}>Happy to see you again </Text>
      <Text style={styles.title}>MEHDI LALOUT</Text>

      <View style={{
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        marginTop:36
      }}>
        <View style={styles.calander}>
          <CalanderIcon name="calendar" color="#fff" size={30} />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>Day</Text>
          <Text style={styles.time}>week</Text>
          <Text style={styles.time}>month</Text>
          <Text style={styles.time}>year</Text>
        </View>
      </View>
        <Image source={require("../assets/png/schualed.png")} style={{marginTop:50}}/>
    </SafeAreaView>
  );
};

export default Schualde;

const styles = StyleSheet.create({
  timeContainer: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    width: 266,
    height: 47,
    gap:23,
    backgroundColor:'#F5F5F5',
    borderRadius:50
  },
  time: {

    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  calander: {
    width: 64,
    height: 47,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5200FF",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  button: {
    width: 342,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#5200FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 240,
  },
  UserName: {
    fontSize: 24,
    fontWeight: "500",
    color: "#5200FF",
    marginTop: 5,
    textAlign: "center",
  },
  Email: {
    fontSize: 20,
    fontWeight: "400",
    color: "#5C5B68",
    marginTop: 4,
    textAlign: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginTop: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    color: "#000",
    marginTop: 12,
  },
  Container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 80,
    backgroundColor:'#fff',
    flex:1
  },
  menu: {
    height: 45,
    width: 45,
    borderRadius: 8,
    backgroundColor: "#5200FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
});
