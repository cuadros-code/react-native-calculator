import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './presentation/theme/app-theme';

export const App = () => {

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculatorScreen />
    </View>
  );
}

