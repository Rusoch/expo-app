import { ScreenContent } from "~/components/ScreenContent";
import { StatusBar } from "expo-status-bar";
import "./global.css";
import { ThemeProvider } from "~/providers/ThemeProviders";
import { ThemeComponent } from "~/components/ThemeComponent";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeComponent>
        <ScreenContent title="Welcome" path="App.tsx" />
        <StatusBar style="auto" />
      </ThemeComponent>
    </ThemeProvider>
  );
}
