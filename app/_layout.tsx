// _layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider } from "@/hooks/useTheme";
import "./global.css";
import { useState } from "react";

export default function RootLayout() {
  const [isauthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {!isauthenticated ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <Stack.Screen name="(auth)" />
        )}
      </Stack>
    </ThemeProvider>
  );
}