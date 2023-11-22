import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Feather,
  Entypo,
  Ionicons,
  Octicons,
  AntDesign,
} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Login from '../../login/Login'; // Sesuaikan path dengan struktur folder yang benar

const Index = () => {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Perform logout actions
    setLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <ScrollView>
      <LinearGradient colors={['#7F7FD5', '#E9E4F0']} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              EVOTOPIANS
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          {/* Menu */}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}
          >
            {/* Employee List */}
            <Pressable
              onPress={() => router.push('/(home)/employees')}
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="ios-people-sharp" size={24} color="black" />
              </View>
              {/* Text */}
              <Text style={{ marginTop: 7, fontWeight: '600' }}>
                Employee List
              </Text>
            </Pressable>

            {/* Mark Attendance */}
            <Pressable
              onPress={() => router.push('/(home)/markattendance')}
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="ios-people-sharp" size={24} color="black" />
              </View>
              {/* Text */}
              <Text style={{ marginTop: 7, fontWeight: '600' }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>

          {/* Reports Section */}
          <View
            style={{
              marginTop: 20,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}
          >
            {/* Attendance Report */}
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              {/* Text */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                }}
              >
                Attendance Report
              </Text>
              {/* Chevron Right Icon */}
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            {/* Summary Report */}
            <Pressable
              onPress={() => router.push('/(home)/summary')}
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              {/* Text */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                }}
              >
                Summary Report
              </Text>
              {/* Chevron Right Icon */}
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            {/* All Generate Reports */}
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              {/* Text */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                }}
              >
                All Generate Reports
              </Text>
              {/* Chevron Right Icon */}
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            {/* Overtime Employees */}
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              {/* Text */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  flex: 1,
                }}
              >
                Overtime Employees
              </Text>
              {/* Chevron Right Icon */}
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>

          {/* Hello Welcome Section */}
              <View
               style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
               gap: 12,
             }}
           >
             <View
               style={{
                 backgroundColor: '#f79d00',
                 borderRadius: 6,
                 padding: 15,
                 alignItems: 'center',
                 justifyContent: 'center',
                 flex: 1,
                 width: 200,
               }}
             >
              {/* Icon */}
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              {/* Text */}
              <Text
                style={{ fontSize: 11, fontWeight: 'bold', marginTop: 10 }}
              >
                Hello Welcome To Employee Managament of Evotopians Apps
              </Text>
            </View>
            <View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                }}
              ></View>
            </View>
          </View>

          {/* LogOut Section */}
          <Pressable
            onPress={handleLogout}
            style={{
              backgroundColor: '#D3CDE3',
              borderRadius: 6,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            {/* Icon */}
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AntDesign name="logout" size={24} color="black" />
            </View>
            {/* Text */}
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10 }}>
              LogOut
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({});