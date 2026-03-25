import { View, Text } from 'react-native'
import Header from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function index() {
  return (
    <SafeAreaView style={{}}>
        <Header />
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:"#000", fontSize:20, fontWeight:'bold'}}>Home Screen</Text>
        </View>
    </SafeAreaView>
  )
}