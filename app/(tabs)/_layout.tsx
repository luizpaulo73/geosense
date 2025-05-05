import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#020817" } }}>
        <Tabs.Screen 
            name="dashboard"
            options={{
                title :"Dashboard", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/dashboard.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
            }}
        />
        <Tabs.Screen
            name="aa"
            options={{
                title :"aa", 
                
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={require('../../assets/tabs/dashboard.png')}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: focused ? '#00CCCF' : '#94A3B8',}}
                    />
                ),
                tabBarLabelStyle: { color: "#94A3B8", fontSize: 10, fontFamily: "K2D_700Bold" }
            }}
            />
    </Tabs>
  )
}
