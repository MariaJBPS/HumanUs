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
import Select from "react-select";
//add a checkbox instaed of scroll
import Multiselect from "multiselect-react-dropdown";
const ProfilePage = ({ navigation }) => {
  /* const pressHandler = () => {
    navigation.navigate("Sign Up"); // should match the screen names in App.js
  }; */

  /* const Picture = () => (
    <Avatar.Image size={24} source={require("./assets/demoPhoto.jpg")} />
  );
  export default Picture */

  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.topView}></View>
        {/* <ScrollView style={styles.bottomView}> */}

        <View style={{ flexDirection: "row" }}>
          {/* <Avatar.Image
            size={200}
            source={require("../assets/demoPhoto.jpg")}
          /> */}
        </View>
        <View style={{ flexDirection: "row" }}>
          <Title style={styles.heading}>Your Profile</Title>
        </View>
        <View style={styles.textInput}>
          <Icon name="map-marker-radius" size={30} />
          <text>London,England</text>
        </View>
        <View style={styles.textInput}>
          <Icon name="phone" size={30} />
          <text>07799430788</text>
        </View>
        <View style={styles.textInput}>
          <Icon name="email" size={30} />
          <text>patari@kent.ac.uk</text>
        </View>
        <View style={styles.textInput}>
          <Icon name="check" size={30} />
          <text>Select the categories you are interested in below</text>
        </View>
        <View>
          <CheckBox
            style={styles.textInput}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text>Animals</Text>
        </View>
        <View>
          <CheckBox
            style={styles.textInput}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text>People</Text>
        </View>
        <View>
          <CheckBox
            style={styles.textInput}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text>Literring</Text>
        </View>
        <View>
          <CheckBox
            style={styles.textInput}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text>Enivroment</Text>
        </View>
  
      </View>
      {/* </ScrollView> */}
      {/* <View>
    <Multiselect style={styles.textInput}
        isObject={false}
        onKeyPressFn={function noRefCheck() { } }
        onRemove={function noRefCheck() { } }
        onSearch={function noRefCheck() { } }
        onSelect={function noRefCheck() { } }
        options={[
          'Animals',
          'Elderly',
          'Enivroment',
          'Littering',
          'People'
        ]} />
    </View> */}
      {/* <Multiselect style={styles.textInput}
        isObject={false}
        onKeyPressFn={function noRefCheck() { } }
        onRemove={function noRefCheck() { } }
        onSearch={function noRefCheck() { } }
        onSelect={function noRefCheck() { } }
        options={[
          'Animals',
          'Elderly',
          'Enivroment',
          'Littering',
          'People'
        ]} /> */}
        
    </>
    
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
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
    width: "90%",
    borderWidth: 2,
    borderColor: "black", // borderColor: "white"
    height: 52,
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
    fontSize: 16,
    alignItems: "left",
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
});

export default ProfilePage;
