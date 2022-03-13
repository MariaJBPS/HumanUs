import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";

import { Link } from "react-router-dom";

const PastActiveJobs = () => {
  return (
    <ScrollView>
      <Text style={styles.Header}>Your Past/Active Jobs</Text>
      {/* <View style={styles.Contain}></View> */}

      {/* navbar */}
      <View style={styles.Navigation}>
        <View style={styles.NavButton}>
          <TouchableOpacity>
            <Link to="/past-activejobs" style={styles.buttonTxt}>
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
              <View style={{flexDirection:'column'}}>
            <Link to="/profile" style={styles.buttonTxt}>
              <IonIcon name="person-circle-outline" color="white" size={35} />
            </Link>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainFeed: {
    //flex:1,
    //alignItems: "center",
    backgroundColor: "lightblue",
  },
  Header: {
    marginTop: 50,
    fontSize: 36,
    marginLeft: 20,
    fontWeight: "bold",
  },
  Image: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 20,
    width: "100%",
  },
  Contain: {
    backgroundColor: "lightgrey",
    width: "90%",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 5,
    Height: "50%",
  },
  Navigation: {
    backgroundColor: "black",
    Width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  NavButton: {
    color: "white",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    padding: 20,
  },
});

export default PastActiveJobs;
