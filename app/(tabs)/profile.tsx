import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ProfileHeader from '@/components/ProfileHeader'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function profile() {
  return (
    <SafeAreaView>
      <ProfileHeader/>
      <View style={{marginHorizontal:'auto', width:"95%", backgroundColor:"#f8f8f8",
         padding:10, borderRadius:10, marginTop:5, height:"auto"}}>
        <View style={{gap:1, alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontSize:24, fontWeight:"bold"}}>Willie Ben</Text>
          <Text style={{fontSize:16, color:"#666"}}>Active since - 1940</Text>
        </View>
        <View style={{marginTop:10, gap:10, padding:10}}>
          <View style={{backgroundColor:"#e0e0e0", padding:20, borderRadius:30}}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", 
              }}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>Personal Information</Text>
            <TouchableOpacity style={{backgroundColor:"#f8f8f8", padding:5, borderRadius:5}}>
              <Ionicons name='create-outline' size={20} color="#000"/>
            </TouchableOpacity>
           </View>
          <View style={{ justifyContent:"space-between", gap:20, marginTop:10}}>
            <View style={{flexDirection:"row", gap:10, marginTop:5,
               alignItems:"center", justifyContent:"space-between"}}>
              <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                <Ionicons name='mail' size={20} color="#666"/>
                <Text style={{fontSize:18, color:"#666", fontWeight:"semibold"}}>Email:</Text>
              </View>
              <Text style={{fontSize:16}}>
                willie.ben@example.com
              </Text>
            </View>
            <View style={{flexDirection:"row", gap:10, marginTop:5,
               alignItems:"center", justifyContent:"space-between"}}>
              <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                <Ionicons name='call' size={20} color="#666"/>
                <Text style={{fontSize:18, color:"#666", fontWeight:"semibold"}}>Phone:</Text>
              </View>
              <Text style={{fontSize:16}}>
                (123) 456-7890
              </Text>
            </View>
            <View style={{flexDirection:"row", gap:10, marginTop:5,
               alignItems:"center", justifyContent:"space-between"}}>
              <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                <Ionicons name='globe' size={20} color="#666"/>
                <Text style={{fontSize:18, color:"#666", fontWeight:"semibold"}}>Website:</Text>
              </View>
              <Text style={{fontSize:16}}>
                https://www.willieben.com
              </Text>
            </View>
            <View style={{flexDirection:"row", gap:10, marginTop:5,
               alignItems:"center", justifyContent:"space-between"}}>
             <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                <Ionicons name='location' size={20} color="#666"/>
                <Text style={{fontSize:18, color:"#666", fontWeight:"semibold"}}>Location:</Text>
              </View>
              <Text style={{fontSize:16}}>
                New York, NY
              </Text>
            </View>
          </View>
          </View>
          <View style={{backgroundColor:"#e0e0e0", padding:20, borderRadius:30}}>
              <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", 
              }}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>Account Settings</Text>
            <TouchableOpacity style={{backgroundColor:"#f8f8f8", padding:5, borderRadius:5}}>
              <Ionicons name='create-outline' size={20} color="#000"/>
            </TouchableOpacity>
            </View>
            </View>
        </View>

      </View>
    </SafeAreaView>
  )
}