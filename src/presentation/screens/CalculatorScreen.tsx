import { Text, View } from 'react-native'
import { colors, styles } from '../theme/app-theme'
import { Button } from '../components/Button'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculaterContainer} >
      
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row} >
        <Button onPress={null} blackText color={colors.ligthGray} label='C' />
        <Button onPress={null} blackText color={colors.ligthGray} label='+/-' />
        <Button onPress={null} blackText color={colors.ligthGray} label='del' />
        <Button onPress={null} color={colors.orange} label='&#247;' />
      </View>
      <View style={styles.row} >
        <Button onPress={null} label='7' />
        <Button onPress={null} label='8' />
        <Button onPress={null} label='9' />
        <Button onPress={null} color={colors.orange} label='x' />
      </View>
      <View style={styles.row} >
        <Button onPress={null} label='4' />
        <Button onPress={null} label='5' />
        <Button onPress={null} label='6' />
        <Button onPress={null} color={colors.orange} label='-' />
      </View>
      <View style={styles.row} >
        <Button onPress={null} label='1' />
        <Button onPress={null} label='2' />
        <Button onPress={null} label='3' />
        <Button onPress={null} color={colors.orange} label='+' />
      </View>
      <View style={styles.row} >
        <Button onPress={null} large label='0' />
        <Button onPress={null} label='.' />
        <Button onPress={null} color={colors.orange} label='=' />
      </View>

    </View>
  )
}
