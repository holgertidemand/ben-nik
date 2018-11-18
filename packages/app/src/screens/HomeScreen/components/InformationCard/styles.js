import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgb(32,32,32)',
  },

  image: {
    position: 'relative',
    top: 0,
    height: 180,
    width: 300,
    borderRadius: 5,
  },

  title: {
    fontSize: 18,
    color: 'rgb(255, 255, 255)',
    marginTop: 20,
  },

  text: {
    fontSize: 12,
    color: 'rgb(255, 255, 255)',
    marginTop: 20,
    textAlign: 'center',
  },

  button: {
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonLabel: {
    color: 'rgb(0,0,0)',
    fontSize: 18,
  },
})

export default styles
