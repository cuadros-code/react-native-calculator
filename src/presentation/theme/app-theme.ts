import { StyleSheet } from "react-native";

export const colors = {
  darkGray: '#2D2D2D',
  ligthGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: '#ffffff',
  textSecondary: '#666666',
  background: '#000000'
}

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background
  },

  calculaterContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end'
  },

  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 5,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  }


})