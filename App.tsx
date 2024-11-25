import React from 'react';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from '~/routes';
import { light } from '~/styles/theme';

if (__DEV__ && process.env.JEST_WORKER_ID == null) {
  void import('./ReactotronConfig').then(() => {
    console.log('Reactotron Configured');
  });
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
