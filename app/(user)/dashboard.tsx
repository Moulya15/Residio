import React,  { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import Ionicons from "@expo/vector-icons/Ionicons";

const userName = SecureStore.getItemAsync("name");
const flatNumber = SecureStore.getItemAsync("flatNumber");
const role = SecureStore.getItemAsync("role");
const apartmentName = SecureStore.getItemAsync("apartmentName");
// const flatNumber = SecureStore.getItemAsync("flatNumber");
// const flatNumber = SecureStore.getItemAsync("flatNumber");



const Dashboard = () => {

    const [user, setUser] = useState({       
        city: "Bangalore, Karnataka",
        notifications: 3,
    });

    const [status, setStatus] = useState({

    open: 2,

    inProgress: 2,

    resolved: 15,
});

/*

const fetchComplaintStatus = async () => {

    try{

        const response = await axios.get(
            "http://YOUR_IP:8080/dashboard/status"
        );

        setStatus(response.data);

    }

    catch(error){

        console.log(error);

    }

}

useEffect(()=>{

    fetchComplaintStatus();

},[]);

*/

    return (
        <ScrollView
    showsVerticalScrollIndicator={false}
    style={styles.container}
>
<View style={styles.header}>

    <View>

        <Text style={styles.welcome}>
            Welcome back,
        </Text>

        <Text style={styles.name}>
            {userName}
        </Text>

    </View>

    <TouchableOpacity style={styles.notification}>

        <Ionicons
            name="notifications-outline"
            size={28}
            color="#111"
        />

        <View style={styles.badge}>

            <Text style={styles.badgeText}>
                {user.notifications}
            </Text>

        </View>

    </TouchableOpacity>

</View>
<View style={styles.card}>

    <View style={styles.cardHeader}>

        <View style={styles.homeCircle}>

            <Ionicons
                name="home"
                size={22}
                color="#111"
            />

        </View>

        <View style={styles.roleContainer}>

            <Text style={styles.role}>
                {role}
            </Text>

        </View>

    </View>

    <Text style={styles.flat}>
        Flat {flatNumber}
    </Text>

    <Text style={styles.apartment}>
        {apartmentName}
    </Text>

    <View style={styles.locationRow}>

        <Ionicons
            name="location-outline"
            size={16}
            color="#999"
        />

        <Text style={styles.location}>
            {user.city}
        </Text>

    </View>

</View>

<Text style={styles.heading}>
    Quick Actions
</Text>

<View style={styles.actionContainer}>

    {/* Contact */}

    <TouchableOpacity style={styles.contactCard}>

        <View style={styles.iconCircle}>

            <Ionicons
                name="call"
                size={28}
                color="#111"
            />

        </View>

        <Text style={styles.actionTitle}>
            Contact{"\n"}Management
        </Text>

        <Text style={styles.actionSubtitle}>
            Reach apartment{"\n"}office
        </Text>

    </TouchableOpacity>

    {/* SOS */}

    <TouchableOpacity style={styles.sosCard}>

        <View style={styles.sosIcon}>

            <Ionicons
                name="warning"
                size={26}
                color="#111"
            />

        </View>

        <Text style={styles.actionTitle}>
            Emergency{"\n"}SOS
        </Text>

        <Text style={styles.actionSubtitle}>
            Tap for quick help
        </Text>

    </TouchableOpacity>

</View>


<Text style={styles.heading}>

    Complaint Status

</Text>
<View style={styles.statusContainer}>

    {/* Open */}

    <View style={styles.statusCard}>

        <View style={styles.statusIcon}>

            <Ionicons
                name="ellipse-outline"
                size={24}
                color="#111"
            />

        </View>

        <Text style={styles.statusNumber}>

            {status.open}

        </Text>

        <Text style={styles.statusTitle}>

            Open

        </Text>

    </View>

    {/* In Progress */}

    <View style={styles.statusCard}>

        <View style={styles.statusIcon}>

            <Ionicons
                name="time-outline"
                size={24}
                color="#111"
            />

        </View>

        <Text style={styles.statusNumber}>

            {status.inProgress}

        </Text>

        <Text style={styles.statusTitle}>

            In Progress

        </Text>

    </View>

    {/* Resolved */}

    <View style={styles.statusCard}>

        <View style={styles.statusIcon}>

            <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="#111"
            />

        </View>

        <Text style={styles.statusNumber}>

            {status.resolved}

        </Text>

        <Text style={styles.statusTitle}>

            Resolved

        </Text>

    </View>

</View>
</ScrollView>
);
}

export default Dashboard;

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#F8F8F8",
    paddingHorizontal:25,
},
header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:55,
    marginBottom:30,
},
welcome:{
    fontSize:22,
    color:"#333",
},
name:{
    fontSize:35,
    fontWeight:"900",
    color:"#111",
},
notification:{
    width:45,
    height:45,
    backgroundColor:"#FFF",
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    shadowColor:"#000",
    shadowOpacity:0.08,
    shadowRadius:15,
    shadowOffset:{
        width:0,
        height:6,
    },
    elevation:5,
},
badge:{
    position:"absolute",
    top:8,
    right:7,
    width:18,
    height:18,
    borderRadius:11,
    backgroundColor:"#F8C96A",
    justifyContent:"center",
    alignItems:"center",
},
badgeText:{
    fontSize:10,
    fontWeight:"700",
},
card:{
    backgroundColor:"#111",
    borderRadius:28,
    padding:28,
    marginBottom:35,
},
cardHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
},
homeCircle:{
    width:52,
    height:52,
    borderRadius:26,
    backgroundColor:"#F8C96A",
    justifyContent:"center",
    alignItems:"center",
},
roleContainer:{
    backgroundColor:"#4A402E",
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:25,
},
role:{
    color:"#F8C96A",
    fontWeight:"700",
    fontSize:13,
},
flat:{
    color:"#F8C96A",
    fontSize:30,
    fontWeight:"900",
    marginTop:30,
},
apartment:{
    color:"#FFF",
    fontSize:22,
    fontWeight:"700",
    marginTop:0,
},
locationRow:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:8,
},
location:{
    color:"#AAA",
    marginLeft:6,
    fontSize:14,
},
heading:{

    fontSize:30,

    fontWeight:"800",

    color:"#111",

    marginBottom:20,

},

