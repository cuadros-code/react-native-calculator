import { useEffect, useRef, useState } from "react"

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('')

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const lastOperation = useRef<Operator>()

  useEffect(() => {
    if( lastOperation.current ){
      const firstFomularPart = formula.split(' ').at(0)
      setFormula(`${ firstFomularPart } ${ lastOperation.current } ${ number }`)
    } else {
      setFormula( number )
    }
  }, [number])
  

  const buildNumber = ( numberString: string ) => {
    
    if( number.includes('.') && numberString === '.' ) return;

    if( number.startsWith('0') || number.startsWith('-0') ){

      if(numberString === '.'){
        return setNumber(number + numberString)
      }
      if( numberString === '0' && number.includes('.') ){
        return setNumber( number + numberString )
      }
      if( numberString !== '0' && !number.includes('.') ){
        return setNumber( numberString )
      }
      if( numberString === '0' && !number.includes('.') ){
        return
      }

      return setNumber( number + numberString )
    }

    setNumber( number + numberString )
  }

  const reset = () => {
    setNumber('0')
    setPrevNumber('0')
    lastOperation.current = undefined
    setFormula('')
  }

  const deleteLastNumber = () => {
    if( number.length == 1 ){
      return reset()
    } 
    if( number.startsWith('-') && number.length === 2 ){
      return reset()
    }
    setNumber( number.slice( 0, number.length - 1 ) )
  }

  const toggleSign = () => {
    if( number.includes('-') ){
      return setNumber( number.replace('-', '') )
    }
    setNumber( '-' + number )
  }

  const setLastNumber = () => {

    if(number.endsWith('.')){
      setPrevNumber( number.slice( 0, -1 ) )
    } else {
      setPrevNumber( number )
    }

    setNumber('0')
  }

  const divideOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.divide
  }

  const multiplyOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.multiply
  }

  const addOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.add
  }

  const subtractOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.subtract
  }

  const calculateResult = () => {
    const result = calculateSubResult()
    setFormula(`${ result }`)
    lastOperation.current = undefined
    setPrevNumber('0')
  }

  const calculateSubResult = (): number => {
    const [ firstValue, _ , secoundValue ] = formula.split(' ')

    const num1 = Number( firstValue )
    const num2 = Number( secoundValue )

    if( isNaN(num2) ) return num1

    switch ( lastOperation.current ) {
      case Operator.add:
        return num1 + num2 

      case Operator.subtract:
        return num1 - num2

      case Operator.multiply:
        return num1 * num2 

      case Operator.divide:
        return num1 / num2

      default:
        throw new Error('Operation invalid')
    }
  }

  return {
    number,
    prevNumber,
    formula,
    buildNumber,
    reset,
    deleteLastNumber,
    toggleSign,
    divideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    calculateResult
  }
}
