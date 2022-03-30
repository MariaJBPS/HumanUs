import React, { useState } from "react";
//import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Image,
  CheckBox,

  // Avatar,
  TouchableOpacity,
} from "react-native";
//import { Avatar } from "react-native-elements";
import { Avatar, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import Select from "react-select";
//add a checkbox instaed of scroll
import Multiselect from "multiselect-react-dropdown";
import { Link } from "react-router-dom";
export default class ProfilePage extends React.Component {
  state = {
    loading: true,
    user: [],
  };

  // fetch all jobs title and start date
  async componentDidMount() {
    const url = "http://localhost:5000/emailprofile";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ user: data, loading: false });
    console.log(data);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.mainView}>
          {/* <View style={styles.topView}></View> */}
          {/* <ScrollView style={styles.bottomView}> */}

          <View style={{ flexDirection: "row" }}>
            <Avatar.Image
              size={200}
              source="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Title style={styles.heading}>Your Profile</Title>
          </View>
          <View style={styles.textInput}>
            {/* <Icon name="map-marker-radius" size={30} /> */}
            First Name: {this.state.user.firstName}
          </View>
          <View style={styles.textInput}>
            {/* <Icon name="phone" size={30} /> */}
            Last Name: {this.state.user.lastName}
          </View>
          <View style={styles.textInput}>
            {/* <Icon name="email" size={30} /> */}
            Email: {this.state.user.email}
          </View>
        </View>

        {/* navbar */}
        <View style={styles.Navigation}>
          <View style={styles.NavButton}>
            <TouchableOpacity>
              <Link to="/activejobs" style={styles.buttonTxt}>
                <FoundationIcon name="clipboard" color="white" size={35} />
              </Link>
            </TouchableOpacity>
          </View>
          <View style={styles.NavButton}>
            <TouchableOpacity>
              <Link to="/" style={styles.buttonTxt}>
                <EntypoIcon name="home" color="white" size={35} />
              </Link>
            </TouchableOpacity>
          </View>
          <View style={styles.NavButton}>
            <TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <Link to="/profile" style={styles.buttonTxt}>
                  <IonIcon
                    name="person-circle-outline"
                    color="white"
                    size={35}
                  />
                </Link>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    backgroundColor: "pink",
    padding: 70,
    flex: 1,
    flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    //height: "40%",
    backgroundColor: "#ffb4b4",
  },
  topView: {
    width: "100%",
    height: "10%",
  },
  bottomView: {
    width: "100%",
    height: "90%",
    backgroundColor: "white", //backgroundColor: "black"
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 60,
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black", // borderColor: "white"
    height: 72,
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
    fontSize: 25,
    alignItems: "left",
    fontWeight: "bold",
  },
  signInButton: {
    width: "90%",
    //color: "white",
    height: 52,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    // 'Sign In' button text
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpButton: {
    width: "90%",
    height: 52,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialsView: {
    flex: 2,
    height: 50,
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  facebookView: {
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 2,
    marginLeft: 140,
    marginRight: 10,
  },
  googleView: {
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 2,
    marginRight: 130,
    marginLeft: 20,
  },
  orLine: {
    height: 1,
    width: 137,
    backgroundColor: "#bfbfbf",
  },
  Navigation: {
    backgroundColor: "black",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    position: "fixed",
    top: "91.5%",
  },
  NavButton: {
    color: "white",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    padding: 20,
  },
});
