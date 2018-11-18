import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import BaseScreen from '../BaseScreen'

import styles from './styles'

export default class HomeScreen extends BaseScreen {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.text}> Ben & Nik Invitational 2.0</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
