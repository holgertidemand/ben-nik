import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import BaseScreen from '../BaseScreen'
import InformationCard from './components/InformationCard'

import styles from './styles'

const dummyData = [
  {
    title: 'Holger Tidemand',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    buttonLabel: 'Läs mer',
    image: 'https://picsum.photos/300/180',
  },
  {
    title: 'Benjamin Åsberg',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    buttonLabel: 'Läs mer',
    image: 'https://picsum.photos/300/180',
  },
]

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

          {dummyData.map(info => (
            <InformationCard key={info.title} data={info} />
          ))}
        </ScrollView>
      </View>
    )
  }
}
