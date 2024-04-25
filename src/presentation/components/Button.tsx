import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import { colors, styles } from '../theme/app-theme'

interface Props extends PressableProps {
  label?: string
  color?: string
  large?: boolean
  blackText?: boolean
}

export const Button = ( { color = colors.darkGray, ...props}: Props ) => {
  return (
    <Pressable {...props} style={ ({ pressed }) => ({
      ...styles.button,
      backgroundColor: color,
      opacity: pressed ? 0.8 : 1,
      width: props.large ? 180 : 80,
    })}>
      <Text style={{
        ...styles.buttonText,
        textAlign: props.large ? 'left' : 'center',
        paddingLeft: props.large ? 30 : 10,
        color: props.blackText ? '#000' : colors.textPrimary
      }}>
        {props.label}
      </Text>
    </Pressable>
  )
}
