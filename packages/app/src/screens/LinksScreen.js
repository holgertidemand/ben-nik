import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import BaseScreen from './BaseScreen'

export default class LinksScreen extends BaseScreen {
  static navigationOptions = {
    title: 'Links',
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hej </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
