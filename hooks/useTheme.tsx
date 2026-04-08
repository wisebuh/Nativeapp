// useTheme.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface colorScheme {
  bg: string;
  interface: string;
  text: string;
  textMuted: string;
  borders: string;
  primary: string;
  success: string;
  warnings: string;
  danger: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  Backgrounds: {
    Input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: colorScheme = {
  bg: "#fff",
  interface: "#cdaa80",
  text: "#222",
  textMuted: "#888",
  borders: "#cdab88",
  primary: "#f8f8f8",
  success: "#f3e6cc",
  warnings: "#f3e5cd",
  danger: "#ffd30e",
  shadow: "#f3fd3d",
  gradients: {
    background: ["#cdaa80", "#f3e6cc"],
    surface: ["#a88a5f", "#f3e6cc"],
    primary: ["#e0e0e0", "#fcfcfc"],
    success: ["#f8efe0", "#d6c3a3"],
    danger: ["#ffe066", "#ccaa0b"],  // ✅ fixed missing #
    muted: ["#4a4a4a", "#e0e0e0"],
    empty: ["#b0b0b0", "#888"],
  },
  Backgrounds: {
    Input: "#fdfdfd",
    editInput: "#999",
  },
  statusBarStyle: "dark-content" as const,
};

const darkColors: colorScheme = {
  bg: "#0d0d0d",
  interface: "#cdaa80",
  text: "#f5f5f5",
  textMuted: "#aaaaaa",
  borders: "#2a2a2a",
  primary: "#ffffff",
  success: "#d6c3a3",
  warnings: "#e6d3a3",
  danger: "#ffd30e",
  shadow: "#000000",
  gradients: {
    background: ["#1a1a1a", "#0d0d0d"],
    surface: ["#2a2a2a", "#1a1a1a"],
    primary: ["#ffffff", "#cccccc"],
    success: ["#d6c3a3", "#a88a5f"],
    danger: ["#ffe066", "#ccaa0b"],
    muted: ["#3a3a3a", "#1f1f1f"],
    empty: ["#444444", "#2a2a2a"],
  },
  Backgrounds: {
    Input: "#1a1a1a",
    editInput: "#333333",
  },
  statusBarStyle: "light-content" as const,
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: colorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem("dark-mode").then((value) => {  // ✅ fixed key
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("dark-mode", JSON.stringify(newMode));  // ✅ consistent key
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}