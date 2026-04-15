import { Stack } from "expo-router";
import { ThemeProvider } from "@/hooks/useTheme";
import "./global.css";
import { useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const convex = new ConvexReactClient(
    process.env.EXPO_PUBLIC_CONVEX_URL!,
    { unsavedChangesWarning: false }
  );

  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🔄 Load user on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log("Error loading user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  if (isLoading) return null; // or splash screen

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="(tabs)" />
          ) : (
            <Stack.Screen name="(auth)" />
          )}
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}