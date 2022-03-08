import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
//test
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <View>
      <ScrollView style={styles.mainFeed}>
        <Text style={styles.Header}>All Jobs</Text>
        <View style={styles.Contain}>
          {/* images not showing */}
          <Image style={styles.Image} source={require("./Images/aTest.jpeg")} />
          {/* link test works */}
          <Button title={<Link to="/animals">Animals</Link>} />
        </View>
        <View style={styles.Contain}>
          <Image
            style={styles.Image}
            source={require("./Images/download.jpeg")}
          />
          <Button title="Childcare" />
        </View>
        <View style={styles.Contain}>
          <Image style={styles.Image} source={require("./Images/Elder.jpeg")} />
          <Button title="Elderly" />
        </View>
        <View style={styles.Contain}>
          <Image
            style={styles.Image}
            source={require("./Images/Remote1.jpg")}
          />
          <Button title="Remote" />
        </View>

        <View style={styles.Contain}>
          <Button title="Advocacy" />
        </View>
        <View style={styles.Contain}>
          <Button title="Arts" />
        </View>
        <View style={styles.Contain}>
          <Button title="Disabilities" />
        </View>
        <View style={styles.Contain}>
          <Button title="Disaster recovery" />
        </View>
        <View style={styles.Contain}>
          <Button title="Education" />
        </View>
        <View style={styles.Contain}>
          <Button title="Environment" />
        </View>
        <View style={styles.Contain}>
          <Button title="Food Access" />
        </View>
        <View style={styles.Contain}>
          <Button title="Health" />
        </View>
        <View style={styles.Contain}>
          <Button title="Homelessness" />
        </View>
        <View style={styles.Contain}>
          <Button title="LGBQT+" />
        </View>
        <View style={styles.Contain}>
          <Button title="Mental Health" />
        </View>
        <View style={styles.Contain}>
          <Button title="Mentoring" />
        </View>
        <View style={styles.Contain}>
          <Button title="Sports" />
        </View>
        <View style={styles.Contain}>
          <Button title="Sustainability" />
        </View>
        <View style={styles.Contain}>
          <Button title="War Heroes" />
        </View>
        <View style={styles.Contain}>
          <Button title="Women" />
        </View>
        <View style={styles.Contain}>
          <Button title="Youth" />
        </View>
      </ScrollView>

      {/* navbar */}
      <View style={styles.Navigation}>
        <View style={styles.NavButton}>
          <Button title={<Link to="/">Home</Link>}  />
        </View>
        <View style={styles.NavButton}>
          <Button title={<Link to="/pathToBeAdded">Past/Active Jobs</Link>} />
        </View>
        <View style={styles.NavButton}>
          <Button title={<Link to="/profile">Profile</Link>} />
        </View>
      </View>
    </View>
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
    backgroundColor: 'orange',
    Width: '100%',
    height: '25%',
    flexDirection: 'row'
    },
    NavButton:{
    marginLeft: 15, 
    alignItems: 'center'
    },
});
export default Feed;
