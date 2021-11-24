import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import db from '../config.js'
import firebase from 'firebase';
import { render } from 'react-dom';
import { RFValue } from "react-native-responsive-fontsize";

export default class Welcome extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
          .then(() => {
            this.props.navigation.navigate("AddTodo");
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
      };

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return alert("User added successsfully")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return alert(errorMessage)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.TextInput}>
                    <Text style={styles.title}>To-Do</Text>
                </View>

                <View style={styles.TextInput}>
                    <TextInput
                        style={styles.loginBox}
                        placeholder="example@booksanta.com"
                        placeholderTextColor="#ffff"
                        keyboardType='email-address'
                        onChangeText={(text)=>{
                            this.setState({
                                emailId:text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor="#ffff"
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                    />
                    </View>

                <View style={{ flex: 0.5, alignItems: "center" }}>
                    <TouchableOpacity
                        style={[styles.button,{marginBottom:20, marginTop:20}]}
                        onPress={()=>{
                            this.userLogin(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                            this.userSignUp(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>             
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6fc0b8"
      },
      loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10)
      },
      button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20)
      },
      label: {
        fontSize: RFValue(13),
        color: "#717D7E",
        fontWeight: "bold",
        paddingLeft: RFValue(10),
        marginLeft: RFValue(20)
      },
      TextInput: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
      },
      TextInput: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
      },
  })

