import { Button } from "@/app/components/ui/button";
import { useTheme } from "@/app/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Détermine si le thème effectif est clair ou sombre
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="ghost"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Moon className="h-[1.1rem] w-[1.2rem] transition-all text-primary" />
      ) : (
        <Sun className="h-[1.1rem] w-[1.2rem] transition-all text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}