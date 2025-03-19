"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Contexte initial
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isClient, setIsClient] = useState(false); // Ajout pour vérifier si on est côté client

  useEffect(() => {
    setIsClient(true); // Passe à `true` après le premier rendu côté client
  }, []);

  useEffect(() => {
    if (!isClient) return; // Évite d'exécuter ce code côté serveur

    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    setTheme(storedTheme || defaultTheme);
  }, [defaultTheme, storageKey, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, isClient]);

  const updateTheme = (newTheme: Theme) => {
    if (!isClient) return;

    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
