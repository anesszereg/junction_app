import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuIcon from "react-native-vector-icons/MaterialIcons";
import Inbox from "react-native-vector-icons/AntDesign";
import SearchIcon from "react-native-vector-icons/MaterialIcons";
import Trending from "react-native-vector-icons/Feather";
import { Avatar } from "react-native-paper";

const TeacherPage = () => {


    const [Active, setActive] = useState(true)
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.navbar}>
        <View style={styles.menu}>
          <MenuIcon name="menu" color="#fff" size={30} />
        </View>
        <View style={styles.avatar}>
          <SearchIcon name="search" color="#5200FF" size={30} />

          <Avatar.Image
            size={44}
            source={require("../assets/png/avatar.png")}
          />
        </View>
      </View>
      <Text style={styles.title}>You have scanned a user ID </Text>
      <Text style={styles.text}>Check you re student Activity details </Text>

      <View style={styles.group}>
        <Image source={require("../assets/png/AvatarTeacher.png")} />
        <Text style={styles.UserName}>Lalout Mehdi</Text>
        <Text style={styles.Email}>Laloutme@gmail.com </Text>

        <View style={styles.switch}>
        <TouchableOpacity onPress={()=> setActive(true)}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 58,
              width: 84,
              backgroundColor: Active ? "#5200FF": '#F5F5F5',
              borderRadius: 18,
            }}
          >
            <Inbox name="inbox" size={30} color={ Active ?"#fff":'#000'} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive(false)}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 58,
                width: 84,
                backgroundColor: Active ? "#F5F5F5":'#5200ff',
                borderRadius: 18,
              }}
            >
              <Trending name="trending-up" size={30} color={Active?"#000":'#fff'} />
            </View>
          </TouchableOpacity>
          </View>
          {
            Active?
            <View>
                <Text style={styles.title}>
                Latest Checkpoints :
                </Text>
                <View style={{gap:10 , marginTop:20}}>
                <Image source={require("../assets/png/checkpoint1.png")}/>
                <Image source={require("../assets/png/checkpoint2.png")} />

                </View>
            </View>
            :
            <View>
            <Text style={styles.title}>
            Students general states
            </Text>
            <View style={{gap:10 , marginTop:20}}>
            <Image source={require("../assets/png/statique.png")}/>


            </View>
        </View>
          }
      </View>
    </SafeAreaView>
  );
};

export default TeacherPage;

const styles = StyleSheet.create({
  UserName: {
    fontSize: 24,
    fontWeight: "500",
    color: "#5200FF",
    marginTop: 5,
    textAlign: "center",
  },
  switch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap:20,
    marginTop:15
  },
  Email: {
    fontSize: 20,
    fontWeight: "400",
    color: "#5C5B68",
    marginTop: 4,
    textAlign: "center",
  },
  group: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5C5B68",
    marginTop: 11,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginTop: 25,
  },
  Container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 80,
    backgroundColor: "#fff",
    flex: 1,
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
