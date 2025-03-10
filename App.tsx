import { ScreenContent } from "~/components/ScreenContent";
import { StatusBar } from "expo-status-bar";
import "./global.css";
import { ThemeProvider } from "~/components/shared/providers/ThemeProviders";
import { ThemeComponent } from "~/components/shared/ThemeComponent";

export default function App() {
  return (
    <ThemeProvider><ThemeComponent>
      <ScreenContent title="Welcome" path="App.tsx" />
      <StatusBar style="auto" />
      </ThemeComponent>
    </ThemeProvider>
  );
}
