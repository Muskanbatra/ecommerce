import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { setTopLevelNavigator } from './src/navigation/TopLevelNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import DrawerNavigation from './src/navigation/DrawerNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <NavigationContainer ref={(ref) => setTopLevelNavigator(ref)} >
          <StackNavigation />
          {/* <DrawerNavigation/> */}
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
