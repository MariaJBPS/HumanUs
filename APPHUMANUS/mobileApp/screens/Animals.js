import React from "react";
import {Text, View, Button, StyleSheet, ScrollView} from "react-native";


const Animals = () =>{
return(
<View style={styles.Main}>
<ScrollView>
<Text style={styles.Title}>Animal Jobs</Text>
<View style={styles.Contain}> 
<Text>Role 1</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 1</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 2</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 3</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 4</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 5</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 6</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 7</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 8</Text>
</View>
<View style={styles.Contain}> 
<Text>Role 9</Text>
</View>
</ScrollView>
</View> 
)
}

const styles = StyleSheet.create({
Main: {
backgroundColor: 'lightblue'
},
Title: {
marginTop: 50,
fontSize: 40,
marginLeft: 20,
fontWeight: "bold"
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
}
})
export default Animals;