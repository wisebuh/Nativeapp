// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router"
import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useWindowDimensions } from 'react-native';
import useTheme from "@/hooks/useTheme";

interface TabBarProps {
  focused: boolean
  name: React.ComponentProps<typeof Ionicons>['name']
  title: string
}

const TabBar = ({ focused, name, title }: TabBarProps) => {
  const { colors } = useTheme()        // ✅ inside the component
  const { width } = useWindowDimensions()

  if (focused) {
    return (
      <View
        style={{
          flexDirection: 'row',
          minWidth: width * 0.3,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          paddingHorizontal: 12,
          paddingVertical: 5,
          borderRadius: 50,
          backgroundColor: colors.bg,
        }}
      >
        <Ionicons name={name} size={20} color={colors.text} />
        <Text style={{ color: colors.text, fontWeight: '600' }} numberOfLines={1}>
          {title}
        </Text>
      </View>
    )
  }

  return <Ionicons name={name} size={20} color={colors.text} />
}


export default function TabLayout() {
  const { colors } = useTheme()        // ✅ inside the component

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.Backgrounds.editInput,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 70,
        elevation: 5,
      },
      tabBarItemStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarLabelStyle: {
        fontSize: 15,
        fontWeight: 'bold'
      },
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => <TabBar focused={focused} name={focused ? "home" : "home-outline"} title="Home" />
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ focused }) => <TabBar focused={focused} name={focused ? "person" : "person-outline"} title="Profile" />
      }} />
      <Tabs.Screen name="calendar" options={{
        title: "Calendar",
        tabBarIcon: ({ focused }) => <TabBar focused={focused} name={focused ? "calendar" : "calendar-outline"} title="Calendar" />
      }} />
      <Tabs.Screen name="settings" options={{
        title: "Settings",
        tabBarIcon: ({ focused }) => <TabBar focused={focused} name={focused ? "settings" : "settings-outline"} title="Settings" />
      }} />
    </Tabs>
  )
}
