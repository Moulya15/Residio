// import { router } from "expo-router";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const index=()=>{
//   return(
//     <>
//     <View>
//       <Text style={styles.text}>Welcome</Text>
//     </View>

//     <View>
//       <TouchableOpacity style={styles.text} onPress={() => router.replace('/(tabs)/just')}>
//         <Text> Get Started as Owner</Text>
//       </TouchableOpacity>
//     </View>
//     </>
//   )
// }
// export default index;

// const styles = StyleSheet.create({
// text:{
//   fontSize:20,
// color:"black",
// marginTop:100,
// }
// })

// // Inside app/index.tsx
// import { Redirect } from 'expo-router';

// export default function RootIndex() {
//   const isLoggedIn = false; // Replace with your real auth logic

//   if (!isLoggedIn) {
//     // Safely send them straight to the login screen
//     return <Redirect href="/(tabs)/login" />;
//   }

//   // If they are logged in, send them to the main dashboard tab
//   return <Redirect href="/(tabs)/" />; 
// }


import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { colors, spacing, radius, shadows, typography } from '@/src/theme';
import { useEffect } from 'react';

export default function Welcome() {
  const router = useRouter();

   useEffect(() => {
    const checkLogin = async () => {
      const userName = await SecureStore.getItemAsync("mobile");
      if (userName) {
        router.replace("/(user)/dashboard");
      }
    };
    checkLogin();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.container} testID="welcome-screen">
        {/* Top 50% — intentionally empty (logo placeholder) */}
        <View style={styles.topHalf} testID="welcome-logo-placeholder">
          <View style={styles.logoMark}>
            <Ionicons name="home" size={48} color={colors.black} />
          </View>
        </View>

        {/* Bottom half */}
        <View style={styles.bottomHalf}>
          <Text style={styles.appName} testID="welcome-app-name">Residio</Text>
          <Text style={styles.tagline} testID="welcome-tagline">
            Smart Apartment Living Made Simple
          </Text>

          <Pressable
            testID="welcome-get-started-button"
            onPress={() => router.push('/login')}
            style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}
          >
            <Text style={styles.ctaText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.offWhite} style={{ marginLeft: 8 }} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.offWhite },
  container: { flex: 1, backgroundColor: colors.offWhite },
  topHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMark: {
    width: 96,
    height: 96,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },
  bottomHalf: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'flex-end',
    paddingBottom: spacing.xl,
  },
  appName: {
    fontSize: 44,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: -1,
    marginBottom: spacing.md,
  },
  tagline: {
    fontSize: typography.body,
    color: colors.darkGray,
    marginBottom: spacing['2xl'],
    lineHeight: 22,
  },
  cta: {
    backgroundColor: colors.black,
    borderRadius: radius.lg,
    paddingVertical: 18,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // ...shadows.cta,
  },
  ctaPressed: { opacity: 0.9, transform: [{ scale: 0.99 }] },
  ctaText: {
    color: colors.offWhite,
    fontSize: typography.body,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
