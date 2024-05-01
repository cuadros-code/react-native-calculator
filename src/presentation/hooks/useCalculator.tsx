import { useRef, useState } from "react"

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const lasOperation = useRef<Operator>()

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
    lasOperation.current = Operator.divide
  }

  const multiplyOperation = () => {
    setLastNumber()
    lasOperation.current = Operator.multiply
  }

  const addOperation = () => {
    setLastNumber()
    lasOperation.current = Operator.add
  }

  const subtractOperation = () => {
    setLastNumber()
    lasOperation.current = Operator.subtract
  }

  return {
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
  }
}
