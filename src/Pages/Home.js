import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MenuIcon from "react-native-vector-icons/MaterialIcons";
import SearchIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-paper";

const Home = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.navbar}>
        <View style={styles.menu}>
          <MenuIcon name="menu" color="#fff" size={30} />
        </View>
        <View style={styles.avatar}>
          <SearchIcon name="search" color="#5200FF" size={30} />

          <Avatar.Image size={44} source={require('../assets/png/avatar.png')} />

        </View>
      </View>
      <Text style={styles.title}>Your KeyBox ID</Text>
      <Text style={styles.text}>Share this code with your teacher </Text>


    <View style={{display:'flex', alignItems:'center', marginTop:50}}>

      <Image
        source={require("../assets/png/QrCode.png")}
     
        
        />
        </View>
      <Text style={styles.UserName}>Lalout Mehdi</Text>
      <Text style={styles.Email}>Share this code with your teacher </Text>


      <TouchableOpacity style={styles.button}>
     
      <Text style={styles.buttonText}>Go Back Home</Text>
    </TouchableOpacity>


    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    buttonText:{
        fontSize:20,
        fontWeight:'400',
        color:'#fff',
    },
    button:{
        width:342,
        height:56,
        borderRadius:4, 
        backgroundColor:'#5200FF',
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        marginTop:200


    },
    UserName:{
        fontSize:24,
        fontWeight:'500',
        color:'#5200FF',
        marginTop:5,
        textAlign:'center'
    },
    Email:{
        fontSize:20,
        fontWeight:'400',
        color:'#5C5B68',
        marginTop:4,
        textAlign:'center'
    },
    
    text:{
        fontSize:16,
        fontWeight:'500',
        color:'#5C5B68',
        marginTop:11,

        },
    title:{
        fontSize:24,
        fontWeight:'500',
        color:'#000',
        marginTop:25,
    },
  Container: {
    paddingLeft: 40,
    paddingRight:40,
    paddingTop: 80,
    backgroundColor:'#fff'
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
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  avatar:{
    display:'flex',
    alignItems: "center",
    flexDirection:'row',
    gap:15
  }
});
