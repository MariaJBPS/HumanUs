import React from "react";
import {Text, View, Button, StyleSheet, Image, ScrollView} from "react-native";


const Feed = () =>{
return(
<View>
<ScrollView style={styles.mainFeed}>
<Text style={styles.Header}>All Jobs</Text>
<View style={styles.Contain}>
{/* <Image style={styles.Image} source={require('./Images/aTest.jpeg')}/> */}
<Button title='Animals'/>
</View>
<View style={styles.Contain}>
{/* <Image style={styles.Image} source={require('./Images/download.jpeg')}/> */}
<Button title='Childcare'/>
</View>
<View style={styles.Contain}>
{/* <Image style={styles.Image} source={require('./Images/Elder.jpeg')}/> */}
<Button title='Elderly'/>
</View>
<View style={styles.Contain}>
{/* <Image style={styles.Image} source={require('./Images/Remote1.jpg')}/> */}
<Button title='Remote'/>
</View>

<View style={styles.Contain}>
<Button title='Advocacy'/>
</View>
<View style={styles.Contain}>
<Button title='Arts'/>
</View>
<View style={styles.Contain}>
<Button title='Disabilities'/>
</View>
<View style={styles.Contain}>
<Button title='Disaster recovery'/>
</View>
<View style={styles.Contain}>
<Button title='Education'/>
</View>
<View style={styles.Contain}>
<Button title='Environment'/>
</View>
<View style={styles.Contain}>
<Button title='Food Access'/>
</View>
<View style={styles.Contain}>
<Button title='Health'/>
</View>
<View style={styles.Contain}>
<Button title='Homelessness'/>
</View>
<View style={styles.Contain}>
<Button title='LGBQT+'/>
</View>
<View style={styles.Contain}>
<Button title='Mental Health'/>
</View>
<View style={styles.Contain}>
<Button title='Mentoring'/>
</View>
<View style={styles.Contain}>
<Button title='Sports'/>
</View>
<View style={styles.Contain}>
<Button title='Sustainability'/>
</View>
<View style={styles.Contain}>
<Button title='War Heroes'/>
</View>
<View style={styles.Contain}>
<Button title='Women'/>
</View>
<View style={styles.Contain}>
<Button title='Youth'/>
</View>
</ScrollView>
</View> 
)
}

const styles = StyleSheet.create({
mainFeed: {
//flex:1,
//alignItems: "center",
backgroundColor: 'lightblue'
},
Header:{
marginTop: 50,
fontSize: 36,
marginLeft: 20,
fontWeight: "bold"
},
Image: {
marginTop: 5,
marginRight: 10,
marginLeft: 20,
width: "100%"
},
Contain:{
backgroundColor: 'lightgrey',
width: '90%',
alignItems: 'center',
marginLeft: 20,
marginTop: 15,
borderRadius: 5,
Height: '50%'
}
})
export default Feed;