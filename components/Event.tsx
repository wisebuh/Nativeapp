import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text } from 'react-native'


export default function Event() {
  return (
    <View style={{flexDirection:"row", 
        justifyContent:"flex-start", 
    gap:10, backgroundColor:"#cdaa80", borderRadius:30,
    padding:10,alignItems:"center",marginHorizontal:10}}>
      <Ionicons name="calendar-clear-outline" size={25} 
      color="#000" style={{marginLeft:10, fontWeight:"bold"
      }}/>
      <Text style={{fontSize:20, fontWeight:"bold"}}>
        Event Planner</Text>
    </View>
  )


  
}