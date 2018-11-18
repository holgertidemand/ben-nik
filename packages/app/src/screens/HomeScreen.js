import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import BaseScreen from './BaseScreen'

export default class HomeScreen extends BaseScreen {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text> hej</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
