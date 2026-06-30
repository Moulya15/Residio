// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useState } from "react";
// import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
// import Fontisto from '@expo/vector-icons/Fontisto';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { Picker } from '@react-native-picker/picker';
// import { router } from "expo-router";
// import axios from "axios";
// import { baseURL } from "../_layout";
// import * as SecureStore from "expo-secure-store";

// const login = () => {
//     const Logo = require('../../assets/images/Logo.png');
//     const [mobile, setMobile] = useState("");
//     const [pw, setpw] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [role, setRole] = useState('');

//     const handleLogin = () => {
//         console.log("Login button clicked");
//         if (!mobile) {
//             Alert.alert("Error", "Please enter mobile number");
//             return;
//         }
//         if (mobile.length != 10) {
//             Alert.alert("Error", "Mobile number must be 10 digits");
//             return;
//         }
//         if (!pw) {
//             Alert.alert("Error", "Please enter password");
//             return;
//         }

//         axios.post(`${baseURL}/UserRegistration`,{
//             mobile,
//             password:pw,
//             role
//         })

//         .then( async (response)=>{
//              console.log("login clicked");
//         Alert.alert("Success", "Login successful");
//         console.log("Login Response: ", response.data);
//         await SecureStore.setItemAsync("name", response.data.name);
//         await SecureStore.setItemAsync("mobile", mobile);
//         await SecureStore.setItemAsync("userId", response.data.id.toString());
//         await SecureStore.setItemAsync("role", role);
//         console.log("RESPONSE DATA:", response.data);

//         if (role === "Admin") {
//         //   router.replace("/(owner)/dashboard");
//         }
//         else {
//           router.replace("/(user)/dashboard");
//         }
//         })
//         .catch((error) => {
//         console.log("INSIDE CATCH");
//         console.log(error.response.data);
//         Alert.alert("ERROR", error.response.data.message);
//       });
//     }

//     return (
//         <>
//             <View style={styles.logoContainer}>
//                 <Image
//                     source={Logo}
//                     style={styles.logo} />
//             </View>
//             <View style={styles.MainContainer}>
//                 <View>
//                     <Text style={styles.heading}>Sign In</Text>
//                 </View>
//                 {/* Inputs */}
//                 <View style={styles.inputContainer}>
//                     <Ionicons name="call" size={20} color="#f6f3eb" style={styles.icon} />
//                     <TextInput
//                         placeholder="Enter Mobile"
//                         style={styles.input1}
//                         value={mobile}
//                         onChangeText={setMobile}
//                         maxLength={10}
//                         keyboardType="numeric"
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     {/* Left Icon */}
//                     <Fontisto name="locked" size={20} color="#f6f3eb" style={styles.icon} />

//                     {/* Input */}
//                     <TextInput
//                         placeholder="Enter Password"
//                         style={styles.input1}
//                         value={pw}
//                         onChangeText={setpw}
//                         secureTextEntry={!showPassword}
//                     />

//                     {/* Right Eye Icon */}
//                     <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                         <MaterialIcons
//                             name={showPassword ? "visibility" : "visibility-off"}
//                             size={22}
//                             color="#f6f3eb"
//                         />
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.pickerContainer}>
//                     <Picker
//                         selectedValue={role}
//                         onValueChange={(itemValue) => setRole(itemValue)}
//                     >
//                         <Picker.Item label="Owner" value="owner" />
//                         <Picker.Item label="Resident" value="resident" />
//                     </Picker>
//                 </View>

//                 <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                     <Text style={styles.buttonText}>LOGIN</Text>
//                 </TouchableOpacity>

//                   <TouchableOpacity onPress={() => router.replace("/(tabs)/Register")}>
//           <Text style={styles.outerText}>
//             Don't you have an account?

//           </Text>
//         </TouchableOpacity>

//             </View>
//         </>
//     )
// }
// export default login;

// const styles = StyleSheet.create({
//      heading: {
//     fontFamily: "Judson_700Bold",
//     fontSize: 30,
//     marginBottom: 40,
//     color: "#f6f3eb",
//     marginTop:-100

//   },
//     text: {
//         fontSize: 20,
//         marginTop: 100,
//         color: "white",


//     },
//     MainContainer: {

//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#dccbd2",
//         marginBottom: 10,

//         height: 600,
//     },
//     outerContainer: {
//         justifyContent: "center",
//         backgroundColor: "#30262a",
//         height: 600,
//         borderRadius: 60,
//     },
//     button: {
//         backgroundColor: "#f6f3eb",
//         paddingHorizontal: 16,
//         paddingVertical: 8,
//         marginTop: 20,
//         borderRadius: 8,
//         marginLeft: 20
//     },
//     buttonText: {
//         fontFamily: "Judson_700Bold",
//         color: "#B80047",
//         fontSize: 18,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#f6f3eb',
//         borderRadius: 12,
//         paddingHorizontal: 10,
//         height: 50,
//         width: 220,
//         margin: 10,
//         gap: 10,
//         marginBottom:20
//     },
//     icon: {
//         marginRight: 8,
//     },
//     input1: {
//         color: "#ffffff",
//         fontFamily: "Judson_700Bold",
//         fontSize: 16,
//     },
//     logo: {
//         alignSelf: "center",
//         width: 250,
//         height: 200,
//         marginTop: 100,
//     },
//     logoContainer: {
//         alignItems: "center",
//         justifyContent: "center",

