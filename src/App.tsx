import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';

export const App = () => {

  return (
    <View>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculatorScreen />
    </View>
  );
}

