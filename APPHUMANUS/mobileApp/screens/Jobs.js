import React from "react";
import{View, ScrollView, SafeAreaView, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
const Jobs = () =>{
return(
<SafeAreaView style={styles.Heading}>
<View style={styles.Navn}>
<View style={styles.NavB}><Button title={<Link to="/activejobs">Active Jobs</Link>} /></View>
<View style={styles.Nav}><Button title= 'Past Jobs'/></View>
</View>
<Text style={styles.HeadOne}>Past Jobs</Text>
<ScrollView>
<View style={styles.Contain}> 
<Text>Role 1</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 1</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 2</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 3</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 4</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 5</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 6</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 7</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 8</Text><Text style={styles.Box}>Completed</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 9</Text><Text style={styles.Box}>Completed</Text>
</View>
</ScrollView>
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
              <View style={{flexDirection:'column'}}>
            <Link to="/profile" style={styles.buttonTxt}>
              <IonIcon name="person-circle-outline" color="white" size={35} />
            </Link>
            </View>
          </TouchableOpacity>
        </View>
      </View>
</SafeAreaView>
)
}

const styles = StyleSheet.create({
Heading: {
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'lightblue'
},
HeadOne: {
justifyContent: 'center',
fontSize: 30,
width: '90%',
backgroundColor: 'yellow',
borderColor: 'pink',
padding: 20,
marginLeft: 10,
marginTop: 10
},
Contain: {
flexDirection: 'row',
backgroundColor: 'lightgrey',
width: '90%',
alignItems: 'center',
justifyContent: 'center',
marginLeft: 20,
marginTop: 15,
borderRadius: 5,
Height: '25%',
padding: 50,
},
Box: {
backgroundColor: 'lightgreen',
alignItems: 'center',
marginLeft: 50,
padding: 20,
},
NavigationBottom: {
    backgroundColor: "black",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    position: 'fixed',
    top:"91.5%",
  },
  NavButton: {
    color: "white",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    padding: 20,
  },
Navn: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
},
NavB: {
    marginLeft: 10,
    marginRight: 10,

}
})

export default Jobs;