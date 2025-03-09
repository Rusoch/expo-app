import { ScreenContent } from '~/utils/components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import { ThemeProvider } from '~/utils/components/shared/providers/ThemeProviders';
import { ThemeComponent } from '~/utils/components/shared/ThemeComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeComponent>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ScreenContent title="Welcome" />
        </GestureHandlerRootView>
        <StatusBar style="auto" />
      </ThemeComponent>
    </ThemeProvider>
  );
}
