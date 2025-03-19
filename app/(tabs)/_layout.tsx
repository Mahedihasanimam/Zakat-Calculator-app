import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native"; // To make the back button clickable

export default function TabsLayout() {
  const router = useRouter();
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="#4CAF50"
        translucent={false}
        hidden={false}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFFBE6",
          tabBarInactiveTintColor: "#C0EBA6",
          tabBarActiveBackgroundColor: "#388E3C",
          tabBarInactiveBackgroundColor: "#388E3C",
          headerStyle: {
            backgroundColor: "#4CAF50",
          },
          headerTitleStyle: {
            color: "#FDFAF6",
            fontSize: 25,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: "যাকাত",
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Entypo size={20} name="home" color={color} />
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => router.back()}
              >
                <FontAwesome
                  name="asl-interpreting"
                  size={24}
                  color="#FDFAF6"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="ZakatGuidePage"
          options={{
            headerTitle: "Zakat Guide",
            tabBarLabel: "Zakat Guide",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="book" size={20} color={color} />
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15, marginRight: 15 }}
                onPress={() => router.back()}
              >
                <FontAwesome name="arrow-left" size={24} color="#FDFAF6" />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="Zakat"
          options={{
            headerTitle: "যাকাত ক্যালকুলেটর",
            tabBarLabel: "Calculator",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="calculator" size={20} color={color} />
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15, marginRight: 15 }}
                onPress={() => router.back()}
              >
                <FontAwesome name="arrow-left" size={24} color="#FDFAF6" />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
