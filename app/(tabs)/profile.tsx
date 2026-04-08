import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ProfileHeader from '@/components/ProfileHeader'
import Ionicons from '@expo/vector-icons/Ionicons'
import useTheme from '@/hooks/useTheme'

export default function profile() {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{backgroundColor:colors.bg}}>
      <ProfileHeader/>
      <View style={{marginHorizontal:'auto', width:"95%", backgroundColor:colors.Backgrounds.Input,
         padding:10, borderRadius:10, marginTop:5, height:"auto"}}>
        <View style={{gap:1, alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontSize:24, fontWeight:"bold", color:colors.interface}}>Willie Ben</Text>
          <Text style={{fontSize:16, color:colors.interface}}>Active since - 1940</Text>
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
          <View style={{ justifyContent:"space-between", gap:20, marginTop:5}}>
            <View style={{flexDirection:"row", gap:10, marginTop:5,
               alignItems:"center", justifyContent:"space-between"}}>
              <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                <Ionicons name='mail' size={20} color={colors.textMuted}/>
                <Text style={{fontSize:18, color:"#666", fontWeight:"semibold"}}>Email:</Text>
              </View>
              <Text style={{fontSize:16, color:colors.text}}>
                willie.ben@example.com
              </Text>
            </View>
            <View style={{flexDirection:"row", gap:10, marginTop:3,
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
          <ScrollView style={{backgroundColor:"#e0e0e0", padding:20, borderRadius:30}}>
              <View style={{flexDirection:"row", alignItems:"center", 
              
              justifyContent:"space-between", 
              }}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>Account Settings</Text>
            <TouchableOpacity style={{backgroundColor:"#f8f8f8", padding:5, borderRadius:5}}>
              <Ionicons name='create-outline' size={20} color="#000"/>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flexDirection:"row", 
              justifyContent:"space-between", alignItems:"center",
               marginTop:20 }}>
                <Text style={{fontSize:18}}>Reset Password</Text>
                <Ionicons name='chevron-forward' size={20}/>
              </TouchableOpacity>
              <TouchableOpacity  style={{flexDirection:"row", 
              justifyContent:"space-between", alignItems:"center",
               marginTop:20 }}>
                <Text style={{fontSize:18}}>Reset Email</Text>
                <Ionicons name='chevron-forward' size={20}/>
              </TouchableOpacity>
              <TouchableOpacity  style={{flexDirection:"row", 
              justifyContent:"space-between", alignItems:"center",
               marginTop:20 }}>
                <Text style={{fontSize:18}}>Delete Account</Text>
                <Ionicons name='chevron-forward' size={20}/>
              </TouchableOpacity>
            </ScrollView>
 
        </View>

      </View>
    </SafeAreaView>
  )
}
