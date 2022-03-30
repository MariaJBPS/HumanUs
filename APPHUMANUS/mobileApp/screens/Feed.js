// THIS IS THE FLATLIST DEMO
import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";

export default class Feed extends React.Component {
  

  state = {
    loading: true,
    jobs: [],
    
  };

  // fetch all jobs title and start date
  async componentDidMount() {
    const url = "http://localhost:5000";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ jobs: data, loading: false });

    const email = window.email;
    console.log(email);
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.jobs.length) {
      return <div>didn't get any jobs</div>;
    }

    return (
      <View>
        <ScrollView style={styles.mainFeed}>
          <Text style={styles.Header}>All Jobs</Text>

          <div>
            {this.state.jobs.map((job) => (
              <View style={styles.Contain}>
                <div>
                  <div>
                    Job Title: {job.title === null ? "<Untitled>" : job.title}
                  </div>
                  <div>Start Date: {job.start_date.slice(0, 10)}</div>
                  <div>
                    Job description:{" "}
                    {job.description === null ? "<Untitled>" : job.description}
                  </div>
                  <div>
                    Charity Email:{" "}
                    {job.charity_email === null
                      ? "<Untitled>"
                      : job.charity_email}
                  </div>
                  <div>
                    Charity Name:{" "}
                    {job.charity_name === null
                      ? "<Untitled>"
                      : job.charity_name}
                  </div>
                  <div>
                    Charity Bio:{" "}
                    {job.charity_bio === null ? "<Untitled>" : job.charity_bio}
                  </div>
                  <div>Start Date: {job.start_date.slice(0, 10)}</div>
                  <div>Post Date: {job.post_date.slice(0, 10)}</div>
                  <div>
                    Duration:{" "}
                    {job.job_duration_days === null
                      ? "<Untitled>"
                      : job.job_duration_days + " day"}
                  </div>
                </div>
                {/* clicking apply adds that application to the database */}
                <Button title={<Link to="/animals">Apply</Link>} />
              </View>
            ))}
          </div>
          <View></View>
        </ScrollView>

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
      </View>
    );
  }
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
    backgroundColor: "lightblue",
    width: "90%",
    //alignItems: "center",
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 20,
    paddingBottom: 70,
    Height: "50%",
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
