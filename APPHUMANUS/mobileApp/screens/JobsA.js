import React from "react";
import{View, SafeAreaView, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from "react-native";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
const JobsA = () =>{
return(
<SafeAreaView style={styles.Heading}>
<View style={styles.Navn}>
<View style={styles.NavB}><Button title= 'Active Jobs'/></View>
<View style={styles.NavB}> <Button title={<Link to="/pastjobs">Past Jobs</Link>} /></View>
</View>
<View>
<Text style={styles.HeadOne}>Active Jobs</Text>
</View>
<ScrollView>
<View style={styles.Contain}> 
<Text>Role 1</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 2</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 3</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 4</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 5</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 6</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 7</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 8</Text><View style={styles.Box}><Button title='Mark as done'/></View>
</View>
<View style={styles.Contain}> 
<Text>Role 9</Text><View style={styles.Box}><Button title='Mark as done'/></View>
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
Back: {
backgroundColor: 'lightblue'
},

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
marginLeft: 20,
marginTop: 15,
borderRadius: 5,
Height: '25%',
padding: 50,
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

export default JobsA;