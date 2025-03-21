import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (

    <Stack screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
    
    </Stack>

  )
}
