import { Text, View } from 'react-native'
import { colors, styles } from '../theme/app-theme'
import { Button } from '../components/Button'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

  const {
    number,
    prevNumber,
    buildNumber,
    reset,
    deleteLastNumber,
    toggleSign,
    divideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
  } = useCalculator()

  return (
    <View style={styles.calculaterContainer} >
      
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text 
          adjustsFontSizeToFit
          style={styles.mainResult}
          numberOfLines={1}
        >
          { number }
        </Text>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.subResult}
        >
          { prevNumber === '0' ? '' : prevNumber }
        </Text>
      </View>

      <View style={styles.row} >
        <Button onPress={reset} blackText color={colors.ligthGray} label='C' />
        <Button onPress={toggleSign} blackText color={colors.ligthGray} label='+/-' />
        <Button onPress={deleteLastNumber} blackText color={colors.ligthGray} label='del' />
        <Button onPress={divideOperation} color={colors.orange} label='&#247;' />
      </View>
      <View style={styles.row} >
        <Button onPress={() => buildNumber('7')} label='7' />
        <Button onPress={() => buildNumber('8')} label='8' />
        <Button onPress={() => buildNumber('9')} label='9' />
        <Button onPress={multiplyOperation} color={colors.orange} label='x' />
      </View>
      <View style={styles.row} >
        <Button onPress={() => buildNumber('4')} label='4' />
        <Button onPress={() => buildNumber('5')} label='5' />
        <Button onPress={() => buildNumber('6')} label='6' />
        <Button onPress={subtractOperation} color={colors.orange} label='-' />
      </View>
      <View style={styles.row} >
        <Button onPress={() => buildNumber('1')} label='1' />
        <Button onPress={() => buildNumber('2')} label='2' />
        <Button onPress={() => buildNumber('3')} label='3' />
        <Button onPress={addOperation} color={colors.orange} label='+' />
      </View>
      <View style={styles.row} >
        <Button onPress={() => buildNumber('0')} large label='0' />
        <Button onPress={() => buildNumber('.')} label='.' />
        <Button onPress={null} color={colors.orange} label='=' />
      </View>

    </View>
  )
}
