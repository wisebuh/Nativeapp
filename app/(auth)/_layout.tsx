import { Slot } from "expo-router";
import { ImageBackground, KeyboardAvoidingView, ScrollView, View,Dimensions,Image, Platform } from "react-native";

export default function AuthLayout() {
  const height = Dimensions.get('screen').height / 2.45
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "android"?"height":"padding"}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{height:height}}>
          <ImageBackground source={{
          uri: "https://img.freepik.com/free-photo/watercolor-floral-border-with-pink-purple-flowers-light-background_9975-29074.jpg?w=360"
        }}
        resizeMode="stretch"
        style={{borderBottomRightRadius:50, borderBottomLeftRadius:50}}
        />

        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVJ3yw4I9YzBB8Xv0Eo8HgdIHiFbNPRUeMcF97gZXyA&s"}}
        height={100} width={100}
        style={{position:"absolute",top:height/1.25,left:Dimensions.get('screen').width/2.5}}
        resizeMode="cover"
        />

        </View>
        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
    
  )
}