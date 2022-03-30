import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";

export default class JobsA extends React.Component {
  state = {
    loading: true,
    activeJobs: [],
  };

  // fetch all jobs title and start date
  async componentDidMount() {
    const url = "http://localhost:5000/upcoming/jobs";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ activeJobs: data, loading: false });
    console.log(data);
  }

  render() {
    // just remove the if statements at the beginning
    return (
      <View>
        <SafeAreaView style={styles.Heading}>
          <View style={styles.Navn}>
            <View style={styles.NavB}>
              <Button title="Active Jobs" />
            </View>
            <View style={styles.NavB}>
              {" "}
              <Button title={<Link to="/pastjobs">Past Jobs</Link>} />
            </View>
          </View>
          <View>
            <Text style={styles.HeadOne}>Active Jobs</Text>
          </View>

          <ScrollView >
            <div>
              {this.state.activeJobs.map((active) => (
                <View style={styles.Contain}>
                  <div>
                    <div>
                      Job Title:{" "}
                      {active.title === null ? "<Untitled>" : active.title}
                    </div>
                    <div>
                      Description :{" "}
                      {active.description === null
                        ? "<Untitled>"
                        : active.description}
                    </div>
                    <div>
                      Start Date :{" "}
                      {active.start_date === null
                        ? "<Untitled>"
                        : active.start_date.slice(0, 10)}
                    </div>
                  </div>
                  <View style={styles.Box}>
                    <Button title="Mark as done" />
                  </View>
                </View>
              ))}
            </div>
          </ScrollView>

          {/* navbar */}
          <View style={styles.NavigationBottom}>
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
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Back: {
    backgroundColor: "lightblue",
  },

  Heading: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  HeadOne: {
    justifyContent: "center",
    fontSize: 30,
    width: "90%",
    backgroundColor: "yellow",
    borderColor: "pink",
    padding: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  Contain: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    width: "90%",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 5,
    Height: "25%",
    padding: 50,
  },
  NavigationBottom: {
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
  Navn: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  NavB: {
    marginLeft: 10,
    marginRight: 10,
  },
});
