import { View, Text } from 'react-native'
import Header from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import useTheme from '@/hooks/useTheme'



export default function index() {
  const {colors} = useTheme()
  return (
        <SafeAreaView style={{backgroundColor:colors.bg}}>
        <Header />
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:"#000", fontSize:20, fontWeight:'bold'}}>Home Screen</Text>
        </View>
    </SafeAreaView>
  )
}