//     },
//     pickerContainer: {
//         paddingHorizontal: 10,
//         paddingBottom: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 12,
//         height: 50,
//         width: 220,
//         margin: 10
//     },
//     outerText: {
//         color: "#f6f3eb",
//         marginTop: 20,
//         textDecorationLine: "underline",
//         fontFamily: "Judson_400Regular",
//         margin: 20
//     },

// })

import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { baseURL } from "../_layout";

export default function LoginScreen() {
  const [role, setRole] = useState("RESIDENT");
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile]=useState('');
  const [password,setPassword] = useState('');

  const router = useRouter();

   const handleLogin = () => {

    console.log("Login button clicked");
    if (!mobile) {
      Alert.alert("Error", "Please enter mobile number");
      return;
    }
    if (mobile.length != 10) {
      Alert.alert("Error", "Mobile number must be 10 digits");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Please enter password");
      return;
    }

      
    axios
      .post(`${baseURL}/Users/UserLogin`, {
        mobile,
        password,
        role
      })
      .then(async (response) => {
        console.log("login clicked");
        Alert.alert("Success", "Login successful");
        console.log("Login Response: ", response.data);
        await SecureStore.setItemAsync("name", response.data.name);
        await SecureStore.setItemAsync("mobile", mobile);
        await SecureStore.setItemAsync("userId", response.data.id.toString());
        await SecureStore.setItemAsync("role", role);
        await SecureStore.setItemAsync("email", response.data.email);
         await SecureStore.setItemAsync("apartmentName", response.data.apartmentName);
          await SecureStore.setItemAsync("flatNumber", response.data.flatNumber.toString());

        console.log("RESPONSE DATA:", response.data);
        if (role === "OWNER") {
          router.push("/(owner)/dashboard");
        }
        else {
          router.push("/(user)/dashboard");
        }   
      })
      .catch((error) => {
        console.log("INSIDE CATCH");
        console.log(error);
        if (axios.isAxiosError(error)) {
    Alert.alert(
      "Error",
      error.response?.data?.message || "Login failed"
    );
  } else {
    Alert.alert("Error", String(error));
  }
      }); 
    }
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={30} color="#111" />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>
        Sign in to manage your home
      </Text>

      {/* Account Type */}
      <Text style={styles.label}>Choose Account Type</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleCard,
            role === "RESIDENT" && styles.role,
          ]}
          onPress={() => setRole("RESIDENT")}
        >
          <Ionicons name="home-outline" size={24} color="#111" />
          <Text style={styles.roleText}>Resident</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleCard,
            role === "OWNER" && styles.role,
          ]}
          onPress={() => setRole("OWNER")}
        >
          <Feather name="key" size={22} color="#111" />
          <Text style={styles.roleText}>Owner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleCard,
            role === "ADMIN" && styles.role,
          ]}
          onPress={() => setRole("ADMIN")}
        >
          <Ionicons name="shield-checkmark-outline" size={22} color="#111" />
          <Text style={styles.roleText}>Admin</Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Number */}
      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.inputContainer}>
        <Feather name="phone" size={20} color="#666" />
        <TextInput
          placeholder="10-digit mobile number"
          placeholderTextColor="#999"
          value={mobile}
          onChangeText={setMobile}
          style={styles.input}
          maxLength={10}
          keyboardType="phone-pad"
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={22} color="#666" />

        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>
          Forgot password?
        </Text>
      </TouchableOpacity>

     

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?
        </Text>

<View>
        <TouchableOpacity  onPress={() => router.push("/(tabs)/Register")}>
          <Text style={styles.createText}
         >
            Create Account
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 28,
  },

  backButton: {
    marginTop: 55,
    marginBottom: 15,
    width: 40,
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#111",
  },

  subtitle: {
    fontSize: 18,
    color: "#444",
    marginTop: 8,
    marginBottom: 40,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
    marginTop: 10,
  },

  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  roleCard: {
    width: "31%",
    height: 90,
    backgroundColor: "#FFF",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  role: {
    backgroundColor: "#FFF3DC",
    borderColor: "#111",
  },

  roleText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
  },

  inputContainer: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
    marginBottom: 22,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },

  forgotText: {
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 28,
  },

  demoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },

  demoText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },

  loginButton: {
    height: 50,
    backgroundColor: "#111",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },

  loginText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  footer: {
    alignItems:"center",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 0,
  },

  footerText: {
    fontSize: 16,
    color: "#444",
  },

  createText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
});