import { useState } from "react"

export const useCalculator = () => {

  const [number, setNumber] = useState('0')

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
  }

  const deleteLastNumber = () => {
    if( number.length == 1 ){
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

  return {
    number,
    buildNumber,
    reset,
    deleteLastNumber,
    toggleSign
  }
}
