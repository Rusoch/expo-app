import { ScreenContent } from '~/utils/components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { ThemeProvider } from '~/utils/components/shared-components/providers/ThemeProviders';
import { ThemeComponent } from '~/utils/components/shared-components/ThemeComponent';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeComponent>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
      </ThemeComponent>
    </ThemeProvider>
  );
}
