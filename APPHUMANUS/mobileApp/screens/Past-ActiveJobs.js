import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    ScrollView
  } from "react-native";

import { Link } from "react-router-dom";

const PastActiveJobs = () =>
{
    return (
        <ScrollView>
            <Text style={styles.Header}>Your Past/Active Jobs</Text>
            {/* <View style={styles.Contain}></View> */}

            {/* navbar */}
      <View style={styles.Navigation}>
        <View style={styles.NavButton}>
          <Button title={<Link to="/">Home</Link>}  />
        </View>
        <View style={styles.NavButton}>
          <Button title={<Link to="/past-activejobs">Past/Active Jobs</Link>} />
        </View>
        <View style={styles.NavButton}>
          <Button title={<Link to="/profile" style={styles.buttonTxt}>
              <Text style={styles.NavButton} >Profile</Text>
              </Link>} />
        </View>
      </View>
    </ScrollView>
    );
}

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
      backgroundColor: 'black',
      Width: '100%',
      //height: '25%',
      flexDirection: 'row',
      },
      NavButton:{
      color:"#fff",
      marginLeft: 15, 
      alignItems: 'center',
      fontWeight: 'bold',
      paddingLeft : 10,
      paddingRight : 10
      },
  });

export default PastActiveJobs;