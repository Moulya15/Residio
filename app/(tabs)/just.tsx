
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // If using Expo
// import Ionicons from 'react-native-vector-icons/Ionicons'; // If using React Native CLI

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        
        {/* --- TOP HEADER --- */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Good Morning,</Text>
              <Text style={styles.userName}>Alex Johnson</Text>
              <View style={styles.apartmentBadge}>
                <Text style={styles.apartmentText}>Skyline Gardens • Flat 4B</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Ionicons name="notifications-outline" size={24} color="#475569" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- QUICK ACTION BUTTONS --- */}
        <View style={styles.quickActionsContainer}>
          <View style={styles.actionsGrid}>
            
            {/* Maintenance */}
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: '#CCFBF1' }]}>
                <Ionicons name="construct-outline" size={24} color="#0D9488" />
              </View>
              <Text style={styles.actionTitle}>Maintenance</Text>
              <Text style={styles.actionSubtitle}>Request</Text>
            </TouchableOpacity>

            {/* Complaint */}
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: '#E0E7FF' }]}>
                <Ionicons name="create-outline" size={24} color="#4F46E5" />
              </View>
              <Text style={styles.actionTitle}>File</Text>
              <Text style={styles.actionSubtitle}>Complaint</Text>
            </TouchableOpacity>

            {/* Emergency */}
            <TouchableOpacity style={[styles.actionCard, { borderColor: '#FEE2E2' }]} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: '#FEE2E2' }]}>
                <Ionicons name="warning-outline" size={24} color="#DC2626" />
              </View>
              <Text style={[styles.actionTitle, { color: '#DC2626' }]}>Emergency</Text>
              <Text style={styles.actionSubtitle}>SOS</Text>
            </TouchableOpacity>

            {/* Contact Mgmt */}
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFEDD5' }]}>
                <Ionicons name="call-outline" size={24} color="#EA580C" />
              </View>
              <Text style={styles.actionTitle}>Contact</Text>
              <Text style={styles.actionSubtitle}>Management</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- MAIN CONTENT --- */}
        <View style={styles.contentSection}>
          
          {/* Status Overview */}
          <View style={styles.statusContainer}>
            <View style={styles.statusCard}>
              <Text style={styles.statusLabel}>Open</Text>
              <Text style={styles.statusNumber}>02</Text>
            </View>
            <View style={styles.statusCard}>
              <Text style={[styles.statusLabel, { color: '#2563EB' }]}>In Progress</Text>
              <Text style={[styles.statusNumber, { color: '#2563EB' }]}>04</Text>
            </View>
            <View style={styles.statusCard}>
              <Text style={[styles.statusLabel, { color: '#16A34A' }]}>Resolved</Text>
              <Text style={[styles.statusNumber, { color: '#16A34A' }]}>15</Text>
            </View>
          </View>

          {/* Recent Activity */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <View style={styles.activityIconBox}>
                <Ionicons name="flash-outline" size={18} color="#2563EB" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.activityTitle}>AC Repair</Text>
                <Text style={styles.activitySub}>Living Room</Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>In Progress</Text>
              </View>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '60%' }]} />
            </View>
            <Text style={styles.activityFooter}>Technician assigned</Text>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <View style={[styles.activityIconBox, { backgroundColor: '#FFEDD5' }]}>
                <Ionicons name="chatbubbles-outline" size={18} color="#EA580C" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.activityTitle}>Noise Complaint</Text>
                <Text style={styles.activitySub}>Floor 3, Hallway</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: '#FFF7ED', borderColor: '#FFEDD5' }]}>
                <Text style={[styles.statusBadgeText, { color: '#EA580C' }]}>Pending</Text>
              </View>
            </View>
            <Text style={styles.activityFooter}>Posted 2 hours ago</Text>
          </View>

          {/* Community Updates */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Community</Text>
          </View>

          <View style={styles.noticeCard}>
            <View style={styles.noticeHeader}>
              <Ionicons name="newspaper-outline" size={16} color="#2DD4BF" />
              <Text style={styles.noticeLabel}>NOTICE</Text>
            </View>
            <Text style={styles.noticeTitle}>Generator Maintenance</Text>
            <Text style={styles.noticeBody}>
              Power backup system check scheduled for this Saturday, 10 AM to 2 PM. 
              Please prepare accordingly.
            </Text>
          </View>

          <View style={{ height: 100 }} /> {/* Spacer for Bottom Nav */}
        </View>
      </ScrollView>

      {/* --- BOTTOM NAVIGATION --- */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#0D9488" />
          <Text style={[styles.navText, { color: '#0D9488' }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="construct-outline" size={24} color="#94A3B8" />
          <Text style={styles.navText}>Requests</Text>
        </TouchableOpacity>

        {/* Floating Center Button */}
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab}>
            <Ionicons name="add" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubbles-outline" size={24} color="#94A3B8" />
          <Text style={styles.navText}>Complaints</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#94A3B8" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // bg-gray-50
  },
  scrollView: {
    flex: 1,
  },
  
  // Header Styles
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 2,
  },
  apartmentBadge: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  apartmentText: {
    fontSize: 12,
    color: '#0D9488',
    fontWeight: '600',
    backgroundColor: '#F0FDFA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  notificationBtn: {
    padding: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 50,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#F3F4F6',
  },

  // Quick Actions
  quickActionsContainer: {
    paddingHorizontal: 16,
    marginTop: -30, // Overlap header
    marginBottom: 20,
    zIndex: 10,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 48) / 2 - 4,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    minHeight: 130,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },

  // Content Section
  contentSection: {
    paddingHorizontal: 20,
  },
  
  // Status Cards
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    width: '31%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  statusLabel: {
    fontSize: 10,
    color: '#9CA3AF',
    fontWeight: '600',
    marginBottom: 4,
  },
  statusNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },

  // Section Headers
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },

  // Activity Cards
  activityCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    elevation: 1,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityIconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },
  activitySub: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2563EB',
  },
  progressBarBg: {
    height: 4,
    backgroundColor: '#F1F5F9',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 2,
  },
  activityFooter: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 8,
    textAlign: 'right',
  },

  // Community Notice
  noticeCard: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 24,
    marginBottom: 40,
    overflow: 'hidden',
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  noticeLabel: {
    color: '#2DD4BF',
    fontSize: 10,
    fontWeight: '800',
    marginLeft: 6,
    letterSpacing: 1,
  },
  noticeTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  noticeBody: {
    color: '#94A3B8',
    fontSize: 12,
    lineHeight: 18,
  },

  // Bottom Navigation
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  navText: {
    fontSize: 9,
    color: '#94A3B8',
    marginTop: 4,
    fontWeight: '500',
  },
  fabContainer: {
    top: -25, // Pops above the nav bar
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0D9488', // Teal-600
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#F9FAFB', // Matches background
  },
});
