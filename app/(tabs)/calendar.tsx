import { View, Text, ScrollView, Pressable } from 'react-native'
import Event from '@/components/Event'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CalendarProvider, ExpandableCalendar } from 'react-native-calendars';
import { useState } from 'react';
import useTheme from '@/hooks/useTheme';

export default function Calender() {
  const {colors} = useTheme();
  const date = new Date().toISOString().split('T')[0];
  const [num, setNum] = useState<number>(0)
  
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, backgroundColor:colors.bg }}>
      <Event />

      <CalendarProvider
        date={date}
        style={{ marginTop: 10, borderRadius: 50 }}  // remove height:"auto"
      >
        <ExpandableCalendar />

        {/* Move ScrollView INSIDE CalendarProvider so it shifts with the calendar */}
        <ScrollView style={{ flex: 1 }}>
          <View style={{marginTop:10, padding:0}}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Events</Text>
          </View>
          <View>
            <Text style={{fontSize:20, color:"#000"}}>{num}</Text>
          </View>
          <Pressable onPress={()=>{
            setNum(num + 1)
          }}
          style={{borderColor:"#000", borderStyle:"solid", 
          borderWidth:2, width:"30%", borderRadius:50, alignItems:"center"}}>
            <Text style={{}}>Counter</Text>
          </Pressable>
        </ScrollView>
      </CalendarProvider>
    </SafeAreaView>
  );
}