import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const WelcomPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <Image
        source={require("../assets/png/welcome.png")}
        style={styles.image}
      />
      <Text style={styles.title}>
        Créer un <Text style={styles.span}>compte </Text>
        pour commencer
      </Text>
      <Text style={styles.text}>
      En continuant, j'accepte les conditions d’utilisation et la politique de confidentialité.
       
      </Text>
      <TouchableOpacity style={styles.button}>
      <Icon name="google" size={20}  />
      <Text style={styles.buttonText}>Continuer avec Google</Text>
    </TouchableOpacity>

    <View style={styles.Group}>
    <TouchableOpacity style={styles.btn}>
      <EmailIcon name="mail" size={20}  />
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Icon name="facebook" size={20}  color={'blue'} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Icon name="apple" size={20}  color={'#6A6A6A'} />
    </TouchableOpacity>

    </View>
    <View style={styles.box}>

    <Text style={styles.subText}>
    Vous avez déjà un compte ?
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Schualde')}>
        <Text style={styles.TextC}>Se connecter</Text>
      </TouchableOpacity>
    </View>
    
    </SafeAreaView>
  );
};

export default WelcomPage;

const styles = StyleSheet.create({
    box:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginTop:40
    },
    TextC:{
        fontSize:16,
        fontWeight:'500',   
        color:'#5200FF',
        textDecorationLine:'underline'
    },
    subText:{
        fontSize:16,
        fontWeight:'500',
        color:'#000'
    },
    container:{
        paddingTop:50,
        paddingRight:20,
        flex:1,
        display:"flex",
        alignItems:"center"

    },
    Group:{
        display:'flex',
        flexDirection:"row",
        gap:20,
        marginTop:20
    },
    btn:{
        height:56,
        width:56,
        backgroundColor:'#F1ECE9',
        borderRadius:8,
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        marginTop:70,
        marginBottom:80
    },
  title: {
    color: "#000",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "center",
  },
  span: {
    color: "#5200FF",
  },
  text:{
    color: "#8F8A87",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    width:333,
    marginTop:19,

  },
  button:{
    height:56,
    width:330,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"center",
    gap:10,
    borderRadius:8,
    borderWidth:1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    marginTop:72
  },
  buttonText:{
    fontSize:16,
    fontWeight:"500"
  }
});
