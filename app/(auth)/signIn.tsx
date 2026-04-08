import { View, Text, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import {useState} from 'react'
import CustomInput from '@/components/CustomAuth/CustomInput'
import CustomButton from '@/components/CustomAuth/CustomButton'

export default function signIn() {
  const [form, setForm] = useState({
    email:"",
    password:""
  })
  const {email, password} = form
  return (
    <View style={{flex:1, justifyContent:"center",
    alignItems:"flex-start",padding:20, marginTop:50, gap:20}}>
      
      <CustomInput 
      placeholder='Enter your email'
      label = "Email"
      placeholderTextColor='gray'
      value={email}
     onChangeText={(text) => {
      setForm((prev) => ({
        ...prev,
        email: text,
      }));
    }}
    keyboardType='email-address'
      />
      <CustomInput 
      placeholder='password'
      placeholderTextColor='gray'
      label='Password'
      value={password}
      onChangeText={(text) => {
      setForm((prev) => ({
        ...prev,
        password: text,
      }));
    }}  
    secureTextEntry={true}
      />
      <Link href="/(tabs)" style={{color:"blue", fontSize:17, fontWeight:"semibold", alignSelf:"flex-end"}}>Forgot Password?</Link>
      <CustomButton title='SIgn In' onPress={()=>router.replace("/(auth)/register")} isLoading={false}/>
      <View style={{flexDirection:"row",gap:10,marginTop:10}}>
        <Text style={{color:"black", fontSize:17, fontWeight:"semibold"}}>Don't have an account?</Text>
        <Pressable>
          {({pressed})=>(
            <Link style={{color:"red",fontSize:17, fontWeight:"semibold", opacity:pressed?0.5:1}} href="/register">Sign Up</Link>
          )}
        </Pressable>
      </View>
    </View>
  )
}