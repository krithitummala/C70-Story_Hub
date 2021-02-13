import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import AppHeader from '../assets/AppHeader'

export default class WriteStoryScreen extends React.Component {
    render() {
      return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
           <AppHeader/>
           <View>
           <TextInput
            style={styles.inputBox}
            placeholder={"title"}/> 

           <TextInput
            style={styles.inputBox}
            placeholder={"title"}/> 

           <TextInput
            placeholder={"Write your story"}
            multiline
            style={[styles.inputBox, { height: 200 }]}/>

           <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
            </View> 
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2F3337",
      alignItems: "center",
  
      height: "100%",
    },
    inputBox: {
      marginTop: 20,
      width: "80%",
      height: 50,
      textAlign: "center",
      borderWidth: 0.5,
      backgroundColor: "white",
      borderRadius: 10,
    },
    button: {
      marginTop: 20,
      width: "50%",
      height: 50,
      textAlign: "center",
      borderWidth: 0.5,
      backgroundColor: "grey",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "white",
    },
  });
