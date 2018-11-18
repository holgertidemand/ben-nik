import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32,32,32)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    position: 'relative',
    top: 50,
    marginHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
  },

  text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 24,
    textAlign: 'center',
  },
})

export default styles
