// import { Text, View } from "react-native"

// const Register=()=>{
//     return (
//         <>
//         <View>
//             <Text>Register</Text>
//         </View>
//         </>
//     )
// }
// export default Register;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { router } from "expo-router";
import axios from 'axios';
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { baseURL } from "../_layout";

export default function Register() {
  const [accountType, setAccountType] = useState("RESIDENT");
   const [showPassword, setShowPassword] = useState(false);
   const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
   const [password,setPassword] = useState('');
   const [apartmentName, setApartmentName] = useState('');
  const [flatNumber, setFlatNumber] = useState('');
 

  const handleRegister=()=>{
if (!fullName) return Alert.alert("Error", "Enter name");
    if (!mobile) return Alert.alert("Error", "Enter mobile");
    if (mobile.length !== 10)
      return Alert.alert("Error", "Mobile must be 10 digits");
    if (!password) return Alert.alert("Error", "Enter password");
    if (password.length < 6)
      return Alert.alert("Error", "Password min 6 chars");

    axios
      .post(`${baseURL}/Users/UserRegistration`, {
        name:fullName,
        mobile,
        password,
        email,
        apartmentName,
        flatNumber,
        role:accountType
      })
      .then((res) => {
        Alert.alert("Success", res.data);
        setFullName("");
        setMobile("");
        setPassword("");
        setEmail("");
        setApartmentName("");
        setFlatNumber("");
      })
      .catch((err) => {
        Alert.alert(
          "Error",
          err.response?.data?.message || "Server error"
        );
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
        <Ionicons
          name="chevron-back"
          size={30}
          color="#111"
        />
      </TouchableOpacity>

      {/* Header */}

      <Text style={styles.title}>Create account</Text>

      <Text style={styles.subtitle}>
        Join your apartment community
      </Text>

      {/* Account Type */}

      <Text style={styles.label}>Account Type</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleCard,
            accountType === "RESIDENT" &&
              styles.selectedRole,
          ]}
          onPress={() => setAccountType("RESIDENT")}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color="#111"
          />
          <Text style={styles.roleText}>
            RESIDENT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleCard,
            accountType === "OWNER" &&
              styles.selectedRole,
          ]}
          onPress={() => setAccountType("OWNER")}
        >
          <Feather
            name="key"
            size={22}
            color="#111"
          />
          <Text style={styles.roleText}>
            OWNER
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[
            styles.roleCard,
            accountType === "Admin" &&
              styles.selectedRole,
          ]}
          onPress={() => setAccountType("Admin")}
        >
          <Ionicons
            name="shield-checkmark-outline"
            size={22}
            color="#111"
          />
          <Text style={styles.roleText}>
            Admin
          </Text>
        </TouchableOpacity> */}
      </View>

      {/* Full Name */}

      <Text style={styles.label}>Full Name</Text>

      <View style={styles.inputContainer}>
        <Feather
          name="user"
          size={22}
          color="#666"
        />

        <TextInput
          placeholder="e.g. Aarav Sharma"   
value={fullName} 
onChangeText={setFullName}
          placeholderTextColor="#9A9A9A"
          style={styles.input}
        />
      </View>

      {/* Email */}

      <Text style={styles.label}>Email</Text>

      <View style={styles.inputContainer}>
        <Feather
          name="mail"
          size={20}
          color="#666"
        />

        <TextInput
          placeholder="name@email.com"
          value={email} onChangeText={setEmail}
          placeholderTextColor="#9A9A9A"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* Mobile */}

      <Text style={styles.label}>
        Mobile Number
      </Text>

      <View style={styles.inputContainer}>
        <Feather
          name="phone"
          size={20}
          color="#666"
        />

        <TextInput
          placeholder="10-digit mobile"
          value={mobile} onChangeText={setMobile}
          placeholderTextColor="#9A9A9A"
          maxLength={10}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      {/* Password */}

      <Text style={styles.label}>Password</Text>

      <View style={styles.inputContainer}>
        <Feather
          name="lock"
          size={20}
          color="#666"
        />

        <TextInput
          secureTextEntry={!showPassword}
          placeholder="At least 6 characters"
          value={password} onChangeText={setPassword}
          placeholderTextColor="#9A9A9A"
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

      {/* Apartment Name */}

      <Text style={styles.label}>
        Apartment Name
      </Text>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="office-building-outline"
          size={20}
          color="#666"
        />

        <TextInput
          placeholder="e.g. Skyline Gardens"
          value={apartmentName} onChangeText={setApartmentName}
          placeholderTextColor="#9A9A9A"
          style={styles.input}
        />
      </View>

      {/* Flat Number */}

      <Text style={styles.label}>
        Flat Number
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="home-outline"
          size={20}
          color="#666"
        />

        <TextInput
          placeholder="e.g. B-302"
          value={flatNumber} onChangeText={setFlatNumber}
          placeholderTextColor="#9A9A9A"
          style={styles.input}
        />
      </View>

      {/* Create Account Button */}

      <TouchableOpacity
        style={styles.createButton}
        onPress={handleRegister}
      >
        <Text style={styles.createText}>
          Create Account
        </Text>
      </TouchableOpacity>

      {/* Footer */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push("/login")
          }
        >
          <Text style={styles.loginLink}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 24,
  },

  backButton: {
    marginTop: 55,
    marginBottom: 20,
    width: 40,
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#111",
  },

  subtitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
    marginBottom: 35,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3A3A3A",
    marginBottom: 10,
    marginTop: 12,
  },

  roleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
    marginBottom: 18,
  },

  roleCard: {
    width: "31%",
    height: 85,
    backgroundColor: "#FFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedRole: {
    backgroundColor: "#F8F0DF",
    borderColor: "#111",
  },

  roleText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 18,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    paddingHorizontal: 18,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },

  createButton: {
    height: 50,
    backgroundColor: "#0D0D0D",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 8,
  },

  createText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 50,
  },

  footerText: {
    fontSize: 16,
    color: "#444",
  },

  loginLink: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginLeft: 6,
  },
});