actionContainer:{

    flexDirection:"row",

    justifyContent:"space-between",

    marginBottom:35,

},

contactCard:{

    width:"47%",

    backgroundColor:"#FFF",

    borderRadius:24,

    padding:22,

    shadowColor:"#000",

    shadowOpacity:0.08,

    shadowRadius:15,

    shadowOffset:{
        width:0,
        height:5
    },

    elevation:5,

},

sosCard:{

    width:"47%",

    backgroundColor:"#FFF6E4",

    borderRadius:24,

    padding:22,

    shadowColor:"#000",

    shadowOpacity:0.08,

    shadowRadius:15,

    shadowOffset:{
        width:0,
        height:5
    },

    elevation:5,

},

iconCircle:{

    width:58,

    height:58,

    borderRadius:29,

    backgroundColor:"#FFF4DD",

    justifyContent:"center",

    alignItems:"center",

    marginBottom:18,

},

sosIcon:{

    width:58,

    height:58,

    borderRadius:29,

    backgroundColor:"#FFD47C",

    justifyContent:"center",

    alignItems:"center",

    marginBottom:18,

},

actionTitle:{

    fontSize:17,

    fontWeight:"800",

    color:"#111",

    lineHeight:24,

},

actionSubtitle:{

    fontSize:14,

    color:"#666",

    marginTop:8,

    lineHeight:20,

},
statusContainer:{

    flexDirection:"row",

    justifyContent:"space-between",

    marginBottom:35,

},

statusCard:{

    width:"31%",

    backgroundColor:"#FFF",

    borderRadius:22,

    paddingVertical:20,

    justifyContent:"center",

    alignItems:"center",

    shadowColor:"#000",

    shadowOpacity:0.08,

    shadowRadius:12,

    shadowOffset:{

        width:0,

        height:5,

    },

    elevation:5,

},

statusIcon:{

    width:45,

    height:45,

    borderRadius:22.5,

    backgroundColor:"#F7F7F7",

    justifyContent:"center",

    alignItems:"center",

},

statusNumber:{

    fontSize:34,

    fontWeight:"900",

    color:"#111",

    marginTop:12,

},

statusTitle:{

    fontSize:14,

    color:"#666",

    marginTop:5,

    textAlign:"center",

}
});