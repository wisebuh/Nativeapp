import { Tabs } from "expo-router"
import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

interface TabBarProps{
    focused: boolean
    name: React.ComponentProps<typeof Ionicons>['name']
    title: string
}


const TabBar = ({ focused, name, title }: TabBarProps) => {
  if (focused) {
    return (
      <View
        style={{
          flexDirection: 'row',
          minWidth: 100,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
          backgroundColor: '#cdaa80', // highlight
        }}
      >
        <Ionicons name={name} size={20} color="#fff" />
        <Text style={{ color: '#fff', fontWeight: '600' }}>
          {title}
        </Text>
      </View>
    );
  }

  return <Ionicons name={name} size={20} color="#cdaa80" />;
};


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarStyle: {
        backgroundColor: '#222',
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 70,
        elevation: 5,
        },
        tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        },
        tabBarLabelStyle:{
            fontSize:15,
            fontWeight:'bold'
        },
        tabBarShowLabel:false,
    }}>
      
      <Tabs.Screen name="index" options={{
        title:'Home',
        tabBarIcon:({focused})=><TabBar focused={focused} name={focused?"home":"home-outline"} title="Home" />
      }} />
      <Tabs.Screen name="profile" options={{title:"Profile",
        tabBarIcon:({focused})=><TabBar focused={focused} name={focused?"person":"person-outline"} title="Profile" />
      }} />
      <Tabs.Screen name="calendar" options={{title:"calendar",
        tabBarIcon:({focused})=><TabBar focused={focused} name={focused?"calendar":"calendar-outline"} title="Calendar" />
      }}  />
      <Tabs.Screen name="settings"  options={{title:"Settings",
        tabBarIcon:({focused})=><TabBar focused={focused} name={focused?"settings":"settings-outline"} title="Settings" />
      }}/>
    </Tabs>
  )
}